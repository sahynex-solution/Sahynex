"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function smoothScrollTo(element: Element, duration = 1000) {
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const progress = Math.min(timeElapsed / duration, 1);
    const run = startPosition + distance * ease(progress);
    window.scrollTo(0, run);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    // ✅ 1) Handle when navigating to a new page with a hash
    if (typeof window !== "undefined" && window.location.hash) {
      window.scrollTo(0, 0); // jump to top first
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) smoothScrollTo(element, 1000); // slower animation
      }, 300); // wait before scrolling
    }

    // ✅ 2) Intercept same-page anchor clicks
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault(); // stop default jump
          smoothScrollTo(element, 1000);
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}
