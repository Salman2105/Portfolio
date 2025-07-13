import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql } from "react-icons/si";

const skills = [
  { label: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { label: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { label: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { label: "React", icon: <FaReact className="text-sky-400" /> },
  { label: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { label: "Express", icon: <SiExpress className="text-slate-600" /> },
  { label: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { label: "SQL", icon: <SiMysql className="text-sky-600" /> },
];

export default function AboutMe() {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className={`relative py-20 text-center transition-colors duration-300 ${
        isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2
          className={`text-3xl md:text-4xl font-bold mb-6 ${
            isDark ? "text-sky-400" : "text-sky-600"
          }`}
        >
          About Me
        </h2>
        <p
          className={`text-lg mb-12 ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}
        >
          I'm a passionate MERN Stack Developer with a focus on building full-stack
          web applications. I'm also skilled in SQL and experienced in integrating
          various technologies to deliver scalable and efficient solutions.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.label}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <span
                className={`text-sm font-medium ${
                  isDark ? "text-slate-200" : "text-slate-600"
                }`}
              >
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
