/** Paths are relative to frontend/public. Set a path after adding the genuine asset. */
export const portfolioAssets: {
  universityLogo: string | null;
  resumePdf: string | null;
  certificates: Record<string, string | null>;
} = {
  universityLogo: null, // Example: "/images/education/upm-logo.png"
  resumePdf: null, // Example: "/resume/omar-al-zoubi.pdf"
  certificates: {
    "aws-solutions-architect": "/images/certificates/aws-solutions-architect-associate.jpg",
    "microsoft-generative-ai": "/images/certificates/microsoft-generative-ai-engineering.jpg",
    "microsoft-devops": null,
    "ibm-generative-ai": "/images/certificates/ibm-generative-ai-professional.jpg",
    "ibm-rag-agentic": "/images/certificates/ibm-rag-agentic-ai.jpg",
    "microsoft-power-bi": null,
  },
};
