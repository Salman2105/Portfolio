import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../contexts/theme";
import { navigation } from "../data/portfolio";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { isDark, toggleTheme } = useTheme();
  const header = useRef(null);
  const menuButton = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const dismiss = (event) => {
      if (!header.current?.contains(event.target)) setOpen(false);
    };
    const escape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);
  return (
    <header className="site-header" ref={header}>
      <nav className="container nav" aria-label="Main navigation">
        <a
          href="#home"
          className="brand"
          aria-label="Salman Ahmed, home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">
            s<span>.</span>
          </span>
          <span>
            Salman Ahmed<span className="brand-role">Full Stack Developer</span>
          </span>
        </a>
        <div className="desktop-links">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="icon-button theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="nav-contact" href="#contact">
            Let’s talk <ArrowUpRight size={16} />
          </a>
          <button
            ref={menuButton}
            className="icon-button menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      <nav
        className="mobile-links container"
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {navigation.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
            {item.label}
            <ArrowUpRight size={16} />
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>
          Contact
          <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  );
}
