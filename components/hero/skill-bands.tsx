const skillBands = [
  ["Generative AI", "LLMs", "RAG", "Agentic AI", "Voice AI"],
  ["Computer Vision", "Multimodal AI", "Data & Analytics", "Backend Systems", "Optimization"],
];

export function SkillBands() {
  return (
    <>
      <div className="hero-center">
        <div className="hero-geometry hero-geometry-orange" aria-hidden="true" />
        <div className="hero-geometry hero-geometry-cyan" aria-hidden="true" />
        <div className="hero-geometry hero-geometry-yellow" aria-hidden="true" />
        <p className="hero-kicker">
          <span className="tiny-dot" /> AI ENGINEER · SAUDI ARABIA
        </p>
        <h1>
          <span className="hero-greeting">
            Hello, <em>it’s</em>
          </span>
          <strong className="hero-name-line">Omar</strong>
          <strong className="hero-name-line">
            Al-Zoubi<span className="hero-period">.</span>
          </strong>
        </h1>
      </div>
      <div className="hero-skills">
        {skillBands.map((band, index) => (
          <div className={`hero-skill-band hero-skill-band-${index + 1}`} key={band[0]}>
            <div className="hero-skill-track">
              {[false, true].map((duplicate) => (
                <div
                  className="hero-skill-sequence"
                  aria-hidden={duplicate || undefined}
                  key={duplicate ? "duplicate" : "original"}
                >
                  {band.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
