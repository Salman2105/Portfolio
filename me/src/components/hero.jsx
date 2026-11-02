import {
  ArrowDown,
  ArrowDownToLine,
  ArrowUpRight,
  Code2,
  GitBranch,
  MapPin,
} from "lucide-react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import portrait from "../assets/portrait.webp";
import { profile } from "../data/portfolio";
import { Reveal } from "./ui";
export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <section id="home" className="hero container">
      <div className="hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow hero-intro">
            <span className="status-dot" /> FULL STACK DEVELOPER · PAKISTAN
          </p>
          <p className="hero-name">Hello, I’m Salman.</p>
          <h1>
            Thoughtful code.
            <br />
            <span>Meaningful</span>
            <br />
            digital experiences<span className="title-period">.</span>
          </h1>
          <p className="hero-description">
            I build web applications from interface to API, with a growing focus
            on secure systems, AI-assisted development, and thoughtful
            engineering.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowUpRight size={18} />
            </a>
            <a className="button button-text" href={profile.cv} download>
              Download CV <ArrowDownToLine size={17} />
            </a>
          </div>
          <div className="hero-location">
            <MapPin size={15} />
            <span>
              Based in Pakistan <span className="location-divider">/</span>{" "}
              Interested in international teams
            </span>
          </div>
        </Reveal>
        <Reveal className="portrait-composition" delay={0.15}>
          <div className="portrait-topline">
            <span>DEVELOPER, ALWAYS LEARNING</span>
            <span className="small-plus">+</span>
          </div>
          <div className="portrait-frame">
            <img
              src={portrait}
              alt="Salman Ahmed, Full Stack Developer"
              width="720"
              height="850"
              fetchPriority="high"
            />
            <div className="portrait-caption">
              <span>Salman Ahmed</span>
              <span>Build. Understand. Improve.</span>
            </div>
          </div>
          <Motion.div
            className="portrait-note note-code"
            animate={reduced ? {} : { y: [0, -7, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="note-icon">
              <Code2 size={20} />
            </span>
            <div>
              <strong>From interface to API</strong>
              <span>React · TypeScript · Node.js</span>
            </div>
          </Motion.div>
          <div className="portrait-note note-work">
            <GitBranch size={16} />
            <span>
              Currently building at <strong>MeissaSoft</strong>
            </span>
            <span className="status-dot" />
          </div>
          <span className="portrait-coordinate" aria-hidden="true">
            01 / THE PERSON BEHIND THE CODE
          </span>
        </Reveal>
      </div>
      <div className="hero-bottom">
        <a href="#about" className="scroll-link">
          <ArrowDown size={16} /> A little further down
        </a>
        <span>
          WEB DEVELOPMENT <i /> AI-ASSISTED ENGINEERING <i /> SECURE BY INTENT
        </span>
      </div>
    </section>
  );
}
