/** Presentation-only CV facts supplied by Omar. This does not update the retrieval knowledge base. */
export const resumeContent = {
  name: "Omar Al-Zoubi",
  title: "AI Engineer | Generative AI | LLMs | RAG & Agentic AI",
  summary:
    "AI Engineer with hands-on experience building and deploying Generative AI, LLM, RAG, agentic, multimodal, and computer vision systems. Experienced in model fine-tuning, prompt engineering, retrieval pipelines, LLM routing, and AI deployment using Python, PyTorch, Hugging Face, FastAPI, Docker, FAISS, Ollama, and vLLM. Focused on building production-oriented AI systems with optimized latency, inference cost, and reliability.",
  experience: [
    {
      role: "Co-Founder & Generative AI Engineer",
      organization: "Mabna Tech",
      period: "Nov 2025 – Sep 2026",
      highlights: [
        "Architected a configurable AI customer-service platform with domain-specific workflows for multiple business use cases.",
        "Designed a modular LLM architecture that dynamically loads only task-relevant prompts and context to reduce token usage, inference cost, and response latency.",
        "Built an end-to-end multilingual voice AI pipeline integrating LLMs, STT, TTS, automatic language detection, and Twilio telephony.",
        "Developed client-server AI services using FastAPI, Docker, and SQL to support scalable deployment and low-latency workflows.",
      ],
    },
    {
      role: "AI Engineer Intern",
      organization: "KABi",
      period: "Jun 2025 – Oct 2025",
      highlights: [
        "Built an AI HR retrieval system with structured filtering and LLM reasoning, benchmarking ~132 ms across 100K synthetic profiles.",
        "Fine-tuned and deployed a multilingual XLM-R classifier to route user queries across specialized AI workflows.",
        "Designed adaptive query processing to bypass unnecessary LLM calls for simple requests while reserving deeper reasoning for complex queries.",
      ],
    },
    {
      role: "Data Analyst",
      organization: "Al-Sham Province Hotels",
      period: "Mar 2023 – May 2025",
      highlights: [
        "Developed computer vision prototypes for hotel operations, including vehicle detection and parking monitoring using object-detection models.",
        "Built dashboards and KPI reports to track operational performance, financial trends, and business metrics.",
      ],
    },
  ],
  projects: [
    {
      title: "Team Lead – NOOR Smart Glasses",
      context: "Graduation Project, UPM",
      period: "2024–2025",
      highlights: [
        "Led development of AI-powered smart glasses for blind users with scene understanding, hazard detection, and contextual memory.",
        "Built a near-real-time client-server AI architecture with 0.3–1.1s scene-understanding response times.",
        "Trained a YOLOv8 hazard-detection model achieving 87% mAP@0.5 across critical hazard classes.",
        "Implemented fully local Arabic–English voice interaction and visual Q&A without cloud dependency.",
      ],
    },
    {
      title: "Multi-Armed Bandit LLMs for Mathematical Reasoning",
      context: "Research Paper",
      period: "2025–2026",
      highlights: [
        "Co-developed an adaptive dual-LLM framework using an ε-greedy bandit to select among four prompting strategies.",
        "Improved relative accuracy by 22% while reducing average latency by 47% versus a fixed Chain-of-Thought baseline.",
      ],
    },
    {
      title: "MizanAI – AI Personal Finance Assistant",
      context: "",
      period: "2026",
      highlights: [
        "Designed a modular GenAI architecture combining intent routing, transaction extraction, temporal analysis, and personalized financial reasoning.",
        "Implemented dynamic prompt orchestration and context gating to reduce token overhead, unnecessary LLM calls, and inference cost.",
      ],
    },
    {
      title: "Recommendation System",
      context: "Assin Cafe",
      period: "2023–2024",
      highlights: [
        "Built and deployed a collaborative-filtering recommendation system integrated with the cafe’s POS workflow.",
        "Achieved an 80% recommendation match rate in real-world customer interactions.",
      ],
    },
  ],
  education: {
    degree: "Bachelor of Artificial Intelligence Engineering",
    institution: "University of Prince Muqrin (UPM)",
    period: "2020–2025",
  },
  skills: [
    { category: "Programming", items: "Python, Java, JavaScript" },
    {
      category: "AI & Machine Learning",
      items: "LLMs, Generative AI, RAG, Agentic AI, Machine Learning, Deep Learning, Computer Vision, LLMs fine-tuning",
    },
    {
      category: "Frameworks & Models",
      items: "PyTorch, Hugging Face Transformers, FAISS, Ollama, vLLM, XLM-RoBERTa, YOLO",
    },
    { category: "Backend & APIs", items: "FastAPI, REST APIs, Client-Server Architecture" },
    { category: "Databases", items: "SQL, PostgreSQL, SQLite, MongoDB" },
    { category: "Cloud & Deployment", items: "AWS, Docker, Git, Linux" },
  ],
  certifications: [
    { name: "AWS Certified Solutions Architect – Associate", issuer: "AWS", year: "2026" },
    {
      name: "Microsoft Generative AI Engineering Professional Certificate",
      issuer: "Microsoft",
      year: "2026",
    },
    {
      name: "IBM Generative AI Engineering Professional Certificate",
      issuer: "IBM",
      year: "2025",
    },
    { name: "IBM RAG & Agentic AI Professional Certificate", issuer: "IBM", year: "2025" },
    {
      name: "Microsoft DevOps Engineering Professional Certificate",
      issuer: "Microsoft",
      year: "2026",
    },
    {
      name: "Microsoft Power BI Data Analyst Professional Certificate",
      issuer: "Microsoft",
      year: "In Progress",
    },
  ],
  honors: [
    { title: "Founder, Artificial Intelligence Students Club", organization: "UPM", year: "2022" },
    {
      title: "Contributor, ABET Accreditation",
      organization: "College of Computer Science",
      year: "2026",
    },
  ],
  leadership: [
    {
      title: "Founder, Artificial Intelligence Students Club",
      organization: "Prince Muqrin bin Abdulaziz University",
      year: "2022",
    },
    {
      title: "Contributor, ABET Accreditation",
      organization: "College of Computer Science",
      year: "2026",
    },
  ],
};
