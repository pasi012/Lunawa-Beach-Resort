import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutHero from "../../assets/KiralaIslandhero.jpg";
import img2 from "../../assets/kirala island.jpg";

import whatsappImg from "../../assets/whatsapp.png";

function KiralaIsland() {

    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[40vh] w-full">
                <img
                    src={aboutHero}
                    alt="Kirala Island"
                    className="absolute inset-0 w-full h-full object-fixed"
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
                    <h1 data-aos="fade-up" className="text-4xl border border-[#00A6C7] bg-black/40 backdrop-blur-sm p-6 sm:p-5 sm:text-3xl md:text-4xl font-bold mb-3">
                        Kirala Island
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
                            alt="Kirala Island"
                            className="w-full h-[500px] object-cover"
                        />
                    </div>

                    {/* Content Card */}
                    <div
                        data-aos="fade-up"
                        className="relative -mt-24 mx-auto max-w-4xl bg-white border border-[#00A6C7] p-8 md:p-12 shadow-xl"
                    >
                        <h2 className="text-3xl font-bold text-center mb-6">
                            Kirala Island
                        </h2>

                        <p className="text-gray-700 leading-relaxed text-justify mb-4">
                            Kirala Island is a beautiful natural attraction in Sri Lanka, known for
                            its peaceful surroundings, lush greenery, and scenic waterways. The
                            island offers visitors an opportunity to experience the beauty of the
                            country's tropical landscape and enjoy a relaxing escape into nature.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-justify mb-4">
                            Surrounded by water and rich vegetation, Kirala Island provides a
                            tranquil setting for nature lovers and photography enthusiasts. Its
                            natural environment and quiet atmosphere make it an appealing place
                            to explore the local scenery and appreciate Sri Lanka's biodiversity.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-justify">
                            With its natural charm and serene atmosphere, Kirala Island offers
                            visitors a refreshing outdoor experience, highlighting the beauty
                            of Sri Lanka's waterways and tropical surroundings.
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

export default KiralaIsland;