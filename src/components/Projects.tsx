"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Database, GitBranch, BrainCircuit } from "lucide-react";

const repositoryUrl =
  "https://github.com/Janardhan-Sige/MyGcp_Data_Engineering_projects";

const projects = [
  {
    number: "01",
    title: "GCP Retail Data Platform",
    description:
      "A portfolio data platform designed around batch and event-stream processing. The documented flow covers cloud storage ingestion, Composer orchestration, Dataflow processing, BigQuery warehouse layers, and analytics marts.",
    details: [
      "Data flow: landing → validation/deduplication → warehouse → marts",
      "Data quality: invalid-record quarantine and reconciliation patterns",
      "Warehouse design: dimensional modeling, SCD Type 2, partitioning, and clustering",
    ],
    technologies: ["GCS", "Cloud Composer", "Dataflow", "BigQuery", "Python", "SQL"],
    icon: Database,
    href: repositoryUrl,
    linkLabel: "View source repository",
  },
  {
    number: "02",
    title: "Batch ETL Orchestration",
    description:
      "A batch-processing workflow pattern for coordinating ingestion, transformation, validation, and publishing steps with explicit dependencies and retry-aware orchestration.",
    details: [
      "Orchestration: scheduled DAG tasks and dependency management",
      "Transformations: SQL-based cleansing and business-rule application",
      "Operations: run auditing, failure visibility, and backfill considerations",
    ],
    technologies: ["Airflow", "Cloud Composer", "Python", "BigQuery SQL"],
    icon: GitBranch,
    href: undefined,
    linkLabel: undefined,
  },
  {
    number: "03",
    title: "Analytics & Reporting Layer",
    description:
      "An analytics-layer design focused on making curated warehouse data easier to explore through business-friendly datasets and dashboard-ready measures.",
    details: [
      "Modeling: customer, order, and commercial KPI views",
      "Metrics: revenue, order counts, units, and cancellation indicators",
      "Consumption: BigQuery marts prepared for BI tools",
    ],
    technologies: ["BigQuery", "SQL", "Looker Studio", "Power BI"],
    icon: BrainCircuit,
    href: undefined,
    linkLabel: undefined,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-950/[0.03]">
      <div className="container-main">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
          Selected Work
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Data platforms built for reliable analytics.
        </h2>
        <p className="mt-5 max-w-3xl leading-7 text-muted">
          Explore the architecture and engineering patterns behind ingestion,
          orchestration, data quality, warehouse modeling, and analytics. The
          first card links to the source repository; the remaining cards describe
          solution areas and are not presented as separate published repositories.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="glass flex h-full flex-col rounded-3xl p-6 sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Icon size={23} aria-hidden="true" />
                </div>
                <p className="mt-6 text-xs font-bold tracking-[0.2em] text-muted">
                  PROJECT {project.number}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {project.description}
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
                  {project.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ef2b12]"
                        aria-hidden="true"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-slate-300/70 px-3 py-1.5 text-xs text-muted dark:border-slate-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-8">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
                    >
                      {project.linkLabel}
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  ) : (
                    <p className="text-xs text-muted">Solution overview</p>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
