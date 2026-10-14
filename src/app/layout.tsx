import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://its-my-portfolioo.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Janardhan | GCP Data Engineer",
    template: "%s | Janardhan",
  },
  description:
    "Janardhan is a Google Cloud data engineering professional focused on BigQuery, SQL, Dataflow, Cloud Composer, Python, and reliable analytics pipelines.",
  applicationName: "Janardhan Portfolio",
  keywords: [
    "GCP Data Engineer",
    "Google Cloud",
    "BigQuery",
    "SQL",
    "Apache Beam",
    "Dataflow",
    "Cloud Composer",
    "Airflow",
    "Python",
    "Data Engineering",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Janardhan | GCP Data Engineer",
    description:
      "Explore Janardhan's Google Cloud data engineering skills, projects, and certification.",
    siteName: "Janardhan Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Janardhan | GCP Data Engineer",
    description:
      "Google Cloud data engineering portfolio featuring BigQuery, Dataflow, Cloud Composer, SQL, and Python.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
