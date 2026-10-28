
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import aboutHero from "../assets/hero.jpg";
import whatsappImg from "../assets/whatsapp.png";

import { db } from "../firebase";
import {
    collection,
    addDoc,
    onSnapshot,
    Timestamp,
} from "firebase/firestore";

const ROOM_DETAILS = {
    "701": {
        roomType: "Standard AC Room",
        price: 6000,
        description: "Comfortable air-conditioned standard room.",
    },
    "702": {
        roomType: "Standard AC Room",
        price: 6000,
        description: "Comfortable air-conditioned standard room.",
    },
    "703": {
        roomType: "Standard AC Room",
        price: 6000,
        description: "Comfortable air-conditioned standard room.",
    },
    "704": {
        roomType: "Standard AC Room",
        price: 6000,
        description: "Comfortable air-conditioned standard room.",
    },
    "705": {
        roomType: "Standard AC Room",
        price: 6000,
        description: "Comfortable air-conditioned standard room.",
    },
    "706": {
        roomType: "Special Sea View AC Room",
        price: 7500,
        description:
            "Private balcony, sea view, tea and milk tea facilities.",
    },
    "707": {
        roomType: "Special Sea View AC Room",
        price: 7500,
        description:
            "Private balcony, sea view, tea and milk tea facilities.",
    },
};

const ROOM_NUMBERS = Object.keys(ROOM_DETAILS);

