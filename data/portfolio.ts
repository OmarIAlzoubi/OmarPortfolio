/** Public editorial content derived from the existing knowledge files and Omar-supplied CV.
 * Source references stay in code; raw knowledge files are never served to visitors.
 * See CONTENT_SOURCES.md before updating claims or project status.
 */
import { contact } from "./contact.ts";
import { portfolioAssets } from "./assets.ts";

export type Project = {
  id: string;
  name: string;
  category: string;
  status: string;
  title: string;
  summary: string;
  role: string;
  architecture: string;
  principle: string;
  technologies: string[];
  source: string;
};

export const profile = {
  name: "Omar Al-Zoubi",
  role: "AI Engineer",
  description:
    "AI Engineer building practical Generative AI, LLM, RAG, agentic, voice, and multimodal systems. Connecting intelligence, backend engineering, and product thinking.",
  introduction:
    "I connect models, knowledge, and backend engineering to build practical AI products. From agentic workflows to voice and vision, I care about the whole system.",
  ...contact,
  resume: portfolioAssets.resumePdf,
  leadership: "Founded the Artificial Intelligence Club at Prince Muqrin bin Abdulaziz University.",
};

export const projects: Project[] = [
  {
    id: "project-carmind",
    name: "CarMind",
    category: "Agentic AI · Vehicle intelligence",
    status: "Under development",
    title: "A smarter conversation with your car.",
    summary:
      "A personal vehicle assistant designed to make ownership and maintenance simpler. Natural questions meet manufacturer knowledge, maintenance history, and vehicle context.",
    role: "Creator and primary developer, responsible for product concept, agent architecture, knowledge systems, safety design, and conversational UX.",
    architecture:
      "A router selects the relevant workflow. A planner coordinates retrieval and tools where needed, while structured vehicle state and deterministic safety rules inform the response. Manufacturer-backed RAG grounds the intended experience.",
    principle: "Keep the conversation simple. Let the architecture handle the complexity.",
    technologies: ["Agent routing", "RAG", "Tools & vehicle state"],
    source: "data/projects/carmind.md",
  },
  {
    id: "project-mizanai",
    name: "MizanAI",
    category: "Generative AI · Financial analytics",
    status: "Personal prototype",
    title: "Your finances, in your own words.",
    summary:
      "A conversational finance assistant combining transaction understanding, precise financial calculations, and AI explanations through WhatsApp.",
    role: "Designed and developed the personal project, including intent routing, transaction understanding, financial query logic, and WhatsApp integration.",
    architecture:
      "Natural language becomes structured operations and explicit date ranges. Analytical code calculates totals; the LLM explains the results. An AWS-oriented messaging flow uses an SQS queue to separate inbound messages from processing.",
    principle: "Let language models understand the question. Let code do the arithmetic.",
    technologies: ["Structured outputs", "WhatsApp", "AWS SQS"],
    source: "data/projects/mizanai.md",
  },
  {
    id: "project-noor",
    name: "NOOR",
    category: "Multimodal AI · Accessibility",
    status: "Graduation project",
    title: "Making the visual world audible.",
    summary:
      "AI smart glasses designed to assist blind and visually impaired users through scene understanding, object detection, contextual memory, and spoken interaction.",
    role: "Principal contributor with responsibility for system architecture, the computer-vision pipeline, AI integration, and performance optimization; team leadership in later project organization.",
    architecture:
      "A Raspberry Pi client connects to an inference server. YOLOv8-nano, vision-language models, speech recognition, and contextual memory work together to turn relevant visual information into spoken assistance in Arabic and English.",
    principle: "A complex multimodal pipeline, designed around a simple human interaction.",
    technologies: ["YOLOv8", "Vision-language models", "Speech & memory"],
    source: "data/projects/noor.md",
  },
];

export const experience = [
  {
    id: "experience-mabna",
    company: "Mabna Tech",
    role: "Co-Founder & Generative AI Engineer",
    period: "Nov 2025 — Sep 2026",
    current: false,
    description:
      "Built a configurable AI customer-service platform with modular LLM architecture, multilingual voice, and business workflows.",
    highlights: [
      "Optimized prompts and context for latency, token usage, and inference cost.",
      "Integrated STT, TTS, language detection, and Twilio telephony for multilingual voice workflows.",
      "Developed FastAPI, Docker, and SQL services supporting scalable deployment and low-latency workflows.",
    ],
    technologies: "LLM orchestration / Voice AI / Twilio / FastAPI / SQL / Docker",
    source: "Omar-supplied CV + data/experience/mabna.md",
  },
  {
    id: "experience-kabi",
    company: "KABi",
    role: "AI Engineer Intern",
    period: "Jun 2025 — Oct 2025",
    current: false,
    description:
      "Built an AI HR retrieval system combining structured filtering with LLM reasoning, alongside bilingual search and candidate evaluation.",
    highlights: [
      "Implemented FAISS candidate retrieval and SQLite FTS5 knowledge search with retrieval fallbacks.",
      "Developed a multilingual XLM-R classifier for routing.",
      "Used adaptive query processing to bypass unnecessary LLM calls and deterministic weighted scoring for candidate evaluation.",
    ],
    technologies: "FAISS / SQLite FTS5 / FastAPI / XLM-RoBERTa",
    source: "Omar-supplied CV + data/experience/kabi.md",
  },
  {
    id: "experience-alsham",
    company: "Al-Sham Province Hotels",
    role: "Data Analyst",
    period: "Mar 2023 — May 2025",
    current: false,
    description:
      "Connected operational data and early computer-vision prototypes with practical decisions in hotel operations.",
    highlights: [
      "Explored vehicle detection and parking-monitoring prototypes.",
      "Built dashboards and KPI reports.",
      "Performed financial and operational analysis.",
    ],
    technologies: "Computer vision / Dashboards / KPI reporting / Operational analysis",
    source: "Omar-supplied CV (frontend presentation only)",
  },
];

