import { otherWork } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectDetails } from "@/components/projects/project-details";
import { GithubLink } from "@/components/projects/github-link";
export function Research() {
  return (
    <section id="research" className="section container">
      <SectionHeading
        number="06"
        label="RESEARCH & EXPLORATIONS"
        title="Room for a different question."
        description="Smaller systems, collaborative research, and ideas that sharpen the way I build."
      />
      <div className="research-list">
        {otherWork.map((project, index) => (
          <article key={project.id} id={project.id} className="research-card" data-reveal>
            <div className="research-top">
              <span className="research-index">0{index + 4}</span>
              <div>
                <p className="eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <GithubLink id={project.id} name={project.title} />
            </div>
            <ProjectDetails id={project.id} name={project.title} />
          </article>
        ))}
      </div>
    </section>
  );
}
