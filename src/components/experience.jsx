import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { FaReact, FaAmazon, FaStore } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNodedotjs, SiRailway } from "react-icons/si";

const experiences = [
  {
    title: "MERN Stack Developer",
    period: "2022 – Present",
    description:
      "Passionate developer with hands‑on experience building full‑stack web applications using MongoDB, Express.js, React.js, and Node.js. Skilled at crafting responsive, scalable, and secure systems, RESTful APIs, and deploying to cloud platforms like Railway.",
    icon: <FaReact className="text-sky-500" />,
    tools: [
      { label: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { label: "Express.js", icon: <SiExpress className="text-slate-500" /> },
      { label: "React.js", icon: <FaReact className="text-sky-500" /> },
      { label: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { label: "REST APIs" },
      { label: "Railway", icon: <SiRailway className="text-violet-600" /> },
    ],
  },
  {
    title: "E‑commerce Specialist (Dropshipping)",
    period: "2021 – Present",
    description:
      "Seasoned specialist with 3+ years managing Amazon, Costco, and Walmart dropshipping operations. Expertise in product research, listing optimization, order fulfillment, and account health management.",
    icon: <FaStore className="text-yellow-500" />,
    tools: [
      { label: "Amazon", icon: <FaAmazon className="text-yellow-500" /> },
      { label: "Walmart", icon: <FaStore className="text-blue-500" /> },
      { label: "Costco" },
      { label: "Product Research" },
      { label: "Listing Tools" },
      { label: "Customer Handling" },
    ],
  },
];

export default function Experience() {
  const { isDark } = useTheme();

  return (
    <section
      id="experience"
      className={`relative py-20 text-center transition-colors duration-300 ${
        isDark ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"
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
          className={`text-3xl md:text-4xl font-bold mb-12 ${
            isDark ? "text-sky-400" : "text-sky-600"
          }`}
        >
          Experience
        </h2>

        <div
          className={`relative border-l ml-4 ${
            isDark ? "border-sky-400" : "border-sky-500"
          }`}
        >
          {experiences.map(
            ({ title, period, description, icon, tools }, idx) => (
              <motion.div
                key={title}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
                className="relative mb-12 pl-6"
              >
                <div
                  className={`absolute -left-4 top-1 w-6 h-6 rounded-full border-4 flex items-center justify-center ${
                    isDark
                      ? "bg-slate-950 border-sky-400"
                      : "bg-white border-sky-500"
                  }`}
                >
                  <span className="text-lg">{icon}</span>
                </div>

                <h3
                  className={`text-xl font-semibold mb-1 ${
                    isDark ? "text-white" : "text-slate-700"
                  }`}
                >
                  {title}
                </h3>
                <span
                  className={`text-xs italic block mb-2 ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {period}
                </span>
                <p
                  className={`text-sm leading-relaxed mb-3 ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {tools.map(({ label, icon }) => (
                    <span
                      key={label}
                      className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                        isDark
                          ? "bg-sky-700 text-white"
                          : "bg-sky-100 text-sky-700"
                      }`}
                    >
                      {icon && <>{icon}</>}
                      {label}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}
