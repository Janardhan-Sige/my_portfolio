"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Creative Studio",
    category: "Photography & Creative Portfolio",
    description:
      "A premium visual portfolio website designed for photographers, creative studios, and visual artists.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://rainbow-creative-studio.netlify.app/",
  },
  {
    number: "02",
    title: "Business Pro",
    category: "Business Website",
    description:
      "A responsive business website concept focused on presenting services clearly and helping visitors make contact.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "Personal Celebrations",
    category: "Customized Wishes Website",
    description:
      "A personalized celebration website concept with an occasion-focused layout and responsive presentation.",
    technologies: ["React", "TypeScript", "Framer Motion"],
    link: "https://mywish4you.netlify.app/",
  },
  {
    number: "04",
    title: "Digital Agency",
    category: "Agency & Services",
    description:
      "A responsive agency website concept emphasizing service information, clear navigation, and enquiry paths.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
];

export default function FreelanceWebDevelopment() {
  return (
    <section
      id="freelance"
      className="relative overflow-hidden bg-[#151515] py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#d4af37]" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[.25em] text-[#d4af37]">
              Freelance Web Development
            </span>
          </div>
          <h2 className="text-4xl font-black sm:text-5xl md:text-6xl lg:text-[72px]">
            Websites that
            <br />
            <span className="text-[#ef2b12]">turn ideas into experiences.</span>
          </h2>
          <p className="mt-7 max-w-3xl text-base leading-7 text-white/75 sm:text-lg">
            Alongside data engineering, I design and develop responsive websites
            for businesses, professionals, creators, and photographers.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Business Websites",
            "Portfolio Websites",
            "Landing Pages",
            "Responsive Web Apps",
          ].map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-white/10 bg-white/[.04] px-5 py-5"
            >
              <Globe size={18} className="mb-3 text-[#d4af37]" aria-hidden="true" />
              <p className="text-sm font-bold">{service}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="group rounded-[28px] border border-white/10 bg-white/[.045] p-7 sm:p-9"
            >
              <div className="flex justify-between">
                <span className="text-sm font-bold text-[#d4af37]">
                  {project.number}
                </span>
                <Code2 className="text-[#d4af37]" aria-hidden="true" />
              </div>
              <p className="mt-8 text-xs font-bold uppercase tracking-[.2em] text-white/55">
                {project.category}
              </p>
              <h3 className="mt-2 text-3xl font-black sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#d4af37] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af37]"
                >
                  View Website <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              ) : (
                <p className="mt-8 text-xs text-white/55">
                  Project link not published
                </p>
              )}
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[28px] bg-[#ef2b12] p-8 sm:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-[#ffe7a0]">
                Available for freelance projects
              </p>
              <h3 className="mt-3 text-3xl font-black sm:text-4xl">
                Have a website idea?
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/85">
                Whether you need a business website, personal portfolio, landing
                page, or custom web experience, let&apos;s discuss your idea.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 self-start rounded-full bg-[#d4af37] px-7 py-3.5 text-sm font-bold text-[#151515] transition hover:bg-[#e4c56a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start a Project <ExternalLink size={17} aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
