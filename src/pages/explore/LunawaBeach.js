import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutHero from "../../assets/LunawaBeachhero.jpg";
import img2 from "../../assets/lunawa Beach.jpg";

import whatsappImg from "../../assets/whatsapp.png";


function LunawaBeach() {

    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[40vh] w-full">
                <img
                    src={aboutHero}
                    alt="Moratuwa Beach"
                    className="absolute inset-0 w-full h-full object-fixed"
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
                    <h1 data-aos="fade-up" className="text-4xl border border-[#00A6C7] bg-black/40 backdrop-blur-sm p-6 sm:p-5 sm:text-3xl md:text-4xl font-bold mb-3">
                        Lunawa Beach
                    </h1>
                </div>
            </section>

            {/* ================= ABOUT SECTION ================= */}
            <section className="relative w-full py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Image */}
                    <div
                        data-aos="zoom-in"
                        className="w-full overflow-hidden rounded-xl shadow-lg"
                    >
                        <img
                            src={img2}
                            alt="Lunawa Beach"
                            className="w-full h-[500px] object-cover"
                        />
                    </div>

                    {/* Content Card */}
                    <div
                        data-aos="fade-up"
                        className="relative -mt-24 mx-auto max-w-4xl bg-white border border-[#00A6C7] p-8 md:p-12 shadow-xl"
                    >
                        <h2 className="text-3xl font-bold text-center mb-6">
                            Lunawa Beach
                        </h2>

                        <p className="text-gray-700 leading-relaxed text-justify mb-4">
                            Lunawa Beach is a beautiful coastal destination located in Moratuwa, along Sri Lanka’s southwestern shoreline. Known for its peaceful seaside atmosphere, sandy shores, and scenic views of the Indian Ocean, Lunawa Beach offers a relaxing escape for visitors seeking natural beauty away from the busy city environment.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-justify mb-4">
                            The beach provides a pleasant setting for leisurely walks, enjoying the sea breeze, and watching the sun set over the ocean. Its tranquil surroundings and coastal charm make it an inviting spot for those looking to unwind and experience the simple beauty of Sri Lanka’s coastline.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-justify">
                            With its natural scenery, peaceful atmosphere, and local coastal character, Lunawa Beach remains a charming destination in Moratuwa, offering visitors a refreshing seaside experience and a glimpse into Sri Lanka’s vibrant coastal lifestyle.
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

export default LunawaBeach;