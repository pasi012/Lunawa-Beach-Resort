import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutHero from "../assets/hero.jpg";
import whatsappImg from "../assets/whatsapp.png";

// Import gallery images from assets
import gallery1 from "../assets/hero1.jpeg";
import gallery2 from "../assets/hero2.jpeg";
import gallery3 from "../assets/hero3.jpeg";
import gallery4 from "../assets/hero4.jpeg";
import gallery5 from "../assets/vision-bg.jpeg";
import gallery6 from "../assets/deluxe-1.jpg";
import gallery7 from "../assets/deluxe-2.jpg";
import gallery8 from "../assets/deluxe-3.jpeg";
import gallery9 from "../assets/deluxe-4.jpeg";
import gallery10 from "../assets/gallery1.jpg";
import gallery11 from "../assets/gallery2.jpeg";
import gallery12 from "../assets/gallery3.jpeg";
import gallery13 from "../assets/gallery4.jpeg";
import gallery14 from "../assets/gallery5.jpeg";
import gallery15 from "../assets/gallery1.jpeg";

// Gallery images array
const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
];

function Gallary() {
    const [selectedImg, setSelectedImg] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
        });
    }, []);

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[40vh] w-full">
                <img
                    src={aboutHero}
                    alt="Gallery Hero"
                    className="absolute inset-0 w-full h-full object-fill"
                />

                <div className="absolute inset-0 bg-black/60" />

            </section>

            {/* ================= GALLERY SECTION ================= */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">

                    <span className="block w-20 h-[2px] bg-orange-400 mx-auto mb-4" />

                    <div className="text-center mb-10">
                        <h2
                            data-aos="fade-up"
                            className="text-3xl md:text-5xl font-bold text-gray-800"
                        >
                            Our Moments
                        </h2>

                        <p
                            data-aos="fade-up"
                            data-aos-delay="150"
                            className="mt-5 text-gray-600 leading-relaxed text-base sm:text-lg"
                        >
                            Explore the beauty, comfort, and unforgettable
                            experiences of our Cabana.
                        </p>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                data-aos="zoom-in"
                                data-aos-delay={(index % 3) * 100}
                                onClick={() => setSelectedImg(image)}
                                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                            >
                                <img
                                    src={image}
                                    alt={`Cabana Gallery ${index + 1}`}
                                    loading="lazy"
                                    className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </div>

                </div>

                {/* ================= IMAGE MODAL ================= */}
                {selectedImg && (
                    <div
                        className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
                        onClick={() => setSelectedImg(null)}
                    >
                        <div className="relative">
                            <button
                                onClick={() => setSelectedImg(null)}
                                aria-label="Close image"
                                className="absolute -top-4 -right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow-lg hover:bg-gray-200 transition z-50"
                            >
                                &times;
                            </button>

                            <img
                                src={selectedImg}
                                alt="Expanded gallery image"
                                onClick={(e) => e.stopPropagation()}
                                className="rounded-lg shadow-lg max-w-full max-h-[80vh] w-auto object-contain"
                            />
                        </div>
                    </div>
                )}
            </section>

            {/* ================= WHATSAPP BUTTON ================= */}
            <a
                href="https://wa.me/94778667711?text=I%20saw%20your%20website.%20Can%20you%20give%20me%20information%20regarding%20your%20Cabana."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
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

export default Gallary;