"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "yalcinisi-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Çerez bildirimi"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-steel-200 bg-paper/95 p-4 shadow-lift backdrop-blur-md md:p-5"
    >
      <div className="container-page flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-steel-500">
          Sitemiz, temel işlevler ve tercihleriniz için çerez kullanır. Devam
          ederek{" "}
          <Link href="/cerez-politikasi" className="font-medium text-ember-600">
            Çerez Politikası
          </Link>
          &apos;nı kabul etmiş olursunuz.
        </p>
        <button
          type="button"
          onClick={accept}
          className="btn-primary shrink-0 px-5 py-2.5"
        >
          Anladım
        </button>
      </div>
    </div>
  );
}
