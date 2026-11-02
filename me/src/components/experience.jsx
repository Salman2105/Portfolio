import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { Reveal, SectionHeading, Tags } from "./ui";
export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <SectionHeading
          number="03"
          label="THE JOURNEY"
          title={
            <>
              Real work.
              <br />
              <span className="muted-heading">Continuous growth.</span>
            </>
          }
          text="Learning in a team, contributing to existing products, and building a stronger engineering foundation."
        />
        <div className="experience-layout">
          <Reveal className="experience-side">
            <span className="experience-icon">
              <BriefcaseBusiness size={26} strokeWidth={1.4} />
            </span>
            <h3>MeissaSoft</h3>
            <p>Full Stack Developer</p>
            <span className="current-badge">
              <span className="status-dot" /> Current role
            </span>
            <div className="experience-facts">
              <span>
                <CalendarDays size={15} />
                <span>
                  <time dateTime="2025-12-13">13 Dec 2025</time> — Present
                </span>
              </span>
              <span>
                <MapPin size={15} /> Lahore, Pakistan
              </span>
            </div>
          </Reveal>
          <Reveal className="experience-detail" delay={0.08}>
            <p className="experience-lead">
              Putting full-stack development into practice, from product
              interfaces to backend workflows.
            </p>
            <div className="experience-points">
              {[
                [
                  "Application development",
                  "Contribute to React, Next.js, and TypeScript interfaces and Node.js / Express backend features. Work on REST APIs, authentication, authorization, validation, and database integration.",
                ],
                [
                  "Product & collaboration",
                  "Implement interface improvements from design references, resolve frontend and backend issues, and collaborate through Git branches, pull requests, code review, and documentation.",
                ],
                [
                  "Testing & engineering practice",
                  "Use Postman and functional checks to investigate behavior, including email delivery and attachments. Review AI-generated code for correctness, maintainability, and potential security issues.",
                ],
                [
                  "Deployment & technical exploration",
                  "Work through environment configuration and deployment issues; explore Docker, Compose, CI/CD, automated security checks, and cloud fundamentals.",
                ],
              ].map(([title, text]) => (
                <div key={title}>
                  <span className="experience-point-dot" />
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <Tags
              items={[
                "React / Next.js",
                "TypeScript",
                "Node.js",
                "PostgreSQL / MongoDB",
                "GitHub",
                "Docker",
              ]}
            />
            <a className="text-link" href="#projects">
              Explore related work <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>
        <Reveal className="education-strip">
          <span className="small-label">EDUCATION</span>
          <div>
            <h3>BS Information Technology</h3>
            <p>University of the Punjab · Gujranwala Campus</p>
          </div>
          <span className="education-status">Graduate</span>
        </Reveal>
      </div>
    </section>
  );
}
