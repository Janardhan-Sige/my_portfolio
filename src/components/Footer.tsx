"use client";

import { ArrowUp, Github, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();

  return (
    <footer className="relative overflow-hidden bg-[#111] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#ef2b12]/20 blur-[120px]"
      />
      <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h2 className="text-3xl font-black">
              Janardhan<span className="text-[#ef2b12]">.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Google Cloud data engineering portfolio focused on scalable data
              pipelines, warehouse modeling, data quality, and analytics.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/60">
              <MapPin size={16} aria-hidden="true" />
              Hyderabad, India
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[.2em] text-white/50">
              Explore
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              {[
                ["Home", "#home"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Certifications", "#certifications"],
                ["Contact", "#contact"],
              ].map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  className="w-fit text-sm text-white/70 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ef2b12]"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[.2em] text-white/50">
              Connect
            </h3>
            <div className="mt-5 flex flex-col gap-4">
              {contactEmail ? (
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
                >
                  <Mail size={17} aria-hidden="true" />
                  Email
                </a>
              ) : (
                <a
                  href="#contact"
                  className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
                >
                  <Mail size={17} aria-hidden="true" />
                  Contact form
                </a>
              )}
              <a
                href="https://github.com/Janardhan-Sige"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
              >
                <Github size={17} aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="my-12 h-px bg-white/10" />
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Janardhan. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/40">Built with Next.js</span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ef2b12] transition hover:bg-[#d92510] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <ArrowUp size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