export const capabilities = [
  {
    number: "01",
    title: "Generative AI & agents",
    description: "From a user's intent to a useful action.",
    items: [
      "LLM workflows",
      "Prompt architecture",
      "Structured outputs",
      "Routing, planning & tools",
    ],
  },
  {
    number: "02",
    title: "Retrieval & knowledge",
    description: "The right context, at the right time.",
    items: ["RAG & embeddings", "FAISS", "SQLite FTS5", "Hybrid retrieval"],
  },
  {
    number: "03",
    title: "Voice & conversation",
    description: "Natural interaction beyond the screen.",
    items: ["STT & TTS", "Whisper, Vosk & VAD", "Telephony integration", "Multilingual speech"],
  },
  {
    number: "04",
    title: "Machine learning & vision",
    description: "Connecting perception with understanding.",
    items: [
      "PyTorch & Transformers",
      "YOLO & object detection",
      "Vision-language models",
      "Classification",
    ],
  },
  {
    number: "05",
    title: "Backend & infrastructure",
    description: "The engineering around the intelligence.",
    items: ["Python & FastAPI", "SQL & APIs", "Docker & AWS", "Git & Linux"],
  },
  {
    number: "06",
    title: "Data & analytics",
    description: "Turning structured data into decisions.",
    items: [
      "Data cleaning & exploration",
      "SQL-based analysis",
      "Financial analytics",
      "HR analytics",
    ],
  },
];

export const principles = [
  {
    title: "Choose the right kind of intelligence.",
    text: "Use AI for language, ambiguity, and reasoning. Use deterministic logic when reliability, speed, and precision matter.",
  },
  {
    title: "Make complexity feel simple.",
    text: "Connect models, retrieval, tools, and APIs behind an interface that fits the user's workflow.",
  },
  {
    title: "Treat efficiency as a feature.",
    text: "Design for latency, token usage, and cost from the beginning. A useful system has to work beyond the demo.",
  },
];

export const education = {
  degree: "Bachelor of Artificial Intelligence Engineering",
  institution: "Prince Muqrin bin Abdulaziz University",
  period: "2020 — 2025",
  note: "Graduation project: NOOR, an AI-powered smart-glasses accessibility system.",
};

export const certifications = [
  {
    id: "aws-solutions-architect",
    name: "AWS Certified Solutions Architect — Associate",
    provider: "Amazon Web Services",
    year: "2026",
    inProgress: false,
  },
  {
    id: "microsoft-generative-ai",
    name: "Microsoft Generative AI Engineering",
    provider: "Microsoft",
    year: "2026",
    inProgress: false,
  },
  {
    id: "microsoft-devops",
    name: "Microsoft DevOps Engineering",
    provider: "Microsoft",
    year: "2026",
    inProgress: false,
  },
  {
    id: "ibm-generative-ai",
    name: "IBM Generative AI Professional Certificate",
    provider: "IBM",
    year: "2025",
    inProgress: false,
  },
  {
    id: "ibm-rag-agentic",
    name: "IBM RAG and Agentic AI",
    provider: "IBM",
    year: "2025",
    inProgress: false,
  },
  {
    id: "microsoft-power-bi",
    name: "Microsoft Power BI Data Analyst",
    provider: "Microsoft",
    year: "",
    inProgress: true,
  },
];

export const otherWork = [
  {
    id: "project-bandit",
    category: "Collaborative research & paper",
    title: "Adaptive reasoning with Multi-Armed Bandits",
    description:
      "Exploring adaptive prompt selection for mathematical reasoning, with an epsilon-greedy policy and a dual-LLM solver / validator architecture.",
    note: "Collaborative research and implementation. Ahmed Alsharif is documented as a lead contributor.",
    source: "data/projects/multi-armed-bandit.md",
  },
  {
    id: "project-automotive-rag",
    category: "Retrieval engineering",
    title: "Automotive Manual RAG",
    description:
      "Turning a vehicle owner's manual into a conversational knowledge system using multilingual embeddings, FAISS, and hybrid retrieval.",
    note: "A focused exploration of grounded answers over technical documentation.",
    source: "data/projects/car-rag.md",
  },
  {
    id: "project-smart-teacher",
    category: "Human–robot interaction",
    title: "Smart Teacher 2.0",
    description:
      "An AI-enabled educational system integrated with the Bayan humanoid robot, exploring contextual, student-adaptive explanations through Generative AI and computer vision.",
    note: "Connecting machine perception with natural educational interaction.",
    source: "data/projects/smart-teacher.md",
  },
];
