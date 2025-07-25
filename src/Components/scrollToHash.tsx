"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function smoothScrollTo(element: Element, duration = 1000, offset = -100) {
  const targetPosition =
    element.getBoundingClientRect().top + window.pageYOffset + offset;
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
    if (typeof window !== "undefined" && window.location.hash) {
      window.scrollTo(0, 0);
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) smoothScrollTo(element, 1000, -100);
      }, 300);
    } 

    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          smoothScrollTo(element, 1000, -100);
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}