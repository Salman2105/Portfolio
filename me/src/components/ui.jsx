import { motion as Motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
export function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <Motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -30px 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion.div>
  );
}
export function SectionHeading({ number, label, title, text, children }) {
  return (
    <Reveal className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> {label}
        </p>
        <h2>{title}</h2>
      </div>
      <div className="section-heading-aside">
        {text && <p>{text}</p>}
        {children}
      </div>
    </Reveal>
  );
}
export function Tags({ items }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
export function ExternalLink({ href, children, className = "", ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}
