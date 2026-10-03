import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
export function SelectedWork() {
  return (
    <section id="selected-work" className="section container">
      <SectionHeading
        number="01"
        label="SELECTED WORK"
        title="Systems with a purpose."
        description="Different problems. The same commitment to thoughtful, end-to-end engineering."
      />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
