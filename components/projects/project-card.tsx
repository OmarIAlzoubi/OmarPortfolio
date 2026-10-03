import type { Project } from "@/data/portfolio";
import { ProjectVisual } from "./project-visual";
import { ProjectDetails } from "./project-details";
import { GithubLink } from "./github-link";
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      id={project.id}
      className={`project-card project-${project.name.toLowerCase()}`}
      data-reveal
    >
      <div className="project-top">
        <div className="project-copy">
          <div className="project-meta">
            <span>
              0{index + 1} / {project.name}
            </span>
            <span className="status-tag">{project.status}</span>
          </div>
          <p className="project-category">{project.category}</p>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          <div className="tags">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <GithubLink id={project.id} name={project.name} />
        </div>
        <ProjectVisual name={project.name} />
      </div>
      <ProjectDetails id={project.id} name={project.name} role={project.role} />
    </article>
  );
}
