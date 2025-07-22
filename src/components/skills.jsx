import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaCuttlefish,
  FaGithub,
  FaFigma,
  FaCode,
  FaUserTie,
  FaSearch,
  FaHeadset
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiCanva,
  SiCisco,
  SiRailway,
  SiGithubcopilot,
  SiPostman,
  SiAmazon,
  SiWalmart
} from "react-icons/si";

// ----------------------- Frontend & Backend ----------------------- //
const frontendSkills = [
  { label: "HTML", percent: 90, icon: <FaHtml5 className="text-orange-500" /> },
  { label: "CSS", percent: 80, icon: <FaCss3Alt className="text-blue-500" /> },
  { label: "JavaScript", percent: 80, icon: <FaJs className="text-yellow-400" /> },
  { label: "React", percent: 70, icon: <FaReact className="text-sky-400" /> },
];

const backendSkills = [
  { label: "MongoDB", percent: 80, icon: <SiMongodb className="text-green-500" /> },
  { label: "Node.js", percent: 70, icon: <FaNodeJs className="text-green-600" /> },
  { label: "Express", percent: 75, icon: <SiExpress className="text-slate-500" /> },
  { label: "C++", percent: 70, icon: <FaCuttlefish className="text-blue-700" /> },
];

// ----------------------- Tools & Platforms ----------------------- //
const toolCategories = {
  "Dev Tools": [
    {
      label: "GitHub",
      icon: <FaGithub className="text-gray-800 dark:text-white" />,
      tooltip: "Version control and collaboration platform",
      percent: 85,
    },
    {
      label: "VS Code",
      icon: <FaCode className="text-blue-600" />,
      tooltip: "Code editor by Microsoft",
      percent: 90,
    },
    {
      label: "GitHub Copilot",
      icon: <SiGithubcopilot className="text-emerald-500" />,
      tooltip: "AI coding assistant",
      percent: 70,
    },
  ],
  "Design Tools": [
    {
      label: "Figma",
      icon: <FaFigma className="text-pink-500" />,
      tooltip: "UI/UX design tool",
      percent: 80,
    },
    {
      label: "Canva",
      icon: <SiCanva className="text-cyan-500" />,
      tooltip: "Design presentations and assets",
      percent: 75,
    },
  ],
  "Deployment & Networking": [
    {
      label: "Railway",
      icon: <SiRailway className="text-violet-600" />,
      tooltip: "Cloud deployment platform",
      percent: 85,
    },
    {
      label: "Cisco",
      icon: <SiCisco className="text-blue-400" />,
      tooltip: "Networking and infrastructure",
      percent: 70,
    },
    {
      label: "Postman",
      icon: <SiPostman className="text-orange-500" />,
      tooltip: "API testing tool",
      percent: 90,
    },
  ],
  "Virtual Assistant": [
    {
      label: "Account Health Management",
      icon: <FaUserTie className="text-indigo-600" />,
      tooltip: "Monitoring and maintaining account performance",
      percent: 85,
    },
    {
      label: "Amazon Dropshipping",
      icon: <SiAmazon className="text-yellow-600" />,
      tooltip: "Product sourcing and listings on Amazon",
      percent: 90,
    },
    {
      label: "Costco/Walmart Ops",
      icon: <SiWalmart className="text-blue-700" />,
      tooltip: "Managing orders on retail platforms",
      percent: 85,
    },
    {
      label: "Product Search & Listing",
      icon: <FaSearch className="text-green-500" />,
      tooltip: "Product research and optimized listings",
      percent: 88,
    },
    {
      label: "Customer Services",
      icon: <FaHeadset className="text-purple-500" />,
      tooltip: "Handling queries and support",
      percent: 80,
    },
  ],
};

export default function Skills() {
  const { isDark } = useTheme();

  return (
    <section id="skills" className={`relative py-20 text-center transition-colors duration-300 ${
      isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"
    }`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4"
      >
        {/* ------------------ Section Heading ------------------ */}
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 ${
          isDark ? "text-sky-400" : "text-sky-600"
        }`}>
          Skills & Tech Stack
        </h2>

        {/* ------------------ Frontend ------------------ */}
        <SkillGrid title="Frontend" items={frontendSkills} />

        {/* ------------------ Backend ------------------ */}
        <SkillGrid title="Backend" items={backendSkills} />

        {/* ------------------ Tools / Platforms ------------------ */}
        <div>
          <h3 className="text-xl font-semibold text-sky-500 mb-6">Tools & Platforms</h3>
          {Object.entries(toolCategories).map(([category, items]) => (
            <SkillGrid key={category} title={category} items={items} showBars={true} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ----------------------- Reusable Grid Component ----------------------- //
function SkillGrid({ title, items, showBars = true }) {
  const { isDark } = useTheme();

  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold text-sky-500 mb-6">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {items.map(({ label, percent, icon, tooltip }) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <div className="text-4xl mb-2" title={tooltip ?? label}>
              {icon}
            </div>
            <span className={`text-sm font-medium ${
              isDark ? "text-slate-200" : "text-slate-600"
            }`}>
              {label}
            </span>
            {percent !== undefined && (
              <>
                <span className="text-xs text-sky-500 mt-1 font-semibold">{percent}%</span>
                {showBars && (
                  <div className={`w-full mt-2 h-2 rounded-full overflow-hidden ${
                    isDark ? "bg-slate-700" : "bg-slate-200"
                  }`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percent}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-sky-500"
                    />
                  </div>
                )}
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
