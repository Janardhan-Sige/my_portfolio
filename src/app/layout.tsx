import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Janardhan | Google Certified GCP Data Engineer", description: "Janardhan — Google Certified GCP Data Engineer building scalable data pipelines and AI solutions on Google Cloud." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body>{children}</body></html>; }
