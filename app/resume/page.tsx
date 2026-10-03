import type { Metadata } from "next";
import Link from "next/link";
import {
  profile,
  experience,
  projects,
  otherWork,
  education,
  certifications,
  capabilities,
} from "@/data/portfolio";
import { contact } from "@/data/contact";
import { resumeContent } from "@/data/resume";
import { portfolioAssets } from "@/data/assets";
import { projectLinks } from "@/data/project-links";
import { ContactLinks } from "@/components/ui/contact-links";
import { PrintButton } from "@/components/ui/print-button";
import { publicPath } from "@/lib/paths";
import { getPageUrl } from "@/lib/site";
import { Icon } from "@/components/ui/icon";
export const metadata: Metadata = { title: "Résumé", alternates: { canonical: getPageUrl("resume/") } };
export default function Resume() {
  return (
    <main className="resume-page container">
      <div className="resume-toolbar">
        <Link href="/">← Back to portfolio</Link>
        <div>
          {portfolioAssets.resumePdf && (
            <a className="button button-secondary" href={publicPath(portfolioAssets.resumePdf)} download>
              <Icon name="download" /> Download PDF
            </a>
          )}
          <PrintButton />
        </div>
      </div>
      <div className="resume-paper">
        <header>
          <p className="eyebrow">PROFESSIONAL PROFILE / {contact.location}</p>
          <h1>{profile.name}</h1>
          <p className="resume-subtitle">{resumeContent.title}</p>
          <ContactLinks className="resume-contacts" />
          <p className="resume-summary">{resumeContent.summary}</p>
        </header>
        <section>
          <h2>Experience</h2>
          {experience.map((job) => (
            <article key={job.id}>
              <div className="resume-title">
                <h3>{job.company}</h3>
                <span>{job.period}</span>
              </div>
              <h4>{job.role}</h4>
              <p>{job.description}</p>
              <ul>
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
        <section>
          <h2>Selected projects</h2>
          {projects.map((project) => (
            <article key={project.id}>
              <div className="resume-title">
                <h3>
                  <Link href={`/#${project.id}`}>{project.name}</Link>
                </h3>
                <span>{project.status}</span>
              </div>
              <p>{project.summary}</p>
              <p>{project.role}</p>
              <p className="resume-project-tech">
                {project.technologies.join(" · ")}
                {projectLinks[project.id]?.github && (
                  <>
                    {" "}
                    · <a href={projectLinks[project.id].github ?? undefined}>GitHub repository</a>
                  </>
                )}
              </p>
            </article>
          ))}
          {otherWork.map((project) => (
            <article key={project.id}>
              <h3>
                <Link href={`/#${project.id}`}>{project.title}</Link>
              </h3>
              <p>{project.description}</p>
              <p>{project.note}</p>
            </article>
          ))}
        </section>
        <section>
          <h2>Technical capabilities</h2>
          <div className="resume-skills">
            {capabilities.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
          <p className="resume-project-tech">
            Additional deployment and model tooling: Hugging Face · Ollama · vLLM · Model
            fine-tuning
          </p>
        </section>
        <section>
          <h2>Education & leadership</h2>
          <article>
            <div className="resume-title">
              <h3>{education.degree}</h3>
              <span>{education.period}</span>
            </div>
            <p>{education.institution}</p>
            <p>{education.note}</p>
          </article>
          {resumeContent.leadership.map((item) => (
            <article key={item.title}>
              <div className="resume-title">
                <h3>{item.title}</h3>
                <span>{item.year}</span>
              </div>
              <p>{item.organization}</p>
            </article>
          ))}
        </section>
        <section>
          <h2>Certifications</h2>
          <ul className="resume-certifications">
            {certifications.map((cert) => (
              <li key={cert.id}>
                {cert.name} <span>— {cert.inProgress ? "In progress" : cert.year}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
