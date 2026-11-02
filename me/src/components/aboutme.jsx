import { ArrowUpRight, Braces, Layers3, ShieldCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";
export default function AboutMe() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeading
          number="01"
          label="THE APPROACH"
          title={
            <>
              Curiosity is the starting point.
              <br />
              <span className="muted-heading">Care is in the details.</span>
            </>
          }
        />
        <div className="about-grid">
          <Reveal className="about-statement">
            <span className="about-symbol" aria-hidden="true">
              {"{ }"}
            </span>
            <p>
              I like understanding how things work.
              <br />
              <strong>Then making them work better.</strong>
            </p>
          </Reveal>
          <Reveal className="about-copy" delay={0.1}>
            <p>
              I’m Salman Ahmed, a Full Stack Developer and BS Information
              Technology graduate from the University of the Punjab, Gujranwala
              Campus. At MeissaSoft, I’m turning that foundation into practical
              experience across frontend development, backend systems, and
              deployment.
            </p>
            <p>
              My work spans React and TypeScript interfaces, Node.js APIs, and
              SQL and NoSQL databases. Alongside product work, I’m learning how
              containers, AI tools, and security checks fit into a dependable
              development process.
            </p>
            <p>
              I value clear communication, considered decisions, and code that
              another developer can understand. I’m interested in contributing
              to engineering teams in Germany and internationally.
            </p>
            <a className="text-link" href="#experience">
              More about my experience <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>
        <div className="principles">
          {[
            {
              Icon: Layers3,
              title: "Think across the stack",
              text: "Connect the interface, API, and data instead of treating them in isolation.",
            },
            {
              Icon: ShieldCheck,
              title: "Build with care",
              text: "Check validation, access boundaries, and failure paths early.",
            },
            {
              Icon: Braces,
              title: "Understand what ships",
              text: "Use AI to support the work, and review the code that goes into it.",
            },
          ].map(({ Icon, title, text }, index) => (
            <Reveal className="principle" key={title} delay={index * 0.06}>
              <Icon size={22} strokeWidth={1.6} />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
