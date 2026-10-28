import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutHero from "../assets/hero.jpg";

function TermsAndCondition() {
    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    const items = [
        { id: 1, title: "General Terms & Conditions", desc: `<p>Welcome to <strong>Lunawa Beach Resort</strong>, Moratuwa, Sri Lanka. By accessing our website, making a reservation, or staying at our property, you agree to comply with and be bound by these Terms and Conditions.</p>` },
        { id: 2, title: "General Information", desc: `<p>All information provided on this website is subject to availability and may change without prior notice. Lunawa Beach Resort reserves the right to modify or withdraw services at any time.</p>` },
        { id: 3, title: "Hotel Rules & Regulations", desc: `<ul><li>Check-in: 2:00 PM | Check-out: 11:00 AM</li><li>Valid identification required at check-in</li><li>Smoking only in designated areas</li><li>Guests are responsible for damages</li></ul>` },
        { id: 4, title: "Reservations & Bookings", desc: `<p>All reservations are subject to availability and confirmation. Bookings can be made via our website, email, or authorized platforms.</p>` },
        { id: 5, title: "Payment Policy", desc: `<p>A deposit or full payment may be required to confirm a booking. All prices are quoted in Sri Lankan Rupees unless otherwise stated.</p>` },
        { id: 6, title: "Amendments by Guests", desc: `<p>Any changes to confirmed bookings must be requested in writing and are subject to availability and additional charges.</p>` },
        { id: 7, title: "Liability & Responsibility", desc: `<p>Lunawa Beach Resort shall not be responsible for loss, damage, or injury except where required by law.</p>` },
        { id: 8, title: "Cancellation Policy", desc: `<ul><li>21 days or less – 100% charge</li><li>No-shows charged in full</li></ul>` },
        { id: 9, title: "Intellectual Property", desc: `<p>All website content is the property of Lunawa Beach Resort and may not be reproduced without permission.</p>` },
        { id: 10, title: "Privacy Policy", desc: `<p>Personal data collected is used only for booking and communication purposes in accordance with our Privacy Policy.</p>` }
    ];

    const [active, setActive] = useState(1);
    const activeItem = items.find(i => i.id === active);

    return (
        <div className="w-full bg-gray-50">

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[40vh] w-full">
                <img
                    src={aboutHero}
                    alt="Lunawa Beach Resort Privacy Policy"
                    className="absolute inset-0 w-full h-full object-fixed"
                />
                <div className="absolute inset-0 bg-black/60" />
                
            </section>

            {/* ================= MAIN ================= */}
            <section className="max-w-7xl mx-auto px-4 py-16" data-aos="fade-up">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* SIDEBAR */}
                    <div className="md:col-span-1 bg-white rounded-xl shadow p-6 space-y-3">
                        {items.map(item => (
                            <button
                                key={item.id}
                                onClick={() => setActive(item.id)}
                                className={`w-full text-left px-5 py-4 rounded-lg text-base font-semibold transition
                                ${active === item.id
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 text-gray-800 hover:bg-blue-100"
                                    }`}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>

                    {/* CONTENT */}
                    <div className="md:col-span-3 bg-white rounded-xl shadow p-10">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            {activeItem?.title}
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-600 mb-6">
                            Description
                        </h3>

                        <div
                            className="prose prose-xl max-w-none prose-gray leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: activeItem?.desc || "" }}
                        />
                    </div>

                </div>
            </section>
        </div>
    );
}

export default TermsAndCondition;
