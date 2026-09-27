"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, type NavItem } from "@/data/site";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { MediaCredit } from "@/components/layout/MediaCredit";

function linkClass(solid: boolean, active?: boolean) {
  const base =
    "focus-ring group relative inline-flex items-center rounded-lg px-2.5 py-2 font-display text-[13px] font-bold tracking-[0.02em] transition-colors 2xl:px-3 2xl:text-sm";
  if (solid) {
    return `${base} ${
      active
        ? "bg-mist text-ember-600"
        : "text-ink hover:bg-mist hover:text-ember-600"
    }`;
  }
  return `${base} ${
    active
      ? "bg-white/15 text-white"
      : "text-white hover:bg-white/10 hover:text-white"
  }`;
}

function matchesPath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDesktop(null);
    setOpenMobile(null);
  }, [pathname]);

  const solid = !isHome || scrolled || menuOpen;

  const isActive = (item: NavItem) => {
    if (item.href === "/") return pathname === "/";
    if (item.match?.some((prefix) => pathname.startsWith(prefix))) return true;
    if (item.children) {
      return item.children.some((c) => matchesPath(pathname, c.href));
    }
    return matchesPath(pathname, item.href);
  };

  const desktopItems = navItems.filter((item) => item.href !== "/");

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-steel-200/80 bg-paper/90 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-[68px]">
        <BrandLogo
          variant={solid ? "color" : "white"}
          className="h-9 w-auto md:h-10"
          priority
        />

        <nav
          className="hidden items-center gap-0.5 xl:flex"
          aria-label="Ana menü"
        >
          {desktopItems.map((item) => {
            if (!item.children?.length) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={linkClass(solid, isActive(item))}
                >
                  {item.label}
                </Link>
              );
            }

            const open = openDesktop === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDesktop(item.label)}
                onMouseLeave={() => setOpenDesktop(null)}
                onFocus={() => setOpenDesktop(item.label)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setOpenDesktop(null);
                  }
                }}
              >
                <Link
                  href={item.href}
                  aria-haspopup="true"
                  aria-expanded={open}
                  className={linkClass(solid, isActive(item))}
                >
                  {item.label}
                  <svg
                    className={`ml-1 h-3 w-3 opacity-60 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 4.5 6 7.5 9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full w-80 pt-3"
                    >
                      <div className="rounded-2xl border border-steel-200 bg-paper p-2 shadow-lift">
                        {item.children.map((child) => (
                          <Link
                            key={child.href + child.label}
                            href={child.href}
                            className={`focus-ring block rounded-xl px-4 py-3 transition-colors hover:bg-mist ${
                              matchesPath(pathname, child.href) ? "bg-mist" : ""
                            }`}
                          >
                            <div className="font-display text-sm font-bold text-ink">
                              {child.label}
                            </div>
                            {child.description && (
                              <p className="mt-0.5 text-xs text-steel-500">
                                {child.description}
                              </p>
                            )}
                          </Link>
                        ))}
                        {item.footerLink && (
                          <Link
                            href={item.footerLink.href}
                            className="focus-ring mt-1 flex items-center justify-between rounded-xl border-t border-steel-100 px-4 py-3 text-xs font-semibold text-ember-600 hover:bg-mist"
                          >
                            {item.footerLink.label}
                            <span aria-hidden>→</span>
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <Link href="/iletisim#teklif" className="btn-primary px-5 py-2.5">
            Teklif Al
          </Link>
        </div>

        <button
          type="button"
          className={`focus-ring inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 xl:hidden ${
            solid ? "text-ink" : "text-white"
          }`}
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {menuOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="max-h-[min(80vh,720px)] overflow-y-auto border-t border-steel-200 bg-paper xl:hidden"
          >
            <div className="container-page flex flex-col py-3">
              {navItems.map((item) => {
                if (item.children?.length) {
                  const open = openMobile === item.label;
                  return (
                    <div
                      key={item.label}
                      className="border-b border-steel-100"
                    >
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className={`focus-ring flex-1 py-3.5 font-display text-base font-bold ${
                            isActive(item) ? "text-ember-600" : "text-ink"
                          }`}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          aria-label={`${item.label} alt menü`}
                          aria-expanded={open}
                          className="focus-ring inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-lg text-steel-500"
                          onClick={() =>
                            setOpenMobile(open ? null : item.label)
                          }
                        >
                          {open ? "−" : "+"}
                        </button>
                      </div>
                      {open && (
                        <div className="pb-3 pl-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.href + child.label}
                              href={child.href}
                              onClick={() => setMenuOpen(false)}
                              className="focus-ring block py-2.5"
                            >
                              <span className="block text-sm font-semibold text-ink">
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="block text-xs text-steel-500">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          ))}
                          {item.footerLink && (
                            <Link
                              href={item.footerLink.href}
                              onClick={() => setMenuOpen(false)}
                              className="focus-ring block py-2.5 text-sm font-semibold text-ember-600"
                            >
                              {item.footerLink.label} →
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`focus-ring border-b border-steel-100 py-3.5 font-display text-base font-bold last:border-0 ${
                      isActive(item) ? "text-ember-600" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/iletisim#teklif"
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-4 w-full"
              >
                Teklif Al
              </Link>
              <div className="mt-5 flex justify-center border-t border-steel-100 pb-1 pt-4">
                <MediaCredit tone="light" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
