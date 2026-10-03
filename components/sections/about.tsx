import { principles, profile } from "@/data/portfolio";
import { resumeContent } from "@/data/resume";
import { Icon } from "@/components/ui/icon";
export function About() {
  return (
    <section id="about" className="section container about-section">
      <div className="about-intro" data-reveal>
        <p className="eyebrow">
          <span>04</span> THE WAY I BUILD
        </p>
        <h2>
          Thoughtful systems.
          <br />
          <span>Simple experiences.</span>
        </h2>
        <p>{profile.introduction}</p>
        <div className="about-composition" aria-hidden="true">
          <span>
            <b>01</b>INTELLIGENCE
          </span>
          <span>
            <b>02</b>STRUCTURE
          </span>
          <span>
            <b>03</b>EXPERIENCE
          </span>
          <i />
        </div>
        <div className="about-signature">
          <span className="monogram">o.</span>
          <span>
            A model is a starting point.
            <br />
            <strong>The system is the product.</strong>
          </span>
        </div>
      </div>
      <div className="principles-grid">
        {principles.map((principle, index) => (
          <article
            className={`principle-card principle-${index}`}
            key={principle.title}
            data-reveal
          >
            <span className="principle-number">0{index + 1}</span>
            {index === 0 && (
              <div className="decision-pair">
                <span>AI / ambiguity</span>
                <span>CODE / precision</span>
              </div>
            )}
            <h3>{principle.title}</h3>
            <p>{principle.text}</p>
          </article>
        ))}
      </div>
      <div className="leadership-strip" data-reveal>
        <div>
          <Icon name="spark" />
          <span>BUILDING BEYOND THE CODE</span>
        </div>
        {resumeContent.leadership.map((item) => (
          <p key={item.title}>
            <strong>
              {item.year} / {item.title}
            </strong>
            <span>{item.organization}</span>
          </p>
        ))}
      </div>
    </section>
  );
}
