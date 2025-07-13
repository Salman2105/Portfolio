import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "../assets/heroBg.png"; // ensure image exists in assets
import { Download, Mail, CheckCircle } from "lucide-react";
import Typewriter from "typewriter-effect";
import { toast } from "react-hot-toast";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax zoom & fade
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  const scrollToContact = () => {
    const target = document.querySelector("#contact");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-sm w-full bg-white dark:bg-slate-800 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5 text-green-500">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                CV Downloaded
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-slate-300">
                Your resume has started downloading successfully.
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200 dark:border-slate-600">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-sky-600 hover:text-sky-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBg})`, scale, opacity }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-sky-900/60 backdrop-blur-[2px] z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl px-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Hi, I’m Salman
        </h1>
        <div className="text-lg md:text-2xl mb-8 text-slate-200 h-8">
          <Typewriter
            options={{
              strings: [
                "MERN Stack Developer",
                "E-commerce Specialist",
                "Full-Stack Web App Builder",
                "React & Node.js Enthusiast",
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
              pauseFor: 1500,
            }}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Download CV button */}
          <a
            href="/Salman_CV.pdf"
            download="Salman_Ahmed_CV.pdf"
            onClick={handleDownload}
            className="inline-flex items-center gap-2 rounded-md bg-sky-600 hover:bg-sky-500 focus:ring-4 focus:ring-sky-300 focus:ring-offset-2 px-6 py-3 font-medium transition"
          >
            <Download className="w-5 h-5" />Download CV
          </a>

          {/* View CV in new tab */}
          {/* <a
            href="/Salman_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-sky-400 hover:bg-sky-400/20 px-6 py-3 font-medium transition"
          >
            <Download className="w-5 h-5" />View CV
          </a> */}

          {/* Hire me button */}
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 rounded-md border border-sky-400 hover:bg-sky-400/20 px-6 py-3 font-medium transition"
          >
            <Mail className="w-5 h-5" />Hire Me
          </button>
        </div>
      </motion.div>
    </section>
  );
}
