"use client";

import { useEffect } from "react";

export default function Reveals() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.animate([{ opacity: 0.75, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 250, easing: "ease-out" });
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return null;
}
