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
        {id === "project-mizanai" && <MizanArchitecture />}
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

function MizanArchitecture() {
  return (
    <section className="mizan-architecture" aria-labelledby="mizan-architecture-title">
      <div className="mizan-architecture-heading">
        <p className="eyebrow">SYSTEM FLOW / MIZANAI</p>
        <h4 id="mizan-architecture-title">A clear path from message to answer.</h4>
        <p>Modular, cost-aware processing keeps language understanding close to the user and exact arithmetic in code.</p>
      </div>

      <div className="mizan-flow-principle">
        <span>DESIGN PRINCIPLE</span>
        <strong>LLM understands.<br />Code calculates.</strong>
        <small>Use an LLM when language reasoning adds value.</small>
      </div>

      <ol className="mizan-flow" aria-label="MizanAI message processing flow">
        <li className="mizan-flow-node mizan-flow-entry"><span>01</span><strong>WhatsApp</strong><small>Message or receipt</small></li>
        <li className="mizan-flow-node mizan-flow-queue"><span>02</span><strong>Intake + SQS</strong><small>Arrival separated from work</small></li>
        <li className="mizan-flow-node mizan-flow-worker"><span>03</span><strong>Worker + router</strong><small>Choose the needed path</small></li>
        <li className="mizan-flow-connector mizan-flow-branch" aria-hidden="true">
          <span className="connector-trunk" />
          <span className="connector-bar" />
          <span className="connector-leg connector-leg-first" />
          <span className="connector-leg connector-leg-last" />
        </li>
        <li className="mizan-flow-split">
          <div className="mizan-flow-node mizan-flow-ai"><span>AI LAYER</span><strong>Understand</strong><small>Intent, extraction, context</small></div>
          <div className="mizan-flow-node mizan-flow-deterministic"><span>DETERMINISTIC LAYER</span><strong>Calculate</strong><small>Dates, amounts, balances</small></div>
        </li>
        <li className="mizan-flow-connector mizan-flow-convergence" aria-hidden="true">
          <span className="connector-leg connector-leg-first" />
          <span className="connector-bar" />
          <span className="connector-trunk" />
          <span className="connector-leg connector-leg-last" />
        </li>
        <li className="mizan-flow-node mizan-flow-data"><span>04</span><strong>Financial data + analytics</strong><small>Structured operations and relevant context</small></li>
        <li className="mizan-flow-node mizan-flow-response"><span>05</span><strong>Compose + respond</strong><small>Contextual answer via WhatsApp</small></li>
      </ol>

      <div className="mizan-architecture-notes">
        <article><span>01 / AI</span><h5>Language where it helps</h5><p>Intent understanding, transaction extraction, and contextual reasoning, with Grok used where appropriate.</p></article>
        <article><span>02 / EXACTNESS</span><h5>Deterministic by design</h5><p>Explicit date ranges, arithmetic, balances, and financial calculations stay in structured code.</p></article>
        <article><span>03 / FLOW</span><h5>Context only when relevant</h5><p>Routing and context selection avoid unnecessary model calls; SQS decouples message arrival from worker processing.</p></article>
      </div>
    </section>
  );
}
