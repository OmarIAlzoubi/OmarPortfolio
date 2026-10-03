/** Case-study narratives grounded in the existing project knowledge files. No new performance claims. */
export type ProjectStory = {
  problem: string;
  built: string;
  architecture: string[];
  interesting: string;
  technologies: string[];
  status: string;
  metric?: { value: string; context: string };
};
export const projectStories: Record<string, ProjectStory> = {
  "project-carmind": {
    problem:
      "Vehicle information is scattered across manuals, service records, and unfamiliar terminology. An owner needs a clear next step that respects the limits of an assistant.",
    built:
      "I am developing a personal vehicle assistant that connects manufacturer knowledge with maintenance history and structured vehicle context. The product and its safety boundaries are designed together.",
    architecture: [
      "Question → intent router",
      "Workflow → planner & tools",
      "Manufacturer knowledge → retrieval",
      "Vehicle state + safety rules → response",
    ],
    interesting:
      "Routing separates simple questions from workflows that need planning or tools. Deterministic safety rules and source-backed knowledge constrain the conversational layer, rather than relying on a prompt alone.",
    technologies: [
      "Agent routing",
      "RAG",
      "Tool orchestration",
      "Structured vehicle state",
      "Deterministic safety rules",
    ],
    status:
      "Under development. Product design, agent workflows, and safety boundaries are being developed together.",
  },
  "project-mizanai": {
    problem:
      "A natural question about spending hides precise requirements: which transactions, which dates, and which calculation. Language alone is not a reliable calculator.",
    built:
      "I built a personal conversational finance prototype with transaction understanding, intent routing, deterministic financial operations, and a WhatsApp interface.",
    architecture: [
      "WhatsApp message → queued processing",
      "Intent + date range → structured operation",
      "Transaction data → analytical code",
      "Verified calculation → contextual explanation",
    ],
    interesting:
      "The model interprets the request; code performs the arithmetic. Explicit date ranges and integer minor-currency units help keep the financial logic precise. An SQS queue separates message arrival from processing.",
    technologies: [
      "Structured outputs",
      "WhatsApp integration",
      "AWS SQS",
      "Intent routing",
      "Deterministic calculations",
    ],
    status:
      "Personal prototype with working components and ongoing development.",
  },
  "project-noor": {
    problem:
      "Visual information is difficult to access through a conventional screen for blind and visually impaired users. Assistance needs to be relevant, spoken, and aware of conversational context.",
    built:
      "As a principal contributor, I worked on the system architecture, computer-vision pipeline, AI integration, performance optimization, and later team organization for our graduation project.",
    architecture: [
      "Raspberry Pi client → inference server",
      "Camera input → detection & scene understanding",
      "Speech input + context → relevant response",
      "Arabic / English → spoken assistance",
    ],
    interesting:
      "A lightweight wearable client delegates heavier inference to a server. Iterations explored specialized captioning alongside object detection, speech recognition, and contextual memory to improve interaction responsiveness.",
    technologies: [
      "Raspberry Pi",
      "YOLOv8-nano",
      "PyTorch",
      "Vision-language models",
      "Vosk",
      "Contextual memory",
    ],
    status: "University graduation project and multimodal prototype.",
    metric: {
      value: "≈87–88%",
      context:
        "Documented mAP@0.5 for the YOLOv8-nano object-detection component. This is a component evaluation, not end-to-end assistant accuracy.",
    },
  },
  "project-bandit": {
    problem:
      "A fixed reasoning prompt can be a poor fit for different mathematical questions. The challenge is choosing a useful strategy without treating every request identically.",
    built:
      "I contributed to collaborative research and implementation exploring adaptive prompt selection. Ahmed Alsharif is documented as a lead contributor.",
    architecture: [
      "Question → epsilon-greedy policy",
      "Selected strategy → LLM solver",
      "Proposed solution → LLM validator",
      "Evaluation feedback → policy update",
    ],
    interesting:
      "A multi-armed bandit selects between decomposition, analogy, formal reasoning, and backward reasoning. The solver / validator split provides a feedback signal for adaptive strategy selection.",
    technologies: [
      "Multi-Armed Bandits",
      "Epsilon-greedy policy",
      "LLM solver / validator",
      "Adaptive prompting",
    ],
    status:
      "Collaborative research and paper repository, exploring adaptive prompting in the documented experimental setting.",
  },
  "project-automotive-rag": {
    problem:
      "A vehicle manual contains exact terminology and useful guidance, but finding the relevant passage can be slow. Answers should stay tied to the source document.",
    built:
      "I developed a focused retrieval assistant over an automotive owner's manual, combining semantic retrieval with keyword matching and local generation.",
    architecture: [
      "Manual → chunks & multilingual embeddings",
      "Query → FAISS + BM25 retrieval",
      "Retrieved context → local Mistral",
      "Grounded answer → conversational interface",
    ],
    interesting:
      "Semantic similarity handles paraphrases while keyword retrieval preserves exact technical terms. The system explores how these complementary signals improve access to manufacturer documentation.",
    technologies: [
      "multilingual-e5-base",
      "FAISS",
      "BM25",
      "Mistral",
      "Ollama",
      "Hybrid retrieval",
    ],
    status: "Documented retrieval project with a public repository.",
  },
  "project-smart-teacher": {
    problem:
      "Educational explanations need to respond to a learner's context. A robot interface adds perception and interaction challenges beyond a text-only assistant.",
    built:
      "I contributed AI integration and refactoring to Smart Teacher 2.0, an educational system integrated with the Bayan humanoid robot.",
    architecture: [
      "Learner context + perception → interaction",
      "Educational request → Generative AI",
      "Context → adapted explanation",
      "Bayan robot → human–robot interaction",
    ],
    interesting:
      "The project connects computer vision and generative explanations with a physical interaction experience, exploring student-adaptive teaching.",
    technologies: [
      "Generative AI",
      "Computer vision",
      "Learner context",
      "Human–robot interaction",
    ],
    status:
      "Supporting educational project, developed collaboratively.",
  },
};
