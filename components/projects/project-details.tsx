import { projectStories } from "@/data/project-details";
import { GithubLink } from "./github-link";
import { Icon } from "@/components/ui/icon";
export function ProjectDetails({ id, name, role }: { id: string; name: string; role?: string }) {
  const story = projectStories[id];
  if (!story) return null;
  return (
    <details className="project-details">
      <summary>
        <span>
          Explore details{" "}
          <span className="detail-caption">/ problem, architecture & decisions</span>
        </span>
        <Icon name="chevron" />
      </summary>
      <div className="case-study">
        <div className="case-intro">
          <p className="eyebrow">A CLOSER LOOK / {name.toUpperCase()}</p>
          <h3>
            From the problem
            <br />
            to the system.
          </h3>
        </div>
        <div className="case-narrative">
          <div>
            <h4>The problem</h4>
            <p>{story.problem}</p>
          </div>
          <div>
            <h4>What I built</h4>
            <p>{story.built}</p>
          </div>
          {role && (
            <p className="case-role">
              <strong>My contribution</strong> {role}
            </p>
          )}
        </div>
        <div className="case-architecture">
          <h4>Architecture at a glance</h4>
          <ol>
            {story.architecture.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
        <div className="case-decision">
          <h4>The engineering decision</h4>
          <p>{story.interesting}</p>
          {story.metric && (
            <div className="case-metric">
              <strong>{story.metric.value}</strong>
              <p>{story.metric.context}</p>
            </div>
          )}
        </div>
        <div className="case-stack">
          <h4>Key technologies</h4>
          <div className="tags">
            {story.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
        <div className="case-status">
          <div>
            <h4>Current status</h4>
            <p>{story.status}</p>
          </div>
          <GithubLink id={id} name={name} />
        </div>
      </div>
    </details>
  );
}
