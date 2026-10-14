"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2, ExternalLink } from "lucide-react";

export default function Certifications() {
  const certificateUrl = process.env.NEXT_PUBLIC_GOOGLE_CERTIFICATE_URL;

  return (
    <section id="certifications" className="section-padding scroll-mt-24">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#ef2b12]">
            Certification
          </p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Google Cloud credentials.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="glass mt-10 rounded-3xl p-6 sm:p-10"
        >
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#ef2b12]/10 text-[#ef2b12] sm:h-24 sm:w-24">
              <Award size={46} aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold sm:text-2xl">
                  Google Cloud Professional Data Engineer
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 size={14} aria-hidden="true" />
                  Certified
                </span>
              </div>
              <p className="mt-4 max-w-3xl leading-7 text-muted">
                Professional certification covering the design, development,
                management, and security of data processing systems on Google Cloud.
              </p>
              {certificateUrl ? (
                <a
                  href={certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#ef2b12] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d92510] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ef2b12]"
                >
                  View Certificate
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              ) : (
                <p className="mt-5 text-sm text-muted">
                  Certificate verification link can be added when the public credential URL is available.
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
