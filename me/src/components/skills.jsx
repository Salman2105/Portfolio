import {
  Braces,
  Database,
  PanelsTopLeft,
  TestTubeDiagonal,
} from "lucide-react";
import { skillGroups } from "../data/portfolio";
import { Reveal, SectionHeading, Tags } from "./ui";
const icons = {
  frontend: PanelsTopLeft,
  backend: Braces,
  database: Database,
  testing: TestTubeDiagonal,
};
export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeading
          number="04"
          label="THE TOOLKIT"
          title={
            <>
              Across the stack.
              <br />
              <span className="muted-heading">Grounded in practice.</span>
            </>
          }
          text="Tools I use and skills I’m developing through application work. Practical experience and ongoing study are kept distinct."
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon];
            return (
              <Reveal
                key={group.title}
                className="skill-card"
                delay={index * 0.04}
              >
                <div className="skill-card-top">
                  <Icon size={24} strokeWidth={1.5} />
                  <span className="small-label">{group.level}</span>
                </div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <Tags items={group.tags} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
