"use client";

import { useEffect, type ReactNode } from "react";

/** Rota değişiminde hafif sayfa girişi (CSS; hydration-safe) */
export function PageTransition({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
  }, []);

  return <div className="page-enter">{children}</div>;
}
