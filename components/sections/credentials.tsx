import Image from "next/image";
import { publicPath } from "@/lib/paths";
import { education } from "@/data/portfolio";
import { portfolioAssets } from "@/data/assets";
import { CertificateGallery } from "@/components/credentials/certificate-gallery";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
export function Credentials() {
  return (
    <section className="section container credentials-section">
      <SectionHeading
        number="05"
        label="FOUNDATIONS & CONTINUED LEARNING"
        title="Built on curiosity."
        description="An engineering foundation, and a habit of learning what the next system needs."
      />
      <article id="education" className="education-card" data-reveal>
        <div className="university-identity">
          {portfolioAssets.universityLogo ? (
            <Image
              src={publicPath(portfolioAssets.universityLogo)}
              width={130}
              height={100}
              alt="Prince Muqrin bin Abdulaziz University logo"
              style={{ objectFit: "contain" }}
            />
          ) : (
            <div
              className="university-placeholder"
              role="img"
              aria-label="UPM — university logo placeholder"
            >
              <strong>UPM</strong>
              <span>UNIVERSITY</span>
            </div>
          )}
          <span className="period">{education.period}</span>
        </div>
        <div>
          <p className="eyebrow">EDUCATION / SAUDI ARABIA</p>
          <h3>{education.degree}</h3>
          <p className="institution">{education.institution}</p>
          <a className="graduation-link" href="#project-noor">
            <span>
              <span className="eyebrow">GRADUATION PROJECT</span>
              <strong>NOOR · AI smart glasses for accessibility</strong>
            </span>
            <Icon name="right" />
          </a>
        </div>
      </article>
      <div id="certifications" className="certifications-block" data-reveal>
        <div className="certifications-heading">
          <h3>Always a student of the craft.</h3>
          <p>Select a credential to preview it here.</p>
        </div>
        <CertificateGallery />
      </div>
    </section>
  );
}
