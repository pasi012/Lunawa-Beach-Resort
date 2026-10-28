import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import whatsappImg from "../assets/whatsapp.png";

import aboutHero from "../assets/hero.jpg";
import img1 from "../assets/hero1.jpeg";   // your right-side image
import img2 from "../assets/hero4.jpeg";   // (optional, if needed later)

function About() {
    useEffect(() => {
        AOS.init({ duration: 900, once: true });
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

            {/* ================= RESORT SECTION 1 ================= */}
            <section className="relative bg-white py-12 sm:py-12 lg:py-12 px-4 sm:px-6 lg:px-16">
                <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* ===== Left Text Content ===== */}
                    <div data-aos="fade-right">
                        <span className="block w-16 h-[2px] bg-orange-400 mb-4"></span>

                        <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-gray-800">
                            Lunawa Beach Resort
                        </h2>

                        <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl">
                            Relax at Lunawa Beach Resort in Moratuwa, Sri Lanka, where peaceful surroundings and natural beauty create the perfect getaway. Enjoy comfortable accommodation, unwind by the tranquil pond, savor delicious local flavors, and reconnect with nature. Whether you're planning a romantic escape or a family holiday, experience warm Sri Lankan hospitality and create unforgettable memories.
                        </p>

                    </div>

                    {/* ===== Right Image ===== */}
                    <div data-aos="fade-left" className="flex justify-center">
                        <img
                            src={img1}
                            alt="Lunawa Beach Resort"
                            className="rounded-lg shadow-lg w-full max-w-[500px] h-[400px] sm:h-[500px] md:h-[500px] object-fixed"
                        />
                    </div>

                </div>
            </section>

            {/* ================= RESORT SECTION 2 ================= */}
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

                        <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl">
                            At Lunawa Beach Resort, couples and families can enjoy a relaxing getaway in comfortable surroundings inspired by the natural beauty of Moratuwa. Experience warm Sri Lankan hospitality, delicious local cuisine, and a peaceful atmosphere perfect for unwinding. Whether you're planning a romantic escape or a family holiday, enjoy a memorable stay filled with comfort, relaxation, and unforgettable moments.
                        </p>

                        <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl">
                            Immerse yourself in the peaceful beauty of Lunawa Beach Resort as you unwind in tranquil surroundings and savor delicious local cuisine. Explore the scenic Lunawa Lagoon, enjoy the coastal charm of Lunawa Beach, and discover the natural beauty of nearby Bolgoda Lake for a memorable getaway in Moratuwa, Sri Lanka.
                        </p>
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

export default About;
