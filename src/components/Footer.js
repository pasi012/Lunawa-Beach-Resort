import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.jpeg";

import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black/90 text-white font-poppins text-base sm:text-[17px]">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-14 pb-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 items-start">

          {/* ABOUT */}
          <div className="text-center lg:text-left">
            <img
              src={logo}
              alt="Logo"
              className="mx-auto mb-5 w-[170px] sm:w-[190px] lg:mx-0 lg:w-[210px]"
            />

            <div className="space-y-4">
              <div className="flex items-start justify-center gap-3 lg:justify-start">
                <Mail size={18} className="mt-[2px]" />
                <span>lunawabeachresortmoratuwa@gmail.com</span>
              </div>

              <div className="flex items-start justify-center gap-3 lg:justify-start">
                <Phone size={18} className="mt-[2px]" />
                <span>+94 77 866 7711 , +94 77 691 1224</span>
              </div>

              <div className="flex items-start justify-center gap-3 lg:justify-start">
                <MapPin size={18} className="mt-[2px]" />
                <span>
                  79 Puranappu Raja Mawatha, Moratuwa 10400
                </span>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div className="text-center lg:text-left">
            <p className="mb-5 leading-relaxed opacity-90">
              Welcome to Lunawa Beach Resort, a peaceful coastal retreat in Moratuwa, Sri Lanka. Surrounded by natural beauty and tranquil lagoon views, our resort offers a relaxing escape where you can unwind, enjoy warm Sri Lankan hospitality, and create unforgettable memories.
            </p>

            <h3 className="mt-6 mb-4 text-lg sm:text-xl font-semibold uppercase">
              Services Req
            </h3>

            <ul className="space-y-3">
              {[
                ["About Us", "/about"],
                ["Terms & Conditions", "/terms-condition"],
                ["Privacy Policy", "/privacy-policy"],
                ["Contact", "/contact"],
              ].map(([label, link]) => (
                <li key={label}>
                  <Link
                    to={link}
                    className="inline-block transition duration-200 hover:text-[#1fa2ff]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FACEBOOK */}
          <div className="text-center">
            <h3 className="mb-4 text-lg sm:text-xl font-semibold uppercase">
              Follow Us on Facebook
            </h3>

            <div className="flex justify-center items-center w-full py-6">
              <div className="w-full max-w-[300px] overflow-hidden rounded-lg border border-white/10">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/profile.php?id=61595014387178&tabs=timeline&width=300&height=350&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true"
                  width="300"
                  height="350"
                  className="w-full border-0"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  title="Facebook Page"
                />
              </div>
            </div>

          </div>

          {/* WHATSAPP */}
          <div className="text-center lg:text-left">
            <h3 className="mb-4 text-lg sm:text-xl font-semibold uppercase">
              Contact Us on WhatsApp
            </h3>

            <a
              href="https://wa.me/94778667711?text=I%20saw%20your%20website.%20Can%20you%20give%20me%20information%20regarding%20your%20Cabana."
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-base font-semibold text-white transition hover:bg-[#1ebe5d]"
            >
              💬 Chat on WhatsApp
            </a>

            <p className="mb-4 text-sm sm:text-base text-gray-300">
              Fast response • Easy booking • 24/7 support
            </p>

            <div className="flex justify-center gap-6 text-xl lg:justify-start">
              {[FaFacebookF, FaYoutube, FaInstagram, FaPinterestP].map(
                (Icon, i) => (
                  <Icon
                    key={i}
                    className="cursor-pointer transition hover:text-[#1fa2ff]"
                  />
                )
              )}
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-white/10 pt-4 text-center text-sm sm:text-base opacity-80">
          Copyright © 2026 | Designed & Developed by SLTechnology (Pvt) LTD
        </div>
      </div>
    </footer>
  );
}


export default Footer;
