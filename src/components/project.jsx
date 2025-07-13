import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "EduMids – Learning Management System",
    description:
      "A full-featured MERN stack LMS with role-based dashboards, course management, quizzes, chat support, and Stripe integration.",
    link: "https://github.com/Salman2105/FYP-EduMinds-",
  },
  {
    title: "Bookstore App",
    description:
      "A modern MERN stack bookstore web app supporting CRUD operations, user auth, and dynamic book listings.",
    link: "https://github.com/Salman2105/Bookstore",
  },
  {
    title: "React Native Weather App",
    description:
      "A cross-platform weather app using OpenWeather API, built with React Native and styled-components.",
    link: "#",
  },
  {
    title: "Computer Vision Project",
    description:
      "A Python-based vision system using OpenCV for object detection and image classification with custom models.",
    link: "#",
  },
];

export default function Projects() {
  const { isDark } = useTheme();

  return (
    <section
      id="projects"
      className={`relative py-20 text-center transition-colors duration-300 ${
        isDark ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4"
      >
        <h2
          className={`text-3xl md:text-4xl font-bold mb-6 ${
            isDark ? "text-sky-400" : "text-sky-600"
          }`}
        >
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`rounded-xl p-6 shadow-md border text-left transition-colors duration-300 ${
                isDark
                  ? "bg-slate-900 border-slate-700 text-white"
                  : "bg-white border-slate-200 text-slate-900"
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-2 ${
                  isDark ? "text-sky-400" : "text-sky-600"
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`mb-4 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-500 hover:underline text-sm"
              >
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
