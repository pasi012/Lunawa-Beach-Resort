import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/vision-bg.jpeg";
import hero3 from "../assets/hero3.jpeg";
import hero4 from "../assets/Cocktail.jpg";

import g1 from "../assets/hero1.jpeg";
import g2 from "../assets/gallery2.jpeg";
import g3 from "../assets/vision-bg.jpeg";
import g4 from "../assets/hero4.jpeg";

import whatsappImg from "../assets/whatsapp.png";

function Home() {
  const [current, setCurrent] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  const [selectedImg, setSelectedImg] = useState(null);

  const images = [g1, g2, g3, g4];

  const slides = [
    {
      image: hero1,
      title: "Lunawa Beach Resort",
      subtitle: "Manage by MGCP Acccounting Servises (PVT) LTD",
    },
    {
      image: hero2,
      title: "Nature Meets Luxury",
      subtitle: "Manage by MGCP Acccounting Servises (PVT) LTD",
    },
    {
      image: hero3,
      title: "Relax & Unwind",
      subtitle: "Manage by MGCP Acccounting Servises (PVT) LTD",
    },
    {
      image: hero4,
      title: "Your Serene Escape at Lunawa Beach Resort",
      subtitle: "Manage by MGCP Acccounting Servises (PVT) LTD",
    },
  ];

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setShowContent(false);
    const t = setTimeout(() => setShowContent(true), 700);
    return () => clearTimeout(t);
  }, [current]);

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-full overflow-hidden">

      {/* ================= BEACH-STYLE HERO SECTION ================= */}
      <section className="relative min-h-[80vh] w-full overflow-hidden sm:min-h-[85vh] md:min-h-[90vh]">

        {/* HERO BACKGROUND SLIDES */}
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{
              opacity: index === current ? 1 : 0,
              scale: index === current ? 1.08 : 1,
            }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 6, ease: "linear" },
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />
        ))}

        {/* TROPICAL DARK GRADIENT */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/35 via-black/25 to-[#003746]/70" />

        {/* SUNLIGHT GLOW */}
        <motion.div
          className="pointer-events-none absolute -right-16 -top-20 z-[2] h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl sm:h-96 sm:w-96"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* FLOATING LIGHT REFLECTIONS */}
        <motion.div
          className="pointer-events-none absolute left-[12%] top-[18%] z-[2] h-2 w-2 rounded-full bg-white/60 blur-[2px]"
          animate={{
            y: [0, -18, 0],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="pointer-events-none absolute right-[20%] top-[30%] z-[2] h-3 w-3 rounded-full bg-cyan-100/50 blur-[3px]"
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* HERO CONTENT */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 pb-16 pt-8 sm:pb-20">

          <motion.div
            key={current}
            variants={containerVariants}
            initial="hidden"
            animate={showContent ? "visible" : "hidden"}
            className="w-full max-w-4xl border border-[#00A6C7]/70 bg-black/35 px-5 py-8 text-center text-white shadow-2xl backdrop-blur-sm sm:px-10 sm:py-12 md:px-16 md:py-14"
          >
            {/* DECORATIVE TOP LINE */}
            <motion.div
              variants={itemVariants}
              className="mx-auto mb-6 h-[2px] w-20 bg-[#00A6C7]"
            />

            {/* SUBTITLE LABEL */}
            <motion.p
              variants={itemVariants}
              className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-cyan-100 sm:text-sm sm:tracking-[0.45em]"
            >
              Welcome to Lunawa Beach Resort
            </motion.p>

            {/* MAIN HEADING */}
            <motion.h1
              variants={itemVariants}
              className="mb-5 text-3xl font-bold leading-tight tracking-wide sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {slides[current].title}
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-7 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base md:text-xl"
            >
              {slides[current].subtitle}
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            >
              <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/about")}
                className="w-full border border-[#00A6C7] bg-[#00A6C7] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition-colors duration-300 hover:bg-[#0089A5] sm:w-auto"
              >
                Discover More
              </motion.button>

              <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/accommodation")}
                className="w-full border border-white/80 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-[#006994] sm:w-auto"
              >
                Explore Rooms
              </motion.button>
            </motion.div>

          </motion.div>
        </div>

        {/* ANIMATED OCEAN WAVES */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-24 overflow-hidden sm:h-32 md:h-40">

          {/* BACK WAVE */}
          <motion.div
            className="absolute inset-y-0 left-0 flex h-full w-[200%]"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[0, 1].map((item) => (
              <svg
                key={item}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="h-full w-1/2 shrink-0"
              >
                <path
                  d="M0,150 C180,220 330,70 540,140 S900,220 1100,130 S1300,100 1440,150 L1440,320 L0,320 Z"
                  fill="#00A6C7"
                  fillOpacity="0.30"
                />
              </svg>
            ))}
          </motion.div>

          {/* MIDDLE WAVE */}
          <motion.div
            className="absolute inset-y-0 left-0 flex h-full w-[200%]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[0, 1].map((item) => (
              <svg
                key={item}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="h-full w-1/2 shrink-0"
              >
                <path
                  d="M0,180 C190,100 340,250 560,170 S920,80 1120,175 S1320,220 1440,165 L1440,320 L0,320 Z"
                  fill="#00A6C7"
                  fillOpacity="0.48"
                />
              </svg>
            ))}
          </motion.div>

          {/* FRONT WAVE */}
          <motion.div
            className="absolute inset-y-0 left-0 flex h-full w-[200%]"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[0, 1].map((item) => (
              <svg
                key={item}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="h-full w-1/2 shrink-0"
              >
                <path
                  d="M0,210 C180,150 350,260 560,205 S900,130 1100,210 S1320,260 1440,200 L1440,320 L0,320 Z"
                  fill="#00A6C7"
                  fillOpacity="0.75"
                />
              </svg>
            ))}
          </motion.div>

        </div>

        {/* BOTTOM WAVE HIGHLIGHT */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[6] h-3 bg-gradient-to-t from-[#00A6C7]/40 to-transparent" />

      </section>

      {/* ================= ABOUT LUNAWA BEACH RESORT SECTION ================= */}
      <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            <span className="mx-auto mb-5 block h-[3px] w-20 bg-[#00A6C7] lg:mx-0"></span>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#00A6C7]">
              Welcome to Lunawa
            </p>

            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl md:text-5xl">
              Discover Relaxation at
              <span className="mt-2 block text-[#00A6C7]">
                Lunawa Beach Resort
              </span>
            </h2>

            <p className="mt-4 text-lg italic text-gray-500 sm:text-xl">
              Your Perfect Escape into Nature
            </p>

            <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
              Experience a peaceful getaway at Lunawa Beach Resort, where natural
              beauty, comfort, and relaxation come together. Enjoy a refreshing
              swim, unwind in our tranquil surroundings, practice yoga, and discover
              the beauty of Sri Lankan hospitality.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              Whether you are planning a romantic escape, a family holiday, or a
              relaxing break from everyday life, Lunawa Beach Resort offers a
              welcoming atmosphere to slow down, reconnect with nature, and create
              unforgettable memories.
            </p>

            {/* RESORT HIGHLIGHTS */}
            <div className="mt-8 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">

              <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-xl">
                  🌿
                </span>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Natural Serenity
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Peaceful surroundings
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-xl">
                  🏡
                </span>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Cozy Accommodation
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Comfort for couples and families
                  </p>
                </div>
              </div>

            </div>

            {/* READ MORE BUTTON */}
            <button
              onClick={() => navigate("/about")}
              className="mt-9 rounded-md bg-[#00A6C7] px-8 py-3.5 font-semibold tracking-wide text-white shadow-md transition duration-300 hover:bg-[#0087A3] hover:shadow-lg"
            >
              Discover Our Resort
              <span className="ml-2" aria-hidden="true">→</span>
            </button>

          </div>

          {/* RIGHT IMAGE COLLAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[85%] max-w-[500px] sm:w-[80%] lg:w-full">

              {/* MAIN IMAGE */}
              <div className="overflow-hidden rounded-xl shadow-2xl">
                <img
                  src={require("../assets/hero1.jpeg")}
                  alt="Lunawa Beach Resort surroundings"
                  className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* TOP IMAGE - LARGER */}
              <div className="absolute -right-8 -top-10 z-10 w-36 overflow-hidden rounded-lg border-4 border-white shadow-xl sm:-right-12 sm:-top-12 sm:w-52 md:w-60 lg:w-64">
                <img
                  src={require("../assets/hero3.jpeg")}
                  alt="Lunawa Beach Resort entrance"
                  className="aspect-square w-full object-cover"
                />
              </div>

              {/* BOTTOM IMAGE - LARGER */}
              <div className="absolute -bottom-10 -left-8 z-10 w-40 overflow-hidden rounded-lg border-4 border-white shadow-xl sm:-bottom-12 sm:-left-12 sm:w-56 md:w-64 lg:w-72">
                <img
                  src={require("../assets/resort3.jpeg")}
                  alt="Lunawa Beach Resort interior and decor"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              {/* DECORATIVE BACKGROUND */}
              <div className="absolute -bottom-5 -right-5 -z-10 h-36 w-36 rounded-xl bg-cyan-50 sm:h-44 sm:w-44"></div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= VISION SECTION ================= */}
      <section
        className="relative h-[55vh] w-full bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${require("../assets/BolgodaLakeHero.jpg")})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div
          className="relative z-10 max-w-4xl px-6 text-center text-white"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <span className="block w-20 h-[2px] bg-blue-400 mx-auto mb-4"></span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
            Our Vision
          </h2>

          <p className="mt-6 text-white leading-relaxed text-base sm:text-lg md:text-xl">
            To offer guests a memorable escape at Lunawa Beach Resort, where the natural beauty of Sri Lanka, warm hospitality, and peaceful surroundings come together to create a truly relaxing experience. We are committed to providing comfortable accommodation, delightful dining, and personalized service for couples, families, and travelers seeking a refreshing getaway.
            
          </p>
        </div>
      </section>

      {/* ================= WONDERLAND SRI LANKA SECTION ================= */}
      <section className="bg-white py-10 sm:py-12 px-4 sm:px-6 lg:px-16">
        <div className="mx-auto max-w-7xl text-center">
          <span className="block w-20 h-[2px] bg-orange-400 mx-auto mb-4"></span>
          {/* Section Title */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Wonderland Lunawa
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl">
            Experience the unique charm of Moratuwa at Lunawa Beach Resort. Discover the scenic beauty of Lunawa Lagoon, enjoy the peaceful atmosphere of nearby coastal beaches, and explore the tranquil waters of Bolgoda Lake. Immerse yourself in Moratuwa’s rich fishing traditions, famous woodcraft and furniture heritage, and authentic Sri Lankan culture. Whether you seek relaxation, nature, or a memorable local experience, Lunawa Beach Resort is your perfect escape in the heart of Moratuwa.
          </p>

          {/* Cards */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">

            {/* Card */}
            {[
              {
                img: require("../assets/lunawa Beach.jpg"),
                title: "Lunawa Beach",
                text: "Lunawa Beach is a peaceful coastal getaway in Moratuwa, surrounded by natural beauty and tranquil lagoon views.",
                path: "/lunawa-beach",
              },
              {
                img: require("../assets/bolgoda lake.jpg"),
                title: "Bolgoda Lake",
                text: "Bolgoda Lake is a scenic freshwater lake near Moratuwa, perfect for boating, nature lovers, and peaceful waterfront escapes.",
                path: "/bolgoda-lake",
              },
              {
                img: require("../assets/kirala island.jpg"),
                title: "Kirala Island",
                text: "Kirala Island offers a peaceful natural escape, surrounded by lush greenery and scenic waterways near Moratuwa.",
                path: "/kirala-island",
              },
            ].map((card, i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg">

                {/* Image */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="
                    h-[320px] sm:h-[420px] lg:h-[500px]
                    w-full object-fixed
                    transition-transform duration-700
                    md:group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/55 flex flex-col justify-end p-4 sm:p-6">
                  <div className="border border-[#00A6C7] p-4 sm:p-6 text-white text-center">

                    <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3">
                      {card.title}
                    </h3>

                    <p className="mt-6 text-white leading-relaxed text-base sm:text-lg md:text-xl">
                      {card.text}
                    </p>

                    <button
                      onClick={() => navigate(card.path)}
                      className="
                        mt-4 sm:mt-6
                        bg-[#00A6C7]
                        px-5 py-2
                        text-xs sm:text-sm
                        tracking-wide
                        hover:bg-[#b26a30]
                        transition
                      "
                    >
                      Read More
                    </button>

                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CULINARY EXPERIENCE SECTION ================= */}
      <section
        className="
          relative w-full h-[50vh] sm:h-[60vh]
          bg-center bg-cover flex items-center
          md:bg-fixed
        "
        style={{
          backgroundImage: `url(${require("../assets/Cocktail.jpg")})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 w-full flex justify-center md:justify-end px-4 sm:px-10 lg:px-20">
          <div
            className="max-w-xl border border-[#00A6C7] bg-black/40 backdrop-blur-sm p-6 sm:p-10 text-white"
            data-aos="fade-up"
          >
            <span className="block h-[2px] w-16 bg-[#00A6C7] mb-4"></span>

            <h2 className="text-2xl sm:text-5xl md:text-4xl font-bold mb-4">
              Stuffing Oneself
            </h2>

            <p className="mt-6 text-white leading-relaxed text-base sm:text-lg md:text-xl">
              Savor local flavors & sunset dinners at Lunawa Beach Resort 🍴
            </p>

            <button
              onClick={() => navigate("/dining")}
              className="mt-6 bg-[#00A6C7] px-6 py-2 text-xs sm:text-sm tracking-widest uppercase hover:bg-[#b26a30]"
            >
              See More
            </button>
          </div>
        </div>
      </section>

      {/* ================= ACCOMMODATION SECTION ================= */}
      <section className="bg-white py-10 sm:py-10 px-4 sm:px-6 lg:px-16">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <span className="block h-[2px] w-16 bg-[#00A6C7] mb-4"></span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              Accommodation
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl">
              Lunawa Beach Resort offers comfortable, thoughtfully designed accommodation that blends modern elegance with the natural beauty of Moratuwa. Each room provides a peaceful and relaxing atmosphere, combining contemporary comforts with the charm of Sri Lankan hospitality for a memorable getaway.
            </p>

            <button
              onClick={() => navigate("/accommodation")}
              className="mt-8 bg-[#00A6C7] px-8 py-3 text-xs sm:text-sm tracking-widest uppercase text-white hover:bg-[#b26a30] transition"
            >
              Read More
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="relative w-full h-[380px] sm:h-[480px] md:h-[560px] lg:h-[620px] xl:h-[680px]"
            data-aos="fade-left"
          >
            <img
              src={require("../assets/accomadation.jpg")}
              alt="Lunawa Beach Resort Accommodation"
              className="w-full h-full object-fill rounded-md shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="bg-white py-8 sm:py-10 px-4 sm:px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <span className="block w-20 h-[2px] bg-orange-400 mx-auto mb-4"></span>
          <h2
            className="text-center text-3xl sm:text-5xl md:text-5xl font-bold text-gray-800 mb-6"
            data-aos="fade-up"
          >
            Lunawa Beach Resort
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-md shadow-md cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                onClick={() => setSelectedImg(img)}
              >
                <img
                  src={img}
                  alt={`Lunawa Beach Resort ${index + 1}`}
                  className="w-full h-[250px] sm:h-[400px] md:h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition"></div>
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

export default Home;
