"use client";
import { useEffect } from "react";
/** Progressive enhancement: content is visible without JavaScript. Native scrolling stays intact. */
export function PageMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
      },
      { threshold: 0.08, rootMargin: "0px 0px -25px 0px" },
    );
    for (const element of elements) {
      if (element.getBoundingClientRect().top > window.innerHeight)
        element.classList.add("reveal-ready");
      observer.observe(element);
    }
    return () => {
      observer.disconnect();
      for (const element of elements) element.classList.remove("reveal-ready");
    };
  }, []);
  return null;
}
