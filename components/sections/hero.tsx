import { profile } from "@/data/portfolio";
import { SkillBands } from "@/components/hero/skill-bands";
import { Icon } from "@/components/ui/icon";
import { contact } from "@/data/contact";
import { publicPath } from "@/lib/paths";
export function Hero() {
  return (
    <section id="hero" className="hero container">
      <SkillBands />
      <div className="hero-bottom">
        <p className="hero-description">
          I build practical AI systems.
          <br />
          <span>
            From Generative AI and retrieval to voice, vision, and the backend that brings it all
            together.
          </span>
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#selected-work">
            Explore my work <Icon name="right" />
          </a>
          <a className="button button-secondary" href={publicPath(profile.resume)}>
            View résumé <Icon name="right" />
          </a>
        </div>
        <div className="hero-socials">
          <a href={contact.github} target="_blank" rel="noreferrer">
            <Icon name="github" width="15" height="15" /> GitHub <Icon width="11" height="11" />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <Icon width="11" height="11" />
          </a>
          <a href="#contact">
            Let’s talk <Icon name="right" width="13" height="13" />
          </a>
        </div>
      </div>
      <div className="hero-footnote">
        <span>INTELLIGENCE, WITH INTENTION.</span>
        <a href="#selected-work">
          Scroll to explore <span aria-hidden="true">↓</span>
        </a>
        <span>01 / THE WORK</span>
      </div>
    </section>
  );
}
