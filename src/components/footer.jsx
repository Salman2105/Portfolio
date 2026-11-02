import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll‑to‑Top Button */}
      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-sky-600 text-white shadow-lg hover:bg-sky-700 focus:outline-none"
        >
          <FaArrowUp />
        </motion.button>
      )}

      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`py-10 border-t transition-colors duration-300 ${
          isDark
            ? "bg-slate-900 text-slate-300 border-slate-700"
            : "bg-slate-100 text-slate-700 border-slate-200"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* --- Contact Info --- */}
          <div>
            <h4
              className={`text-lg font-semibold mb-3 ${
                isDark ? "text-sky-400" : "text-sky-600"
              }`}
            >
              Contact Info
            </h4>
            <p className="flex items-center gap-2 text-sm mb-2">
              <FaMapMarkerAlt className="text-sky-500" /> Daska,Punjab,Pakistan
            </p>
            <p className="flex items-center gap-2 text-sm mb-2">
              <FaEnvelope className="text-sky-500" /> sa6833764@gmail.com
            </p>
            <p className="flex items-center gap-2 text-sm">
              <FaClock className="text-sky-500" /> Available: Mon – Fri | 9am – 6pm PKT
            </p>
          </div>

          {/* --- Quick Links --- */}
          <div>
            <h4
              className={`text-lg font-semibold mb-3 ${
                isDark ? "text-sky-400" : "text-sky-600"
              }`}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-sky-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-sky-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-sky-500 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-sky-500 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-sky-500 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-sky-500 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-sky-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* --- Social Links --- */}
          <div>
            <h4
              className={`text-lg font-semibold mb-3 ${
                isDark ? "text-sky-400" : "text-sky-600"
              }`}
            >
              Connect with Me
            </h4>
            <div className="flex flex-wrap gap-4 text-2xl">
              <a
                href="https://www.facebook.com/share/1Gd5xvepxt/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/salmangoraya05?igsh=dXRjdjk3ZW90b2Ey"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/salman-ahmed-a76708356/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.fiverr.com/salmanahmed021/buying?source=avatar_menu_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                <FaBriefcase />
              </a>
              <a
                href="https://upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 transition-colors"
              >
                <SiUpwork />
              </a>
              <a
                href="https://www.youtube.com/@salmanahmed5183"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* --- Bottom Line --- */}
        <div
          className={`mt-10 text-center text-xs space-y-1 ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          <div>
            &copy; {new Date().getFullYear()} Salman Ahmed. All rights reserved.
          </div>
          {/* <div>
            All product names, logos, and brands are property of their respective owners. Use of these names, logos, and brands does not imply endorsement.
          </div> */}
        </div>
      </motion.footer>
    </>
  );
}
