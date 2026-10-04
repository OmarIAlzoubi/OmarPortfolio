import { profile } from "@/data/portfolio";
import { contact } from "@/data/contact";
import { ContactLinks } from "@/components/ui/contact-links";
import { Icon } from "@/components/ui/icon";
import { publicPath } from "@/lib/paths";
export function Contact() {
  return (
    <section id="contact" className="section container contact-section">
      <div className="contact-card" data-reveal>
        <div className="contact-topline">
          <p className="eyebrow">
            <span>07</span> LET’S CONNECT
          </p>
          <span className="contact-location">
            <span className="tiny-dot" /> {contact.location}
          </span>
        </div>
        <div className="contact-main">
          <div>
            <h2>
              Let’s build
              <br />
              something <em>useful.</em>
            </h2>
            <p>
              A thoughtful idea. A real problem. A system worth building.
              <br />
              I’d like to hear about it.
            </p>
          </div>
          <a
            className="contact-email-button"
            href={`mailto:${contact.email}`}
            aria-label={`Email Omar at ${contact.email}`}
          >
            <Icon width="35" height="35" />
          </a>
        </div>
        <div className="contact-bottom">
          <ContactLinks />
          <a href={publicPath(profile.resume)} className="button button-secondary">
            Read my résumé <Icon name="right" />
          </a>
        </div>
      </div>
      <div className="recruiter-faq" data-reveal>
        <div>
          <p className="eyebrow">FOR THE FIRST CONVERSATION</p>
          <h3>A little useful context.</h3>
        </div>
        <div>
          <details>
            <summary>
              What kind of work does Omar focus on?
              <Icon name="chevron" />
            </summary>
            <p>
              Practical end-to-end AI engineering across Generative AI, LLMs, retrieval, agents,
              voice, multimodal AI, and backend systems. The projects above show the decisions
              behind that work.
            </p>
          </details>
          <details>
            <summary>
              Where is Omar based, and how can I reach him?
              <Icon name="chevron" />
            </summary>
            <p>
              Based in {contact.location}. Email{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a> or call{" "}
              <a href={contact.phoneHref}>{contact.phone}</a>. You can also connect on{" "}
              <a href={contact.linkedin}>LinkedIn</a> and explore his{" "}
              <a href={contact.github}>GitHub</a>.
            </p>
          </details>
          <details>
            <summary>
              Where can I find the latest experience and CV?
              <Icon name="chevron" />
            </summary>
            <p>
              Read the <a href={publicPath(profile.resume)}>PDF résumé</a> for professional
              experience, selected projects and research, education, technical skills, certifications,
              and leadership.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
