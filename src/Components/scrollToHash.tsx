"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function smoothScrollTo(element: Element, duration = 1000, offset = -80) {
  const targetPosition =
    element.getBoundingClientRect().top + window.pageYOffset + offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    // Smooth ease-out (less overshoot)
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const progress = Math.min(timeElapsed / duration, 1);
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    let run = startPosition + distance * ease(progress);

    // Snap to target if close or at bottom
    if (Math.abs(run - targetPosition) < 2 || run >= maxScroll) {
      window.scrollTo(0, Math.min(targetPosition, maxScroll));
      return;
    }

    window.scrollTo(0, Math.min(run, maxScroll));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // When coming from another page
    if (window.location.hash) {
      // Scroll to top first
      window.scrollTo({ top: 0, behavior: "auto" });

      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) smoothScrollTo(element, 1000, -80);
      }, 300);
    }

    // Handle clicks on anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          smoothScrollTo(element, 1000, -90);
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}