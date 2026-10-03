"use client";
import Image from "next/image";
import { publicPath } from "@/lib/paths";
import { useEffect, useRef, useState } from "react";
import { certifications } from "@/data/portfolio";
import { portfolioAssets } from "@/data/assets";
import { Icon } from "@/components/ui/icon";
type Certificate = (typeof certifications)[number];
export function CertificateGallery() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [failed, setFailed] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (!selected) return;
    const dialog = dialogRef.current;
    dialog?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [selected]);
  function close() {
    dialogRef.current?.close();
  }
  const image = selected ? portfolioAssets.certificates[selected.id] : null;
  return (
    <>
      <div className="certificate-grid">
        {certifications.map((cert) => (
          <button
            type="button"
            className="certificate-card"
            key={cert.id}
            aria-haspopup="dialog"
            onClick={(event) => {
              triggerRef.current = event.currentTarget;
              setFailed(false);
              setSelected(cert);
            }}
          >
            <span className="certificate-provider">
              {cert.provider === "Amazon Web Services"
                ? "aws"
                : cert.provider === "IBM"
                  ? "IBM"
                  : "Microsoft"}
            </span>
            <span className="certificate-name">{cert.name}</span>
            <span className="certificate-bottom">
              <span className={cert.inProgress ? "progress-tag" : ""}>
                {cert.inProgress ? "In progress" : cert.year}
              </span>
              <span>
                View credential <Icon name="right" width="14" height="14" />
              </span>
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="certificate-dialog"
        aria-labelledby="certificate-title"
        aria-describedby="certificate-description"
        onClose={() => {
          setSelected(null);
          triggerRef.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "Tab") {
            const items = Array.from(
              event.currentTarget.querySelectorAll<HTMLElement>(
                "button:not([disabled]), a[href], input, textarea, select, [tabindex]",
              ),
            ).filter((item) => item.tabIndex >= 0);
            const first = items[0];
            const last = items[items.length - 1];
            if (
              items.length &&
              ((event.shiftKey && document.activeElement === first) ||
                (!event.shiftKey && document.activeElement === last))
            ) {
              event.preventDefault();
              (event.shiftKey ? last : first).focus();
            }
          }
          if (event.key === "Escape") {
            event.preventDefault();
            close();
          }
        }}
      >
        {selected && (
          <div className="certificate-preview">
            <header>
              <div>
                <p className="eyebrow">
                  {selected.provider} · {selected.inProgress ? "In progress" : selected.year}
                </p>
                <h2 id="certificate-title">{selected.name}</h2>
              </div>
              <button
                type="button"
                className="icon-button"
                aria-label="Close certificate preview"
                onClick={close}
              >
                <Icon name="close" />
              </button>
            </header>
            {image && !failed ? (
              <div className="certificate-image">
                <Image
                  src={publicPath(image)}
                  alt={`${selected.name} certificate`}
                  fill
                  sizes="(max-width: 900px) 90vw, 850px"
                  onError={() => setFailed(true)}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ) : (
              <div className="certificate-fallback">
                <span className="preview-symbol">
                  <Icon name="layers" width="40" height="40" />
                </span>
                <p>
                  {selected.inProgress ? "Learning in progress" : "A closer look, coming soon."}
                </p>
                <span>
                  {selected.inProgress
                    ? "This certification is currently in progress."
                    : "The certificate image hasn’t been added yet."}
                </span>
                <span className="fallback-label">CREDENTIAL PREVIEW</span>
              </div>
            )}
            <p id="certificate-description" className="certificate-description">
              {image && !failed
                ? "Certificate image supplied by Omar. Press Escape or use the close button to return."
                : "This preview shows the listed credential details. An image will appear here when it is available."}
            </p>
          </div>
        )}
      </dialog>
    </>
  );
}
