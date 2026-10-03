# Public content provenance

The Python application, retrieval knowledge files, embeddings and database remain unchanged. Frontend content is a curated public presentation, not a raw knowledge-base renderer.

| Presentation content | Source |
| --- | --- |
| Identity, philosophy and original leadership context | Existing `../data/profile/overview.md` |
| Technical capability groups | Existing `../data/profile/skills.md` |
| CarMind story and development status | Existing `../data/projects/carmind.md` |
| MizanAI story, queueing and deterministic calculations | Existing `../data/projects/mizanai.md` |
| NOOR story, architecture and contribution | Existing `../data/projects/noor.md` |
| Mabna / KABi technical details | Existing `../data/experience/mabna.md`, `kabi.md`, plus the supplied CV |
| Mabna end date (Sep 2026), Al-Sham, résumé summary, leadership years and ABET contribution | Omar's CV facts supplied with this redesign request |
| Education and certification presentation | Supplied CV, supported by existing profile content |
| Supporting project stories and collaborative credit | Existing bandit, car-rag and smart-teacher project files |
| Phone, email, LinkedIn and GitHub profile | Omar-supplied details in `data/contact.ts` |
| Project-specific public GitHub URLs | Official GitHub public repository API for OmarIAlzoubi, checked 2026-10-03; centralized in `data/project-links.ts` |

The supplied CV is the primary résumé source. Al-Sham is intentionally frontend-only; no backend Markdown synchronization was performed. The assistant uses the existing Python FAQ, retrieval, memory, and LLM pipeline.

NOOR's approximately 87–88% mAP@0.5 is a documented evaluation of its YOLOv8-nano detection component, not whole-system accuracy. No new customer counts, commercial impact, deployment-scale, universal performance, or peer-review claims are introduced. Project graphics remain conceptual illustrations.

## Assets and outstanding configuration

- CarMind's public repository was not found in the verified list. Its URL stays null with an explicit TODO.
- Use `data/assets.ts` to configure the official UPM logo, genuine certificate images and a current résumé PDF.
- Missing credential images show an honest preview fallback. Power BI remains In progress.
- The HTML résumé is print-ready; a Download PDF action appears only when its path is configured.
- Confirm exact credential titles against the genuine certificates when adding those images.
- Contact data is shared across the contact section, recruiter FAQ, and résumé.
- Private prompts, retrieval rules, scores, memory and knowledge-source file paths remain outside visitor-facing presentation.
