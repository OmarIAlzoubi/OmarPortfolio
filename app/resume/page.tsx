import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "@/data/contact";
import { portfolioAssets } from "@/data/assets";
import { resumeContent } from "@/data/resume";
import { publicPath } from "@/lib/paths";
import { getPageUrl } from "@/lib/site";
import { Icon } from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Résumé",
  alternates: { canonical: getPageUrl("resume/") },
};

export default function Resume() {
  return (
    <main className="resume-page container">
      <div className="resume-toolbar">
        <Link href="/">← Back to portfolio</Link>
        <div>
          <a
            className="button button-secondary"
            href={publicPath(portfolioAssets.resumePdf)}
            download
          >
            <Icon name="download" /> Download PDF
          </a>
        </div>
      </div>
      <div className="resume-paper">
        <header>
          <p className="eyebrow">PROFESSIONAL PROFILE / {contact.location}</p>
          <h1>{resumeContent.name}</h1>
          <p className="resume-subtitle">{resumeContent.title}</p>
          <div className="contact-links resume-contacts">
            <a href={contact.phoneHref}>{contact.phone}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              {contact.linkedin.replace(/^https?:\/\//, "")}
            </a>
          </div>
          <p className="eyebrow">Summary</p>
          <p className="resume-summary">{resumeContent.summary}</p>
        </header>

        <section>
          <h2>PROFESSIONAL EXPERIENCE</h2>
          {resumeContent.experience.map((job) => (
            <article key={`${job.role}-${job.organization}`}>
              <div className="resume-title">
                <h3>
                  {job.role} | {job.organization}
                </h3>
                <span>{job.period}</span>
              </div>
              <ul>
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section>
          <h2>SELECTED PROJECTS &amp; RESEARCH</h2>
          {resumeContent.projects.map((project) => (
            <article key={project.title}>
              <div className="resume-title">
                <h3>
                  {project.title}
                  {project.context && <> | {project.context}</>}
                </h3>
                <span>{project.period}</span>
              </div>
              <ul>
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section>
          <h2>Education</h2>
          <article>
            <div className="resume-title">
              <h3>
                {resumeContent.education.degree} | {resumeContent.education.institution}
              </h3>
              <span>{resumeContent.education.period}</span>
            </div>
          </article>
        </section>

        <section>
          <h2>Technical Skills</h2>
          <div className="resume-skills">
            {resumeContent.skills.map((group) => (
              <div key={group.category}>
                <h3>{group.category}</h3>
                <p>{group.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Certifications</h2>
          <ul className="resume-certifications">
            {resumeContent.certifications.map((cert) => (
              <li key={cert.name}>
                {cert.name} <span>| {cert.issuer} | {cert.year}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Honors &amp; Leadership</h2>
          <ul className="resume-certifications">
            {resumeContent.honors.map((item) => (
              <li key={item.title}>
                {item.title} <span>| {item.organization} | {item.year}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
