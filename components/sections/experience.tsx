import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
export function Experience() {
  return (
    <section id="experience" className="section container">
      <SectionHeading
        number="02"
        label="EXPERIENCE"
        title="Engineering in practice."
        description="AI architecture grounded in real workflows, from customer conversations to candidate discovery."
      />
      <div className="experience-list">
        {experience.map((job, index) => (
          <article id={job.id} key={job.id} className="experience-row" data-reveal>
            <div className="experience-company">
              <span className="experience-number">0{index + 1} / FIELD EXPERIENCE</span>
              <div className="company-symbol" aria-hidden="true">
                {job.company === "KABi" ? "K" : job.company === "Mabna Tech" ? "m" : "A"}
              </div>
              <h3>{job.company}</h3>
              <span className="period">{job.period}</span>
              {job.current && (
                <span className="current-role">
                  <span className="tiny-dot" /> Current role
                </span>
              )}
            </div>
            <div className="experience-content">
              <h4>{job.role}</h4>
              <p>{job.description}</p>
              <ul>
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="experience-tech">{job.technologies}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
