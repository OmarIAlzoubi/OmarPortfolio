/** Paths are relative to frontend/public. Set a path after adding the genuine asset. */
export const portfolioAssets: {
  universityLogo: string | null;
  resumePdf: string;
  certificates: Record<string, string | null>;
} = {
  universityLogo: null, // Example: "/images/education/upm-logo.png"
  resumePdf: "/resume/Omar_Al-Zoubi_AI_Engineer.pdf",
  certificates: {
    "aws-solutions-architect": "/images/certificates/aws-solutions-architect-associate.jpg",
    "microsoft-generative-ai": "/images/certificates/microsoft-generative-ai-engineering.jpg",
    "microsoft-devops": null,
    "ibm-generative-ai": "/images/certificates/ibm-generative-ai-professional.jpg",
    "ibm-rag-agentic": "/images/certificates/ibm-rag-agentic-ai.jpg",
    "microsoft-power-bi": null,
  },
};
