import { capabilities } from "@/data/portfolio";
import { Icon, type IconName } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
const icons: IconName[] = ["spark", "search", "voice", "vision", "layers", "chart"];
const evidence = [
  { text: "Agents with vehicle context", href: "#project-carmind" },
  { text: "Grounded manual retrieval", href: "#project-automotive-rag" },
  { text: "Multilingual workflows at Mabna", href: "#experience-mabna" },
  { text: "Perception into spoken assistance", href: "#project-noor" },
  { text: "The services behind the experience", href: "#experience-mabna" },
  { text: "Language meets precise calculations", href: "#project-mizanai" },
];
export function Skills() {
  return (
    <section id="skills" className="section capabilities-section">
      <div className="container">
        <SectionHeading
          number="03"
          label="CAPABILITIES"
          title="The pieces. And how they connect."
          description="My work lives at the intersection of intelligence, infrastructure, and the person using it."
        />
        <div className="capability-bridge" data-reveal>
          <span>UNDERSTAND</span>
          <span aria-hidden="true">→</span>
          <span>GROUND</span>
          <span aria-hidden="true">→</span>
          <span>BUILD</span>
          <span aria-hidden="true">→</span>
          <strong>MAKE IT USEFUL</strong>
        </div>
        <div className="capabilities-grid">
          {capabilities.map((group, index) => (
            <article
              key={group.number}
              className={`capability-card accent-${index % 4}`}
              data-reveal
            >
              <div className="capability-top">
                <span className="capability-icon">
                  <Icon name={icons[index]} width="23" height="23" />
                </span>
                <span className="capability-number">{group.number}</span>
              </div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href={evidence[index].href}>
                {evidence[index].text}
                <Icon name="right" width="15" height="15" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
