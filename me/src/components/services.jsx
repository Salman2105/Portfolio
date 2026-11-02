import { ArrowRight, Bot, Container, ShieldCheck } from "lucide-react";
import { workflow } from "../data/portfolio";
import { Reveal, SectionHeading, Tags } from "./ui";
export default function Services() {
  return (
    <section id="services" className="section engineering-section">
      <div className="container">
        <SectionHeading
          number="05"
          label="BEYOND THE CODE"
          title={
            <>
              Building better habits.
              <br />
              <span className="muted-heading">One layer at a time.</span>
            </>
          }
          text="The engineering practices and technical interests that shape how I approach the work."
        />
        <div className="engineering-grid">
          <Reveal className="engineering-card">
            <Container size={26} />
            <p className="eyebrow">DEVOPS & CLOUD</p>
            <h3>Understand the environment.</h3>
            <p>
              Practical work with Dockerfiles, Compose, Docker Desktop, and WSL
              2, including setup issues, container networking, and getting a
              containerized application running.
            </p>
            <p>
              Experience with environment variables and deployment
              troubleshooting across Render, Railway, Vercel, and Neon. GitHub
              Actions and CI/CD remain areas of active practice.
            </p>
            <Tags items={["Docker", "Compose", "WSL 2", "GitHub Actions"]} />
            <div className="learning-note">
              <span className="status-dot" />
              <p>
                <strong>Currently exploring:</strong> AWS and cloud fundamentals
                through demonstrations and the Flocci project environment.
              </p>
            </div>
          </Reveal>
          <Reveal className="engineering-card" delay={0.06}>
            <Bot size={26} />
            <p className="eyebrow">AI-ASSISTED ENGINEERING</p>
            <h3>Prompt carefully. Review critically.</h3>
            <p>
              I use explicit requirements and constraints to improve
              code-generation workflows, investigate recurring LLM failures, and
              review generated implementations before integration.
            </p>
            <p>
              My studies cover LLM fundamentals, RAG, fine-tuning, PEFT / LoRA,
              RLHF, catastrophic forgetting, reward hacking, and evaluation
              concepts such as ROUGE and BLEU.
            </p>
            <Tags
              items={[
                "Prompt engineering",
                "OpenAI integration",
                "Hugging Face",
              ]}
            />
            <div className="learning-note">
              <span className="status-dot" />
              <p>
                <strong>Learning focus:</strong> LLM applications and agents,
                with a clear distinction between experiments and production
                experience.
              </p>
            </div>
          </Reveal>
          <Reveal className="engineering-card" delay={0.12}>
            <ShieldCheck size={26} />
            <p className="eyebrow">SECURE DEVELOPMENT</p>
            <h3>Question the assumptions.</h3>
            <p>
              Practice checking authentication, RBAC, input validation, and API
              boundaries. Explore injection, stored XSS, broken access control,
              and prompt-injection risks through guided exercises.
            </p>
            <p>
              Use Postman for validation and explore Semgrep, ESLint, and GitHub
              Actions for earlier feedback. Study OWASP LLM concepts alongside
              networking and communication fundamentals.
            </p>
            <Tags
              items={[
                "API security",
                "Semgrep",
                "ESLint",
                "OWASP LLM concepts",
              ]}
            />
            <div className="learning-note">
              <span className="status-dot" />
              <p>
                <strong>Developing knowledge:</strong> security and networking
                fundamentals through courses, tutorials, and lab work.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal className="workflow-heading">
          <h3>How I approach a build</h3>
          <span>
            TOOLS & WORKFLOW <ArrowRight size={16} />
          </span>
        </Reveal>
        <div className="workflow-grid">
          {workflow.map((step) => (
            <Reveal className="workflow-step" key={step.number}>
              <span className="workflow-number">{step.number}</span>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
              <span className="workflow-tools">{step.tools}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
