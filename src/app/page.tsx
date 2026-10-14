"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import FreelanceWebDevelopment from "@/components/FreelanceWebDevelopment";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <FreelanceWebDevelopment />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
