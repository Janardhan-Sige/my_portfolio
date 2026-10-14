"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [notice, setNotice] = useState("");
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!contactEmail) {
      setNotice(
        "The contact email is not configured yet. You can reach me through GitHub using the link below."
      );
      return;
    }

    const body = [
      `Name: ${name}`,
      `Reply email: ${email}`,
      "",
      message,
    ].join("\n");
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject || "Portfolio enquiry")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setNotice("Your email app should open with your message ready to send.");
  };

  return (
    <section id="contact" className="section-padding scroll-mt-24">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
              Get in touch
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
              Let&apos;s talk data engineering.
            </h2>
            <p className="mt-6 max-w-lg leading-7 text-muted">
              For opportunities involving Google Cloud data platforms, ETL/ELT,
              warehouse modeling, data quality, or analytics, send a message.
            </p>
            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <MapPin aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">
                    Location
                  </p>
                  <p className="mt-1 font-medium">Hyderabad, India</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">
                    Contact
                  </p>
                  <p className="mt-1 font-medium">
                    {contactEmail || "Use the contact form or GitHub profile"}
                  </p>
                </div>
              </div>
              <a
                href="https://github.com/Janardhan-Sige"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
              >
                <Github size={18} aria-hidden="true" />
                Contact via GitHub
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-300/80 bg-white/60 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-700 dark:bg-slate-950/40 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-300/80 bg-white/60 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-700 dark:bg-slate-950/40 dark:text-white"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                required
                type="text"
                placeholder="Job opportunity or project enquiry"
                className="w-full rounded-xl border border-slate-300/80 bg-white/60 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-700 dark:bg-slate-950/40 dark:text-white"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={6}
                placeholder="Tell me about the opportunity or project..."
                className="w-full resize-y rounded-xl border border-slate-300/80 bg-white/60 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-700 dark:bg-slate-950/40 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Prepare Message
              <Send size={17} aria-hidden="true" />
            </button>
            {notice && (
              <p role="status" aria-live="polite" className="mt-4 text-sm leading-6 text-muted">
                {notice}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
