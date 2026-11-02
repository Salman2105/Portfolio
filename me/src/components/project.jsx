import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  Code2,
  Database,
  GitBranch,
  LayoutDashboard,
  Play,
  ShieldCheck,
  Shirt,
  Sparkles,
  X,
} from "lucide-react";
import { projects, earlierProjects } from "../data/portfolio";
import { ExternalLink, Reveal, SectionHeading, Tags } from "./ui";

function ProjectVisual({ kind }) {
  if (kind === "expense")
    return (
      <div className="project-visual expense-visual" aria-hidden="true">
        <div className="mini-app">
          <aside>
            <span className="mini-logo">
              <span /> ledger
            </span>
            <LayoutDashboard size={16} />
            <span className="mini-nav active" />
            <span className="mini-nav" />
            <span className="mini-nav" />
            <span className="mini-nav" />
          </aside>
          <div className="mini-dashboard">
            <div className="mini-title">
              Your finances, in focus.
              <span>
                Overview <ChevronDown size={10} />
              </span>
            </div>
            <div className="mini-stat-grid">
              {["Income", "Expenses", "Balance"].map((label, i) => (
                <div key={label}>
                  <span>{label}</span>
                  <div className={`mini-stat-line stat-${i}`} />
                </div>
              ))}
            </div>
            <div className="mini-chart">
              <span>Activity overview</span>
              <div className="chart-bars">
                {[40, 62, 49, 80, 58, 91, 73, 65, 87, 52, 69, 82].map(
                  (h, i) => (
                    <i key={i} style={{ height: `${h}%` }} />
                  ),
                )}
              </div>
              <div className="chart-labels">
                <span>MON</span>
                <span>WED</span>
                <span>FRI</span>
                <span>SUN</span>
              </div>
            </div>
            <div className="mini-bottom">
              <span>
                <Database size={12} /> PostgreSQL
              </span>
              <span>
                <ShieldCheck size={12} /> Authenticated API
              </span>
            </div>
          </div>
        </div>
        <span className="visual-caption">INTERFACE ILLUSTRATION</span>
      </div>
    );
  if (kind === "tryovix")
    return (
      <div className="project-visual tryovix-visual" aria-hidden="true">
        <div className="fashion-canvas">
          <div className="fashion-top">
            <strong>
              tryovix<span>✳</span>
            </strong>
            <span>THE ROI OF A BETTER FIT</span>
          </div>
          <div className="fashion-grid">
            <div>
              <p>
                See the fit.
                <br />
                <em>See the potential.</em>
              </p>
              <span className="fashion-pill">
                A clearer business case <ArrowUpRight size={12} />
              </span>
            </div>
            <div className="shirt-frame">
              <span className="corner top-left" />
              <span className="corner bottom-right" />
              <Shirt size={93} strokeWidth={0.8} />
              <span className="fit-label">VIRTUAL TRY-ON</span>
            </div>
          </div>
          <div className="fashion-bottom">
            <span>UI CONSISTENCY</span>
            <span>DESIGN → DEVELOPMENT</span>
          </div>
        </div>
        <span className="visual-caption">CONTRIBUTION ILLUSTRATION</span>
      </div>
    );
  const icons = {
    education: BookOpen,
    ai: Sparkles,
    security: ShieldCheck,
    workflow: GitBranch,
  };
  const Icon = icons[kind] || Code2;
  const labels = {
    education: ["Learn", "Practice", "Progress"],
    ai: ["Input", "Review", "Response"],
    security: ["Validate", "Authorize", "Respond"],
    workflow: ["Commit", "Check", "Review"],
  };
  return (
    <div
      className={`project-visual compact-visual visual-${kind}`}
      aria-hidden="true"
    >
      <div className="visual-orbit">
        <Icon size={34} strokeWidth={1.25} />
      </div>
      <div className="visual-flow">
        {labels[kind]?.map((label, index) => (
          <span key={label}>
            {index > 0 && <ArrowRight size={12} />}
            {label}
          </span>
        ))}
      </div>
      <span className="visual-caption">PROJECT CONCEPT</span>
    </div>
  );
}

