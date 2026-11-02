import { ArrowUpRight, BookOpen, Check, ChevronDown } from "lucide-react";
import { learning } from "../data/portfolio";
import { Reveal, SectionHeading } from "./ui";
export default function Learning() {
  return (
    <section id="learning" className="section learning-section">
      <div className="container">
        <SectionHeading
          number="06"
          label="ALWAYS A STUDENT"
          title={
            <>
              A foundation to build on.
              <br />
              <span className="muted-heading">A lot more to discover.</span>
            </>
          }
          text="Completed coursework, current preparation, and practical self-study. Learning is an ongoing part of the work."
        />
        <div className="learning-grid">
          {learning.map((item, index) => (
            <Reveal
              className="learning-card"
              key={item.title}
              delay={index * 0.05}
            >
              <div className="learning-card-top">
                <BookOpen size={22} strokeWidth={1.5} />
                <span
                  className={`learning-status ${item.status === "Completed" ? "completed" : ""}`}
                >
                  {item.status === "Completed" && <Check size={12} />}
                  {item.status}
                </span>
              </div>
              <span className="small-label">{item.kind}</span>
              <h3>{item.title}</h3>
              <p className="learning-issuer">{item.issuer}</p>
              <p>{item.description}</p>
              {item.credentialUrl && (
                <a
                  className="text-link"
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View credential <ArrowUpRight size={16} />
                </a>
              )}
            </Reveal>
          ))}
        </div>
        <details className="learning-details">
          <summary>
            <span>More of what I’m learning</span>
            <ChevronDown size={18} />
          </summary>
          <div className="learning-topics">
            <div>
              <h3>Security & networking</h3>
              <p>
                Security principles, access control, incident response, IP
                addressing, communication protocols, and network infrastructure.
                Practical lab work complements structured learning and
                networking tutorials.
              </p>
            </div>
            <div>
              <h3>AI & Python</h3>
              <p>
                Python fundamentals, Hugging Face experiments,
                prompt-engineering techniques, the LLM lifecycle, and practical
                evaluation. Learning how models are trained, aligned, and used
                in applications.
              </p>
            </div>
            <div>
              <h3>Cloud & containers</h3>
              <p>
                Docker setup and troubleshooting, Compose services, deployment
                configuration, AWS fundamentals, and ongoing exploration of the
                Flocci environment.
              </p>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
