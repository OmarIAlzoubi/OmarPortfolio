import { profile } from "@/data/portfolio";
export function Footer() {
  return (
    <footer className="footer container">
      <a href="#hero" className="footer-name">
        {profile.name}
        <span>AI Engineer</span>
      </a>
      <p>Built with intention. From intelligence to experience.</p>
      <a href="#hero" className="back-top">
        Back to top ↑
      </a>
    </footer>
  );
}
