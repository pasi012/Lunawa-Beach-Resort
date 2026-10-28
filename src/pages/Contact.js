import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutHero from "../assets/hero.jpg";

import whatsappImg from "../assets/whatsapp.png";

function Contact() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

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

            {/* ===== CONTACT INFO ===== */}
            <section
                data-aos="fade-up"
                className="max-w-7xl mx-auto px-4 py-12"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: "fas fa-map-marker-alt",
                            title: "Address Line",
                            text: "79 Puranappu Raja Mawatha, Moratuwa 10400, Sri Lanka"
                        },
                        {
                            icon: "fas fa-phone",
                            title: "Phone Number",
                            text: "077 866 7711 , 077 691 1224"
                        },
                        {
                            icon: "fas fa-envelope",
                            title: "Mail Address",
                            text: "lunawabeachresortmoratuwa@gmail.com"
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition"
                        >
                            <i className={`${item.icon} text-3xl text-orange-500 mb-4`} />
                            <h4 className="text-2xl md:text-3xl font-bold text-gray-800">{item.title}</h4>
                            <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== CONTACT + FORM ===== */}
            <section className="max-w-7xl mx-auto px-4 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* LEFT */}
                    <div data-aos="fade-right">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Get In Touch
                        </h2>
                        <p className="mb-6 text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl">
                            Discover Sri Lanka's top destinations, from pristine beaches
                            to scenic hills, all mapped for your perfect journey.
                        </p>

                        <div className="w-full h-[300px] md:h-[600px] rounded-xl overflow-hidden shadow">
                            <iframe
                                title="Lunawa Beach Resort Location"
                                src="https://www.google.com/maps?q=6.7852322,79.8759761&output=embed"
                                className="w-full h-full border-0"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div
                        data-aos="fade-left"
                        className="bg-white shadow-xl rounded-xl p-6 md:p-8"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                            Fill Up The Form
                        </h3>
                        <p className="mb-6 text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl">
                            Your email address will not be published. Required fields are marked *
                        </p>

                        <form
                            className="space-y-5"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const name = e.target[0].value;
                                const email = e.target[1].value;
                                const message = e.target[2].value;

                                window.location.href = `mailto:lunawabeachresortmoratuwa@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                            }}
                        >
                            <div>
                                <label className="block text-base md:text-lg font-medium mb-2">
                                    Your Name*
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full border rounded-lg px-4 py-3 text-base md:text-lg focus:ring-2 focus:ring-orange-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-base md:text-lg font-medium mb-2">
                                    Email Address*
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full border rounded-lg px-4 py-3 text-base md:text-lg focus:ring-2 focus:ring-orange-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-base md:text-lg font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="w-full border rounded-lg px-4 py-3 text-base md:text-lg focus:ring-2 focus:ring-orange-500 outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#00A6C7] px-8 py-3 text-white tracking-wide hover:bg-[#9e6325] transition"
                            >
                                Get In Touch
                            </button>
                        </form>
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

export default Contact;