function BookNow() {
    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    const [bookings, setBookings] = useState([]);
    const [bookingsLoaded, setBookingsLoaded] = useState(false);
    const [availabilityError, setAvailabilityError] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        roomNumber: "701",
        name: "",
        email: "",
        phone: "",
        country: "",
        arrival: null,
        departure: null,
        adults: "1",
        children: "0",
    });

    // Fetch existing booking records from Firestore.
    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "bookings"),
            (snapshot) => {
                const bookingList = snapshot.docs.map((document) => ({
                    id: document.id,
                    ...document.data(),
                }));

                setBookings(bookingList);
                setBookingsLoaded(true);
                setAvailabilityError(false);
            },
            (error) => {
                console.error("Error loading bookings:", error);
                setBookingsLoaded(false);
                setAvailabilityError(true);
            }
        );

        return () => unsubscribe();
    }, []);

    // Convert Firestore timestamps or date values into JavaScript dates.
    const toDate = (value) => {
        if (!value) return null;

        if (value instanceof Timestamp) {
            return value.toDate();
        }

        if (typeof value.toDate === "function") {
            return value.toDate();
        }

        const date = new Date(value);

        return Number.isNaN(date.getTime()) ? null : date;
    };

    // Normalize dates to local calendar days.
    const startOfDay = (date) =>
        new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
        );

    // Hotel date ranges use check-in inclusive and check-out exclusive.
    const datesOverlap = (
        arrival,
        departure,
        bookedArrival,
        bookedDeparture
    ) => {
        return (
            startOfDay(arrival) < startOfDay(bookedDeparture) &&
            startOfDay(departure) > startOfDay(bookedArrival)
        );
    };

    // Pending requests are included to reduce accidental duplicate requests.
    // Cancelled and rejected bookings do not block a room.
    const isActiveBooking = (booking) => {
        const status = String(booking.status || "pending").toLowerCase();

        return !["cancelled", "rejected"].includes(status);
    };

    // Check if a specific room is booked during the selected dates.
    const isRoomBooked = (
        roomNumber,
        arrival,
        departure,
        currentBookings = bookings
    ) => {
        if (!arrival || !departure) return false;

        return currentBookings.some((booking) => {
            if (!isActiveBooking(booking)) return false;

            // New records store roomNumber directly.
            // Older records may only have roomType.
            const bookedRoomNumber = booking.roomNumber;

            if (bookedRoomNumber) {
                if (String(bookedRoomNumber) !== String(roomNumber)) {
                    return false;
                }
            } else {
                // Legacy records cannot be safely assigned to an individual
                // standard room, so they are not automatically assigned here.
                // Review old records before relying on this inventory.
                return false;
            }

            const bookedArrival = toDate(booking.arrival);
            const bookedDeparture = toDate(booking.departure);

            if (!bookedArrival || !bookedDeparture) return false;

            return datesOverlap(
                arrival,
                departure,
                bookedArrival,
                bookedDeparture
            );
        });
    };

    // Determine availability for the selected room.
    const selectedRoom = ROOM_DETAILS[formData.roomNumber];

    const selectedRoomAvailable =
        formData.arrival &&
        formData.departure &&
        bookingsLoaded &&
        !isRoomBooked(
            formData.roomNumber,
            formData.arrival,
            formData.departure
        );

    // Show room availability for a requested date range.
    const getRoomAvailability = (roomNumber) => {
        if (!bookingsLoaded) {
            return "Loading...";
        }

        // Without selected dates, show general status.
        if (!formData.arrival || !formData.departure) {
            const hasBooking = bookings.some((booking) => {
                if (!isActiveBooking(booking)) return false;

                return String(booking.roomNumber) === String(roomNumber);
            });

            return hasBooking ? "Has Bookings" : "Available";
        }

        return isRoomBooked(
            roomNumber,
            formData.arrival,
            formData.departure
        )
            ? "Booked"
            : "Available";
    };

    // Highlight dates with booking records in the calendar.
    const getBookedDates = () => {
        const dates = [];

        bookings.forEach((booking) => {
            if (!isActiveBooking(booking)) return;

            const arrival = toDate(booking.arrival);
            const departure = toDate(booking.departure);

            if (!arrival || !departure) return;

            const current = startOfDay(arrival);
            const last = startOfDay(departure);

            // The checkout day is not an occupied night.
            while (current < last) {
                dates.push(new Date(current));
                current.setDate(current.getDate() + 1);
            }
        });

        return dates;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleArrivalChange = (date) => {
        setFormData((previous) => ({
            ...previous,
            arrival: date,
            departure:
                date &&
                    previous.departure &&
                    startOfDay(previous.departure) <= startOfDay(date)
                    ? null
                    : previous.departure,
        }));
    };

    const handleDepartureChange = (date) => {
        setFormData((previous) => ({
            ...previous,
            departure: date,
        }));
    };

    // Validate and save the booking request.
    const handleSaveBooking = async () => {
        if (availabilityError || !bookingsLoaded) {
            alert(
                "Room availability could not be verified. Please refresh the page or contact us."
            );
            return false;
        }

        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.phone.trim() ||
            !formData.country.trim() ||
            !formData.arrival ||
            !formData.departure ||
            !formData.adults
        ) {
            alert("Please fill in all required fields.");
            return false;
        }

        if (
            startOfDay(formData.arrival) >=
            startOfDay(formData.departure)
        ) {
            alert("Departure date must be after arrival date.");
            return false;
        }

        const adults = Number(formData.adults);
        const children = Number(formData.children || 0);

        if (!Number.isInteger(adults) || adults < 1) {
            alert("Please enter at least one adult.");
            return false;
        }

        if (!Number.isInteger(children) || children < 0) {
            alert("Please enter a valid number of children.");
            return false;
        }

        // Sri Lankan local mobile number or international +94 format.
        const phone = formData.phone.trim();
        const phonePattern = /^(?:07\d{8}|\+94\d{9}|0094\d{9})$/;

        if (!phonePattern.test(phone)) {
            alert(
                "Enter a valid phone number, e.g. 0771234567 or +94771234567."
            );
            return false;
        }

        if (!ROOM_DETAILS[formData.roomNumber]) {
            alert("Please select a valid room.");
            return false;
        }

        // Check the selected room against the latest client-side booking list.
        if (
            isRoomBooked(
                formData.roomNumber,
                formData.arrival,
                formData.departure
            )
        ) {
            alert(
                `Room ${formData.roomNumber} is unavailable for those dates. Please select another room or different dates.`
            );
            return false;
        }

        const room = ROOM_DETAILS[formData.roomNumber];

        try {
            await addDoc(collection(db, "bookings"), {
                roomNumber: formData.roomNumber,
                roomType: room.roomType,
                roomPrice: room.price,
                name: formData.name.trim(),
                email: formData.email.trim(),
                phone,
                country: formData.country.trim(),
                arrival: Timestamp.fromDate(
                    startOfDay(formData.arrival)
                ),
                departure: Timestamp.fromDate(
                    startOfDay(formData.departure)
                ),
                adults,
                children,
                createdAt: Timestamp.now(),
                status: "pending",
            });

            return true;
        } catch (error) {
            console.error("Booking save error:", error);
            alert("Unable to save your booking request. Please try again.");
            return false;
        }
    };

    // Send the booking details to the resort via WhatsApp.
    const handleWhatsApp = () => {
        const room = ROOM_DETAILS[formData.roomNumber];

        const message = [
            "NEW BOOKING REQUEST",
            "",
            "Lunawa Beach Resort",
            `Room Number: ${formData.roomNumber}`,
            `Room Type: ${room.roomType}`,
            `Price: Rs. ${room.price.toLocaleString()} per day`,
            `Room Facilities: ${room.description}`,
            `Name: ${formData.name}`,
            `Email: ${formData.email}`,
            `Phone: ${formData.phone}`,
            `Country: ${formData.country}`,
            `Check-in: ${formData.arrival.toDateString()}`,
            `Check-out: ${formData.departure.toDateString()}`,
            `Adults: ${formData.adults}`,
            `Children: ${formData.children || 0}`,
            "",
            "Please confirm room availability.",
        ].join("\n");

        const whatsappNumber = "94778667711";

        window.open(
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
            "_blank",
            "noopener,noreferrer"
        );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (submitting) return;

        setSubmitting(true);

        try {
            const saved = await handleSaveBooking();

            if (saved) {
                handleWhatsApp();

                setFormData({
                    roomNumber: "701",
                    name: "",
                    email: "",
                    phone: "",
                    country: "",
                    arrival: null,
                    departure: null,
                    adults: "1",
                    children: "0",
                });

                alert(
                    "Your booking request has been saved. Please wait for confirmation from the resort."
                );
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="w-full overflow-hidden">
            {/* HERO */}
            <section className="relative h-[40vh] min-h-[250px] w-full">
                <img
                    src={aboutHero}
                    alt="Lunawa Beach Resort"
                    className="absolute inset-0 h-full w-full object-fill"
                />

                <div className="absolute inset-0 bg-black/50" />


            </section>

            {/* ROOM DETAILS */}
            <section className="bg-gray-50 px-4 py-12 sm:px-6">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                            Our Rooms
                        </h2>
                        <p className="mt-3 text-gray-600">
                            All 7 rooms are air-conditioned. No non-AC rooms
                            are available.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* STANDARD ROOMS */}
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Standard AC Rooms
                            </h3>

                            <p className="mt-2 text-gray-600">
                                Rooms 701, 702, 703, 704 and 705.
                            </p>

                            <p className="mt-4 text-2xl font-bold text-[#00A6C7]">
                                Rs. 6,000
                                <span className="text-sm font-normal text-gray-500">
                                    {" "}/ day
                                </span>
                            </p>
                        </div>

                        {/* SPECIAL ROOMS */}
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Special Sea-View AC Rooms
                            </h3>

                            <p className="mt-2 text-gray-600">
                                Rooms 706 and 707.
                            </p>

                            <p className="mt-2 text-gray-600">
                                Private balcony, sea view, tea and milk tea facilities.
                            </p>

                            <p className="mt-4 text-2xl font-bold text-[#00A6C7]">
                                Rs. 7,500
                                <span className="text-sm font-normal text-gray-500">
                                    {" "}/ day
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* BOOKING FORM */}
            <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 md:grid-cols-3">
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 gap-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:grid-cols-2 sm:p-7 md:col-span-2"
                    >
                        <div className="sm:col-span-2">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Make a Reservation
                            </h2>
                            <p className="mt-2 text-sm text-gray-500">
                                Select your preferred room number and dates.
                            </p>
                        </div>

                        {/* ROOM NUMBER */}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="roomNumber"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Select Room Number
                            </label>

                            <select
                                id="roomNumber"
                                name="roomNumber"
                                value={formData.roomNumber}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#00A6C7]"
                            >
                                {ROOM_NUMBERS.map((number) => {
                                    const room = ROOM_DETAILS[number];

                                    return (
                                        <option key={number} value={number}>
                                            Room {number} - {room.roomType} - Rs.{" "}
                                            {room.price.toLocaleString()}/day
                                        </option>
                                    );
                                })}
                            </select>

                            <div className="mt-3 rounded-lg bg-cyan-50 p-4">
                                <p className="font-semibold text-gray-800">
                                    Room {formData.roomNumber} - {selectedRoom.roomType}
                                </p>

                                <p className="mt-1 text-sm text-gray-600">
                                    {selectedRoom.description}
                                </p>

                                <p className="mt-2 font-bold text-[#00A6C7]">
                                    Rs. {selectedRoom.price.toLocaleString()} per day
                                </p>

                                {formData.arrival && formData.departure && (
                                    <p
                                        className={`mt-2 text-sm font-semibold ${!bookingsLoaded
                                                ? "text-gray-600"
                                                : selectedRoomAvailable
                                                    ? "text-green-700"
                                                    : "text-red-600"
                                            }`}
                                    >
                                        {!bookingsLoaded
                                            ? "Checking availability..."
                                            : selectedRoomAvailable
                                                ? `Room ${formData.roomNumber} is available for the selected dates.`
                                                : `Room ${formData.roomNumber} is unavailable for the selected dates.`}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* NAME */}
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            autoComplete="name"
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-3"
                        />

                        {/* EMAIL */}
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            autoComplete="email"
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-3"
                        />

                        {/* PHONE */}
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="WhatsApp Number"
                            autoComplete="tel"
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-3"
                        />

                        {/* COUNTRY */}
                        <input
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Country"
                            autoComplete="country-name"
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-3"
                        />

                        {/* CHECK-IN */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Check-in Date
                            </label>

                            <DatePicker
                                selected={formData.arrival}
                                onChange={handleArrivalChange}
                                minDate={startOfDay(new Date())}
                                selectsStart
                                startDate={formData.arrival}
                                endDate={formData.departure}
                                placeholderText="Select check-in date"
                                dateFormat="dd/MM/yyyy"
                                required
                                wrapperClassName="w-full"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3"
                            />
                        </div>

                        {/* CHECK-OUT */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Check-out Date
                            </label>

                            <DatePicker
                                selected={formData.departure}
                                onChange={handleDepartureChange}
                                minDate={
                                    formData.arrival
                                        ? new Date(
                                            formData.arrival.getFullYear(),
                                            formData.arrival.getMonth(),
                                            formData.arrival.getDate() + 1
                                        )
                                        : new Date(
                                            new Date().getFullYear(),
                                            new Date().getMonth(),
                                            new Date().getDate() + 1
                                        )
                                }
                                selectsEnd
                                startDate={formData.arrival}
                                endDate={formData.departure}
                                placeholderText="Select check-out date"
                                dateFormat="dd/MM/yyyy"
                                required
                                wrapperClassName="w-full"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3"
                            />
                        </div>

                        {/* ADULTS */}
                        <div>
                            <label
                                htmlFor="adults"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Adults
                            </label>
                            <input
                                id="adults"
                                type="number"
                                name="adults"
                                value={formData.adults}
                                onChange={handleChange}
                                min="1"
                                step="1"
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-3"
                            />
                        </div>

                        {/* CHILDREN */}
                        <div>
                            <label
                                htmlFor="children"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Children
                            </label>
                            <input
                                id="children"
                                type="number"
                                name="children"
                                value={formData.children}
                                onChange={handleChange}
                                min="0"
                                step="1"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3"
                            />
                        </div>

                        {/* SUBMIT */}
                        <div className="mt-3 sm:col-span-2">
                            <button
                                type="submit"
                                disabled={
                                    submitting ||
                                    !bookingsLoaded ||
                                    availabilityError ||
                                    (formData.arrival &&
                                        formData.departure &&
                                        !selectedRoomAvailable)
                                }
                                className="w-full rounded-lg bg-[#00A6C7] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#0089A5] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {submitting
                                    ? "Submitting..."
                                    : !bookingsLoaded
                                        ? "Loading Availability..."
                                        : "Request Booking via WhatsApp"}
                            </button>

                            <p className="mt-3 text-center text-xs text-gray-500">
                                Your booking remains pending until the resort
                                confirms your reservation.
                            </p>
                        </div>
                    </form>

                    {/* AVAILABILITY CALENDAR */}
                    <div className="w-full rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
                        <h3 className="mb-2 text-center text-xl font-bold text-[#00A6C7]">
                            Availability Calendar
                        </h3>

                        <p className="mb-4 text-center text-sm text-gray-500">
                            Highlighted dates contain booking requests. Select
                            your dates and room number to check availability.
                        </p>

                        <div className="flex justify-center overflow-x-auto">
                            <DatePicker
                                inline
                                minDate={startOfDay(new Date())}
                                highlightDates={[
                                    {
                                        "booked-date": getBookedDates(),
                                    },
                                ]}
                            />
                        </div>

                        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
                            <span className="h-3 w-3 rounded-sm bg-red-400" />
                            Dates with bookings
                        </div>

                        <div className="mt-5 border-t border-gray-200 pt-4">
                            <h4 className="mb-3 font-semibold text-gray-800">
                                Room Status
                            </h4>

                            <p className="mb-4 text-xs text-gray-500">
                                {formData.arrival && formData.departure
                                    ? "Availability for your selected dates"
                                    : "Select check-in and check-out dates to check availability"}
                            </p>

                            <div className="space-y-3">
                                {ROOM_NUMBERS.map((number) => {
                                    const status = getRoomAvailability(number);
                                    const room = ROOM_DETAILS[number];
                                    const isSelected = formData.roomNumber === number;

                                    const statusClass =
                                        status === "Available"
                                            ? "bg-green-100 text-green-700"
                                            : status === "Booked" ||
                                                status === "Has Bookings"
                                                ? "bg-red-100 text-red-700"
                                                : "bg-gray-100 text-gray-600";

                                    return (
                                        <div
                                            key={number}
                                            className={`flex items-center justify-between gap-3 rounded-lg border p-3 ${isSelected
                                                ? "border-[#00A6C7] bg-cyan-50"
                                                : "border-gray-200 bg-white"
                                                }`}
                                        >
                                            <div className="min-w-0">
                                                <p className="font-semibold text-gray-800">
                                                    Room {number}
                                                    {isSelected && (
                                                        <span className="ml-2 text-xs text-[#0089A5]">
                                                            Selected
                                                        </span>
                                                    )}
                                                </p>

                                                <p className="text-xs text-gray-500">
                                                    Rs. {room.price.toLocaleString()}/day
                                                </p>
                                            </div>

                                            <div className="flex shrink-0 items-center gap-2">
                                                <span
                                                    className={`rounded-full px-2 py-1 text-xs font-semibold ${statusClass}`}
                                                >
                                                    {status}
                                                </span>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setFormData((previous) => ({
                                                            ...previous,
                                                            roomNumber: number,
                                                        }))
                                                    }
                                                    className="rounded-md bg-[#00A6C7] px-3 py-2 text-xs font-semibold text-white hover:bg-[#0089A5]"
                                                >
                                                    Select
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FLOATING WHATSAPP BUTTON */}
            <a
                href="https://wa.me/94778667711?text=Hello%20Lunawa%20Beach%20Resort%2C%20I%20would%20like%20to%20inquire%20about%20room%20availability."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Lunawa Beach Resort on WhatsApp"
                className="fixed bottom-5 right-5 z-50"
            >
                <img
                    src={whatsappImg}
                    alt="WhatsApp"
                    className="h-12 w-12 rounded-full shadow-lg transition hover:scale-110 sm:h-14 sm:w-14"
                />
            </a>
        </div>
    );
}

export default BookNow;
