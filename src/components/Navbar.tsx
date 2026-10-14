"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["Home", "#home"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Certifications", "#certifications"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to content
      </a>
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="border-b border-slate-200/20 bg-white/85 backdrop-blur-xl dark:bg-slate-950/85">
          <div className="container-main flex h-20 items-center justify-between">
            <a
              href="#home"
              className="text-base font-bold tracking-[0.18em] sm:text-lg sm:tracking-[0.25em]"
              aria-label="Janardhan Sige, home"
            >
              JANARDHAN ☁️ SIGE<span className="text-blue-500">.</span>
            </a>
            <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
              {links.map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  className="text-sm font-medium text-slate-600 transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:text-slate-300"
                >
                  {name}
                </a>
              ))}
              <ThemeToggle />
            </nav>
            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setOpen((current) => !current)}
                className="rounded-xl border border-slate-300 p-2 dark:border-slate-700"
                aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={open}
                aria-controls="mobile-navigation"
              >
                {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
              </button>
            </div>
          </div>
          {open && (
            <div id="mobile-navigation" className="border-t border-slate-200/60 bg-white px-6 py-6 dark:border-slate-800 dark:bg-slate-950 md:hidden">
              <nav aria-label="Mobile navigation" className="flex flex-col gap-5">
                {links.map(([name, href]) => (
                  <a
                    key={name}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-slate-700 hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:text-slate-200"
                  >
                    {name}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
