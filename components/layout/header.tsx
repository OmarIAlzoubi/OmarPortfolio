"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { publicPath } from "@/lib/paths";
import { Icon } from "@/components/ui/icon";
const links = [
  { href: "#selected-work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    for (const link of links) {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("nav-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Main navigation">
        <Link href="/#hero" className="wordmark" onClick={() => setOpen(false)}>
          <span className="monogram" aria-hidden="true">
            o.
          </span>
          {profile.name}
        </Link>
        <div className="desktop-nav">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "location" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a href={publicPath(profile.resume)} className="resume-link">
            Résumé <Icon name="right" width="13" height="13" />
          </a>
          <a href="#contact" className="contact-link">
            Let’s talk <Icon name="right" width="13" height="13" />
          </a>
        </div>
        <button
          type="button"
          id="nav-toggle"
          className="mobile-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        {open && (
          <div id="mobile-navigation" className="mobile-navigation">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href={publicPath(profile.resume)} onClick={() => setOpen(false)}>
              View résumé
            </a>
            <Link href="/#contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
