export function NoorArchitecture() {
  return (
    <section className="project-architecture noor-architecture" aria-labelledby="noor-architecture-title">
      <div className="project-architecture-heading">
        <p className="eyebrow">SYSTEM ARCHITECTURE / NOOR</p>
        <h4 id="noor-architecture-title">From the scene to spoken understanding.</h4>
        <p>A lightweight wearable client connects perception, memory, and voice so relevant visual information can be heard.</p>
      </div>

      <ol className="project-architecture-flow project-architecture-flow-noor" aria-label="NOOR multimodal system flow">
        <li className="project-architecture-node architecture-cyan">
          <span>01 / CAPTURE</span>
          <strong>Environment → camera</strong>
          <small>Raspberry Pi 4 client sends visual input to a Windows inference server.</small>
        </li>
        <li className="project-architecture-node architecture-blue">
          <span>02 / PERCEIVE</span>
          <strong>Visual understanding</strong>
          <small>Scene understanding and hazard detection connect computer vision with language.</small>
          <em>YOLOv8-nano · BLIP</em>
        </li>
        <li className="project-architecture-node architecture-green">
          <span>03 / CONTEXT</span>
          <strong>Short-term scene memory</strong>
          <small>Recent observations add context to the current scene.</small>
          <em>all-MiniLM-L6-v2</em>
        </li>
        <li className="project-architecture-node architecture-orange">
          <span>04 / INTERACT</span>
          <strong>Language → spoken assistance</strong>
          <small>Arabic and English voice interaction turns relevant results into audio.</small>
          <em>Vosk · Mistral · SpeechBrain ECAPA</em>
        </li>
      </ol>

      <div className="project-architecture-notes">
        <article className="architecture-cyan">
          <span>PERCEPTION</span>
          <h5>See and interpret</h5>
          <p>Object and hazard detection alongside scene understanding.</p>
        </article>
        <article className="architecture-green">
          <span>CONTEXT</span>
          <h5>Connect recent scenes</h5>
          <p>Short-term memory relates current observations to recent context.</p>
        </article>
        <article className="architecture-orange">
          <span>INTERACTION</span>
          <h5>Listen and respond</h5>
          <p>Arabic and English voice interaction with spoken assistance.</p>
        </article>
      </div>

      <section className="project-architecture-proof" aria-label="NOOR technical proof points">
        <div><strong>≈0.87–0.88</strong><span>YOLOv8-nano mAP@0.5</span></div>
        <div><strong>Arabic + English</strong><span>Voice interaction</span></div>
        <div><strong>0.3–1.1 s</strong><span>Scene-understanding response times in later optimized versions; earlier versions are separate.</span></div>
      </section>
    </section>
  );
}

export function CarMindArchitecture() {
  return (
    <section className="project-architecture carmind-architecture" aria-labelledby="carmind-architecture-title">
      <div className="project-architecture-heading">
        <p className="eyebrow">SYSTEM ARCHITECTURE / CARMIND</p>
        <h4 id="carmind-architecture-title">A simple answer, backed by a structured system.</h4>
        <p>AI helps interpret and plan when needed; vehicle evidence, exact rules, and safety behavior shape what comes back.</p>
      </div>

      <div className="project-architecture-principle">
        <span>PRODUCT PRINCIPLE</span>
        <strong>Simple for the driver.<br />Structured behind the scenes.</strong>
        <small>Keep the conversation clear; use AI only where it helps and deterministic logic for exact rules.</small>
      </div>

      <ol className="project-architecture-flow project-architecture-flow-carmind" aria-label="CarMind request and response flow">
        <li className="project-architecture-node architecture-cyan">
          <span>01 / REQUEST</span>
          <strong>User / WhatsApp</strong>
          <small>A natural-language vehicle or maintenance question.</small>
        </li>
        <li className="project-architecture-node architecture-yellow">
          <span>02 / ROUTE</span>
          <strong>Capability router</strong>
          <small>Relevance-based capability packs, routed allowlists, and fallback when intent is ambiguous.</small>
        </li>
        <li className="project-architecture-node architecture-blue">
          <span>03 / PLAN</span>
          <strong>Planner + tools</strong>
          <small>A bounded JSON planner loop selects and executes the needed tools, including read-only capabilities.</small>
        </li>
        <li className="project-architecture-node architecture-cyan">
          <span>04 / EVIDENCE</span>
          <strong>Vehicle state + sources</strong>
          <small>Maintenance history and manufacturer knowledge, with immutable evidence snapshots and cutoff validation.</small>
        </li>
        <li className="project-architecture-node architecture-orange">
          <span>05 / VALIDATE</span>
          <strong>Safety + maintenance</strong>
          <small>Deterministic Python rules, STOP_WHEN_SAFE continuity, and applicability checks; unknown market fit is not assumed.</small>
        </li>
        <li className="project-architecture-node architecture-green">
          <span>06 / RESPOND</span>
          <strong>Clear user-facing answer</strong>
          <small>Response generation grounded in the selected evidence and safety state.</small>
        </li>
      </ol>

      <div className="project-architecture-notes">
        <article className="architecture-yellow">
          <span>ROUTING</span>
          <h5>Choose relevant capability</h5>
          <p>Routes each request to relevant vehicle capabilities, with a fallback when the request is unclear.</p>
        </article>
        <article className="architecture-blue">
          <span>PLANNING + TOOLS</span>
          <h5>Gather what the answer needs</h5>
          <p>A bounded planner and tool layer gather the right vehicle state and evidence before answering.</p>
        </article>
        <article className="architecture-orange">
          <span>SAFETY + MAINTENANCE</span>
          <h5>Keep exact decisions grounded</h5>
          <p>Deterministic maintenance and safety rules respect manufacturer applicability and safe-stop behavior.</p>
        </article>
      </div>
    </section>
  );
}
