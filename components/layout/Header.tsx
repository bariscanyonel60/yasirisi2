"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, type NavItem } from "@/data/site";
import { categories } from "@/data/categories";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { MediaCredit } from "@/components/layout/MediaCredit";

function linkClass(solid: boolean, active?: boolean) {
  const base =
    "focus-ring group relative rounded-lg px-3 py-2 font-display text-[13px] font-bold tracking-[0.02em] transition-colors md:text-sm";
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
    if (item.mega === "products") return pathname.startsWith("/urunler");
    if (item.children) {
      return item.children.some(
        (c) => pathname === c.href || pathname.startsWith(`${c.href}/`)
      );
    }
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  };

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

        <nav className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) => {
            if (item.mega === "products") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenDesktop("products")}
                  onMouseLeave={() => setOpenDesktop(null)}
                >
                  <Link
                    href={item.href}
                    className={linkClass(solid, isActive(item))}
                  >
                    {item.label}
                  </Link>
                  <AnimatePresence>
                    {openDesktop === "products" && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3"
                      >
                        <div className="grid grid-cols-2 gap-1 rounded-2xl border border-steel-200 bg-paper p-3 shadow-lift">
                          {categories.map((cat) => (
                            <Link
                              key={cat.slug}
                              href={`/urunler/kategori/${cat.slug}`}
                              className="focus-ring group rounded-xl p-4 hover:bg-mist transition-colors"
                            >
                              <div className="font-display text-sm font-bold text-ink group-hover:text-ember-600">
                                {cat.name}
                              </div>
                              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-steel-500">
                                {cat.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            if (item.children?.length) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenDesktop(item.label)}
                  onMouseLeave={() => setOpenDesktop(null)}
                >
                  <Link
                    href={item.href}
                    className={linkClass(solid, isActive(item))}
                  >
                    {item.label}
                    <span className="ml-1 inline-block text-[10px] opacity-60">
                      ▾
                    </span>
                  </Link>
                  <AnimatePresence>
                    {openDesktop === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full w-72 pt-3"
                      >
                        <div className="rounded-2xl border border-steel-200 bg-paper p-2 shadow-lift">
                          {item.children.map((child) => (
                            <Link
                              key={child.href + child.label}
                              href={child.href}
                              className="focus-ring block rounded-xl px-4 py-3 hover:bg-mist transition-colors"
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
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(solid, isActive(item))}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <Link href="/iletisim#teklif" className="btn-primary px-5 py-2.5">
            Teklif Al
          </Link>
        </div>

        <button
          className={`focus-ring rounded-lg p-2 xl:hidden ${
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
            className="max-h-[80vh] overflow-y-auto border-t border-steel-200 bg-paper xl:hidden"
          >
            <div className="container-page flex flex-col py-3">
              {navItems.map((item) => {
                if (item.mega === "products") {
                  const open = openMobile === "products";
                  return (
                    <div
                      key={item.href}
                      className="border-b border-steel-100"
                    >
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="focus-ring flex-1 py-3.5 font-display text-base font-bold text-ink"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          aria-label="Ürün alt menü"
                          className="focus-ring px-3 py-3.5 text-steel-500"
                          onClick={() =>
                            setOpenMobile(open ? null : "products")
                          }
                        >
                          {open ? "−" : "+"}
                        </button>
                      </div>
                      {open && (
                        <div className="pb-3 pl-3">
                          {categories.map((cat) => (
                            <Link
                              key={cat.slug}
                              href={`/urunler/kategori/${cat.slug}`}
                              onClick={() => setMenuOpen(false)}
                              className="focus-ring block py-2.5 text-sm text-steel-600"
                            >
                              {cat.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.children?.length) {
                  const open = openMobile === item.label;
                  return (
                    <div
                      key={item.href}
                      className="border-b border-steel-100"
                    >
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="focus-ring flex-1 py-3.5 font-display text-base font-bold text-ink"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          aria-label={`${item.label} alt menü`}
                          className="focus-ring px-3 py-3.5 text-steel-500"
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
                              className="focus-ring block py-2.5 text-sm text-steel-600"
                            >
                              {child.label}
                            </Link>
                          ))}
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
                    className="focus-ring border-b border-steel-100 py-3.5 font-display text-base font-bold text-ink last:border-0"
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
              <div className="mt-5 border-t border-steel-100 pt-4 pb-1 flex justify-center">
                <MediaCredit tone="light" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
