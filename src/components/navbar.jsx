import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import {
  Home,
  User,
  Folder,
  Cpu,
  Briefcase,
  Settings,
  Mail,
  Menu,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About Me", href: "#about", icon: User },
  { label: "Projects", href: "#projects", icon: Folder },
  { label: "Tech Stack", href: "#skills", icon: Cpu },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Services", href: "#services", icon: Settings },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (let item of NAV_ITEMS) {
        const section = document.querySelector(item.href);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActive(item.href);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
      isDark ? "bg-slate-900 text-white" : "bg-white/70 backdrop-blur-lg"
    } shadow-sm`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className={`text-2xl font-extrabold tracking-tight ${
            isDark ? "text-sky-400" : "text-sky-600"
          }`}
        >
          Salman Ahmed
        </a>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="hidden lg:block text-sm px-2 py-1 rounded-md border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>

          <button
            className="lg:hidden p-2 rounded-md text-sky-600 hover:bg-sky-100 transition"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen(!open)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <ul className="hidden lg:flex space-x-8">
          {NAV_ITEMS.map(({ label, href, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                className={`group relative inline-flex items-center space-x-1 font-medium transition-colors duration-300 ${
                  active === href
                    ? "text-sky-600"
                    : isDark
                    ? "text-slate-300 hover:text-sky-400"
                    : "text-slate-700 hover:text-sky-600"
                }`}
              >
                <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>{label}</span>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-sky-600 transition-all duration-300 ${
                    active === href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <ul
        className={`lg:hidden absolute top-full left-0 right-0 shadow-lg px-4 py-4 space-y-3 transform transition-all duration-300 z-40 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100 max-h-screen"
            : "pointer-events-none -translate-y-4 opacity-0 max-h-0 overflow-hidden"
        } ${isDark ? "bg-slate-900 text-white" : "bg-white backdrop-blur-md"}`}
      >
        <li>
          <button
            onClick={toggleTheme}
            className="mb-3 w-full text-left text-sm px-3 py-2 rounded-md border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </li>
        {NAV_ITEMS.map(({ label, href, icon: Icon }) => (
          <li key={href}>
            <a
              href={href}
              className={`flex items-center space-x-3 transition-colors duration-300 ${
                active === href
                  ? "text-sky-500"
                  : isDark
                  ? "text-slate-300 hover:text-sky-400"
                  : "text-slate-700 hover:text-sky-600"
              }`}
              onClick={() => setOpen(false)}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
