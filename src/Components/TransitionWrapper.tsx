"use client";

import { usePathname } from "next/navigation";
import PageTransition from "@/Components/PageTransition";

export default function TransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  
  if (pathname === "/") {
    return <>{children}</>;
  }

  return <PageTransition>{children}</PageTransition>;
}
