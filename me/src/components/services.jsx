import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { FaCode, FaDatabase, FaHeadset, FaAmazon, FaStore } from "react-icons/fa";
import { MdOutlineWeb, MdSupportAgent } from "react-icons/md";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const services = [
  {
    category: "Web Development",
    icon: <MdOutlineWeb className="text-blue-500" />,
    roles: [
      {
        title: "Full Stack Developer",
        description:
          "Build scalable, responsive, and secure web applications using the MERN stack. End-to-end application development, from backend to frontend.",
        tools: [
          { label: "MongoDB", icon: <SiMongodb /> },
          { label: "Express.js", icon: <SiExpress /> },
          { label: "React.js", icon: <SiReact /> },
          { label: "Node.js", icon: <SiNodedotjs /> },
        ],
      },
      {
        title: "Frontend Developer",
        description:
          "Craft interactive user interfaces with React, Tailwind CSS, and responsive design techniques for optimal cross-device experience.",
        tools: [
          { label: "React.js", icon: <SiReact /> },
          { label: "Tailwind CSS" },
        ],
      },
        {
        title: "Database Management",
        description:
          "Efficiently handle and organize data using DBMS concepts with hands-on SQL and NoSQL experience.",
        tools: [
          { label: "SQL" },
          { label: "MongoDB", icon: <SiMongodb /> },
        ],
      },
    ],
  },
  {
    category: "Virtual Assistant",
    icon: <MdSupportAgent className="text-purple-500" />,
    roles: [
      {
        title: "Dropshipping Specialist",
        description:
          "Manage Amazon, Walmart & Costco dropshipping operations: product sourcing, listing optimization, and order fulfillment.",
        tools: [
          { label: "Amazon", icon: <FaAmazon /> },
          { label: "Walmart", icon: <FaStore /> },
          { label: "Costco" },
        ],
      },
      {
        title: "Account Health & Performance",
        description:
          "Monitor and maintain seller account metrics and health for optimal platform standing.",
        tools: [
          { label: "Account Reports" },
          { label: "Appeals Handling" },
        ],
      },
      {
        title: "Customer Service",
        description:
          "Respond to customer inquiries, resolve complaints, and manage orders to ensure satisfaction.",
        tools: [
          { label: "Live Chat" },
          { label: "Email Support" },
        ],
      },
    ],
  },
];

export default function Services() {
  const { isDark } = useTheme();

  return (
    <section id="services" className={`relative py-20 text-center transition-colors duration-300 ${
      isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"
    }`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4"
      >
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center gap-3 ${
          isDark ? "text-sky-400" : "text-sky-600"
        }`}>
          <FaCode className="text-sky-500 text-4xl" /> Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {services.map(({ category, icon, roles }) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl shadow-md border transition-colors duration-300 ${
                isDark 
                  ? "bg-slate-800 border-slate-700 text-white" 
                  : "bg-slate-50 border-slate-200 text-slate-900"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{icon}</div>
                <h3 className={`text-xl font-semibold ${
                  isDark ? "text-white" : "text-slate-700"
                }`}>
                  {category}
                </h3>
              </div>
              <div className="space-y-6">
                {roles.map(({ title, description, tools }) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`border rounded-lg p-4 shadow-sm transition-colors duration-300 ${
                      isDark 
                        ? "bg-slate-900 border-slate-700 text-white" 
                        : "bg-white border-slate-200 text-slate-900"
                    }`}
                  >
                    <h4 className={`text-lg font-semibold ${
                      isDark ? "text-sky-400" : "text-sky-500"
                    }`}>
                      {title}
                    </h4>
                    <p className={`text-sm mb-2 ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}>
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
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
