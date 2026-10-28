import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutHero from "../assets/hero.jpg";
import img2 from "../assets/hero2.jpeg";

import whatsappImg from "../assets/whatsapp.png";

import deluxe1 from "../assets/hero4.jpeg";
import deluxe2 from "../assets/deluxe-1.jpg";
import deluxe3 from "../assets/deluxe-2.jpg";
import deluxe4 from "../assets/gallery2.jpeg";
import deluxe5 from "../assets/deluxe-4.jpeg";

function Accommodation() {
    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    const [selectedImg, setSelectedImg] = useState(null);

    const images = [deluxe1, deluxe2, deluxe3, deluxe4, deluxe5];

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[40vh] w-full">
                <img
                    src={aboutHero}
                    alt=""
                    className="absolute inset-0 w-full h-full object-fixed"
                />
                <div className="absolute inset-0 bg-black/60" />


            </section>

            {/* ================= Accommodation SECTION ================= */}
            <section className="relative bg-white py-12 sm:py-12 lg:py-12 px-4 sm:px-6 lg:px-16">
                <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* ===== Left Text Content ===== */}
                    <div data-aos="fade-left" className="flex justify-center">
                        <img
                            src={img2}
                            alt="Lunawa Beach Resort"
                            className="rounded-lg shadow-lg w-full max-w-[500px] h-[400px] sm:h-[500px] md:h-[500px] object-fixed"
                        />
                    </div>

                    {/* ===== Right Image ===== */}
                    <div data-aos="fade-right">

                        <span className="block w-16 h-[2px] bg-orange-400 mb-4"></span>

                        <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-gray-800">
                            Accommodation
                        </h2>

                        <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl">
                            “Peaceful moments by the coast… Unforgettable memories… A relaxing escape surrounded by the natural beauty of Moratuwa.”
                        </p>

                        <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl">
                            Lunawa Beach Resort offers a tranquil getaway where comfort meets nature. Enjoy thoughtfully designed accommodation, warm Sri Lankan hospitality, and a peaceful atmosphere for a truly memorable stay.
                        </p>
                    </div>

                </div>
            </section>

            {/* ================= DELUXE SUITE ROOM SECTION ================= */}
            <section className="bg-white py-10 px-4 sm:px-6 lg:px-16">
                <div className="max-w-6xl mx-auto">

                    {/* Title */}
                    <div className="text-center mb-12">
                        <span className="block w-20 h-[2px] bg-orange-400 mx-auto mb-4"></span>
                        <h2
                            data-aos="fade-up"
                            className="text-3xl sm:text-5xl font-bold text-gray-800"
                        >
                            Deluxe Suite Room
                        </h2>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="cursor-pointer overflow-hidden rounded-lg"
                                onClick={() => setSelectedImg(img)}
                            >
                                <img
                                    src={img}
                                    alt={`Deluxe Suite ${index + 1}`}
                                    className="w-full aspect-square object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>

                </div>

                {/* Popup Modal */}
                {selectedImg && (
                    <div
                        className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4"
                        onClick={() => setSelectedImg(null)}
                    >
                        <div className="relative">
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedImg(null)}
                                className="absolute -top-4 -right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow-lg hover:bg-gray-200 transition z-50"
                            >
                                &times;
                            </button>

                            <img
                                src={selectedImg}
                                alt="Expanded"
                                onClick={(e) => e.stopPropagation()}
                                className="rounded-lg shadow-lg
                         w-full
                         max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl
                         max-h-[80vh] object-contain"
                            />
                        </div>
                    </div>
                )}
            </section>

            {/* ================= FACILITIES SECTION ================= */}
            <section className="bg-white py-10 px-4 sm:px-6 lg:px-16">
                <div className="max-w-6xl mx-auto">

                    {/* Title */}
                    <div className="text-center mb-14">
                        <span className="block w-20 h-[2px] bg-orange-400 mx-auto mb-4"></span>
                        <h2
                            data-aos="fade-up"
                            className="text-3xl sm:text-5xl font-bold text-gray-800"
                        >
                            Facilities
                        </h2>
                    </div>

                    {/* Facilities Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-700 text-base sm:text-lg">

                        {/* Column 1 */}
                        <ul data-aos="fade-up" className="space-y-7">

                            <li className="flex items-start gap-4">
                                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#00A6C7] text-white text-lg">
                                    ✓
                                </span>
                                <p className="leading-relaxed">
                                    Spacious A-frame Resort (2 beds).
                                </p>
                            </li>

                            <li className="flex items-start gap-4">
                                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#00A6C7] text-white text-lg">
                                    ✓
                                </span>
                                <p className="leading-relaxed">
                                    Mini bar with local treats and drinks.
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#00A6C7] text-white text-lg">
                                    ✓
                                </span>
                                <p className="leading-relaxed">
                                    Free Wi-Fi and Netflix.
                                </p>
                            </li>
                        </ul>

                        {/* Column 2 */}
                        <ul data-aos="fade-up" data-aos-delay="100" className="space-y-7">
                            <li className="flex items-start gap-4">
                                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#00A6C7] text-white text-lg">
                                    ✓
                                </span>
                                <p className="leading-relaxed">
                                    Gazebo for chill-out moments.
                                </p>
                            </li>

                            <li className="flex items-start gap-4">
                                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#00A6C7] text-white text-lg">
                                    ✓
                                </span>
                                <p className="leading-relaxed">
                                    Meditation corner with calming vibes.
                                </p>
                            </li>
                        </ul>

                        {/* Column 3 */}
                        <ul data-aos="fade-up" data-aos-delay="200" className="space-y-7">
                            <li className="flex items-start gap-4">
                                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#00A6C7] text-white text-lg">
                                    ✓
                                </span>
                                <p className="leading-relaxed">
                                    BBQ area for sunset gatherings.
                                </p>
                            </li>

                            <li className="flex items-start gap-4">
                                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#00A6C7] text-white text-lg">
                                    ✓
                                </span>
                                <p className="leading-relaxed">
                                    Complimentary breakfast with local flavors.
                                </p>
                            </li>
                        </ul>

                    </div>

                </div>
            </section>

            {/* ================= WHATSAPP BUTTON ================= */}
            <a
                href="https://wa.me/94778667711?text=I%20saw%20your%20website.%20Can%20you%20give%20me%20information%20regarding%20your%20Cabana."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 z-50"
            >
                <img
                    src={whatsappImg}
                    alt="WhatsApp"
                    className="h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg transition hover:scale-110"
                />
            </a>

        </div>
    );
}

export default Accommodation;