function ProjectNotes({ project, onClose }) {
  const dialog = useRef(null);
  const openDialog = (node) => {
    dialog.current = node;
    if (node && !node.open) node.showModal();
  };
  return (
    <dialog
      ref={openDialog}
      className="project-dialog"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialog.current) dialog.current.close();
      }}
      aria-labelledby="project-dialog-title"
    >
      <div className="dialog-top">
        <span className="eyebrow">{project.type}</span>
        <button
          className="icon-button"
          aria-label="Close project notes"
          onClick={() => dialog.current.close()}
          autoFocus
        >
          <X size={21} />
        </button>
      </div>
      <h2 id="project-dialog-title">{project.title}</h2>
      <p className="dialog-subtitle">{project.subtitle}</p>
      <Tags items={project.tags} />
      <h3>My contribution</h3>
      <ul className="contribution-list">
        {project.contributions.map((item) => (
          <li key={item}>
            <Check size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="takeaway">
        <h3>What I took from it</h3>
        <p>{project.takeaway}</p>
      </div>
      <div className="walkthrough">
        {project.videoUrl ? (
          <ExternalLink href={project.videoUrl} className="text-link">
            <Play size={17} /> Watch project walkthrough
          </ExternalLink>
        ) : (
          <>
            <span className="walkthrough-icon">
              <Play size={20} />
            </span>
            <div>
              <h3>Project walkthrough</h3>
              <p>A video walkthrough has not been published yet.</p>
            </div>
            <span className="small-label">TO FOLLOW</span>
          </>
        )}
      </div>
      <div className="dialog-links">
        {project.repositoryUrl && (
          <ExternalLink
            href={project.repositoryUrl}
            className="button button-primary"
          >
            View source
          </ExternalLink>
        )}
        {project.demoUrl && (
          <ExternalLink
            href={project.demoUrl}
            className="button button-outline"
          >
            Live demo
          </ExternalLink>
        )}
        {!project.repositoryUrl && !project.demoUrl && (
          <p>Public project links are not available yet.</p>
        )}
      </div>
    </dialog>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All work");
  const [selected, setSelected] = useState(null);
  const filtered =
    filter === "All work"
      ? projects
      : projects.filter((project) => project.category === filter);
  return (
    <section id="projects" className="section work-section">
      <div className="container">
        <SectionHeading
          number="02"
          label="SELECTED WORK"
          title={
            <>
              Built with purpose.
              <br />
              <span className="muted-heading">Learned through practice.</span>
            </>
          }
          text="A selection of applications, team contributions, and technical explorations. Each project reflects a different part of my development journey."
        />
        <Reveal className="project-toolbar">
          <div
            className="project-filters"
            role="group"
            aria-label="Filter projects"
          >
            {["All work", "Full stack", "Frontend", "AI & security"].map(
              (label) => (
                <button
                  key={label}
                  onClick={() => setFilter(label)}
                  aria-pressed={filter === label}
                >
                  {label}
                  <span>
                    {label === "All work"
                      ? projects.length
                      : projects.filter((p) => p.category === label).length}
                  </span>
                </button>
              ),
            )}
          </div>
          <span className="project-index" aria-live="polite">
            {String(filtered.length).padStart(2, "0")} PROJECTS
          </span>
        </Reveal>
        <div className="project-grid">
          {filtered.map((project) => (
            <Reveal
              key={project.id}
              className={`project-card ${["expense", "tryovix"].includes(project.visual) ? "featured-project" : ""}`}
            >
              <ProjectVisual kind={project.visual} />
              <div className="project-body">
                <div className="project-meta">
                  <span>{project.type}</span>
                  <span>{project.number}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Tags items={project.tags} />
                <div className="project-card-bottom">
                  <button
                    className="text-link"
                    onClick={() => setSelected(project)}
                    aria-label={`Read project notes for ${project.title}`}
                  >
                    Project notes <ArrowUpRight size={17} />
                  </button>
                  {project.repositoryUrl ? (
                    <ExternalLink
                      href={project.repositoryUrl}
                      className="source-link"
                    >
                      Source code
                    </ExternalLink>
                  ) : (
                    <span className="link-status">Public links to follow</span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <details className="project-archive">
          <summary>
            <span>
              Earlier explorations <span className="archive-count">03</span>
            </span>
            <span>
              View archive <ChevronDown size={17} />
            </span>
          </summary>
          <div className="archive-grid">
            {earlierProjects.map((project) => (
              <article key={project.title}>
                <Code2 size={21} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Tags items={project.tags} />
                {project.repositoryUrl && (
                  <ExternalLink
                    className="text-link"
                    href={project.repositoryUrl}
                  >
                    Source code
                  </ExternalLink>
                )}
                {project.demoUrl && (
                  <ExternalLink className="text-link" href={project.demoUrl}>
                    Live demo
                  </ExternalLink>
                )}
                {project.videoUrl && (
                  <ExternalLink className="text-link" href={project.videoUrl}>
                    Walkthrough
                  </ExternalLink>
                )}
              </article>
            ))}
          </div>
        </details>
        {selected && (
          <ProjectNotes project={selected} onClose={() => setSelected(null)} />
        )}
      </div>
    </section>
  );
}
