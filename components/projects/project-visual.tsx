import Image from "next/image";
import { publicPath } from "@/lib/paths";

export function ProjectVisual({ name }: { name: string }) {
  if (name === "CarMind")
    return (
      <div className="project-visual car-visual">
        <div className="visual-label">
          <span className="tiny-dot" /> VEHICLE INTELLIGENCE <span>ARCHITECTURE CONCEPT</span>
        </div>
        <svg
          viewBox="0 0 620 310"
          role="img"
          aria-label="CarMind concept: vehicle context connected to manufacturer knowledge and agent orchestration"
          fill="none"
        >
          <defs>
            <pattern id="car-grid" width="31" height="31" patternUnits="userSpaceOnUse">
              <path d="M31 0H0V31" stroke="#90a387" strokeOpacity=".09" />
            </pattern>
          </defs>
          <rect width="620" height="310" fill="url(#car-grid)" />
          <path
            d="M127 180c6-18 16-26 34-30l57-13 42-46c9-9 22-14 37-14h81c12 0 21 4 32 14l42 46 28 7c13 3 22 13 25 26l5 30H128l-1-20Z"
            stroke="#52694e"
            strokeWidth="1.5"
          />
          <path
            d="m230 135 35-36c6-6 15-9 26-9h82c10 0 16 4 24 10l35 35H230ZM321 91v44M223 146h209M335 146v42M239 147v35M132 174h28M464 163h29"
            stroke="#778c70"
          />
          <path d="M189 199h-52M255 199h167M486 199h19" stroke="#52694e" strokeWidth="1.5" />
          <g fill="#edf2e8" stroke="#52694e" strokeWidth="1.5">
            <circle cx="222" cy="196" r="30" />
            <circle cx="455" cy="196" r="30" />
          </g>
          <g stroke="#61765b">
            <circle cx="222" cy="196" r="15" />
            <circle cx="455" cy="196" r="15" />
            <path d="M212 196h20m-10-10v20M445 196h20m-10-10v20" />
          </g>
          <path
            d="M324 77V42H151M454 227v33h77M223 227v33H93"
            stroke="#70856a"
            strokeDasharray="3 5"
          />
          <g fill="#52694e" fontFamily="monospace" fontSize="10">
            <text x="79" y="45">
              MANUFACTURER KNOWLEDGE
            </text>
            <text x="79" y="280">
              VEHICLE STATE
            </text>
            <text x="435" y="280">
              ROUTER → TOOLS
            </text>
          </g>
          <circle cx="324" cy="77" r="3" fill="#52694e" />
        </svg>
        <p className="visual-caption">One conversation. A coordinated system.</p>
      </div>
    );
  if (name === "MizanAI")
    return (
      <div className="project-visual finance-visual">
        <div className="visual-label">
          <span className="tiny-dot" /> LANGUAGE → UNDERSTANDING
        </div>
        <div className="finance-flow">
          <div className="flow-question">
            <span>THE QUESTION</span>
            <p>
              “Why did I spend more
              <br />
              this month?”
            </p>
          </div>
          <div className="flow-connector">
            <span />
            <span>Intent + time range</span>
            <span />
          </div>
          <div className="flow-calculation">
            <div>
              <span>01</span> Understand the request
            </div>
            <div>
              <span>02</span> Calculate with code <b>ƒ(x)</b>
            </div>
            <div>
              <span>03</span> Explain with context
            </div>
          </div>
        </div>
        <p className="visual-caption">Precise calculations. Natural explanations.</p>
      </div>
    );
  return (
    <div className="project-visual noor-visual">
      <div className="visual-label">
        <span className="tiny-dot" /> NOOR / WORKING PROTOTYPE
      </div>
      <div className="noor-photo-frame">
        <Image
          src={publicPath("/images/projects/noor-prototype.jpg")}
          alt="NOOR smart glasses prototype with a camera mounted on the frame"
          fill
          sizes="(max-width: 760px) 90vw, 45vw"
          className="noor-prototype-image"
        />
        <span className="noor-photo-index">NOOR · 01</span>
      </div>
      <p className="visual-caption">A real prototype. A multimodal idea taking shape.</p>
    </div>
  );
}
