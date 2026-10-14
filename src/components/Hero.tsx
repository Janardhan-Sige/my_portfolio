"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const assetBase = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const attempted = useRef(false);
  const [muted, setMuted] = useState(true);

  const toggleAudio = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setMuted(nextMuted);
    if (!nextMuted) video.play().catch(() => {});
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video || attempted.current) return;
    attempted.current = true;

    const start = async () => {
      try {
        video.muted = false;
        setMuted(false);
        await video.play();
      } catch {
        video.muted = true;
        setMuted(true);
        try {
          await video.play();
        } catch {
          // Browser autoplay policy may require a user gesture.
        }
      }
    };

    if (video.readyState >= 2) {
      void start();
    } else {
      video.addEventListener("loadeddata", start, { once: true });
    }
    return () => video.removeEventListener("loadeddata", start);
  }, []);

  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          if (videoRef.current) videoRef.current.muted = true;
          setMuted(true);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen scroll-mt-20 overflow-hidden bg-[#ef2b12] text-white"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-red-500/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-orange-400/10 blur-3xl" />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-[1500px] items-center px-6 py-28 sm:px-10 lg:px-14 xl:px-20">
        <div className="grid w-full items-center lg:grid-cols-[0.95fr_1.05fr] lg:gap-4">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#D4AF37]" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#ffe39a] sm:text-sm sm:tracking-[0.25em]">
                Google Cloud Certified
              </span>
              <span className="h-[2px] w-10 bg-[#D4AF37]" aria-hidden="true" />
            </div>
            <h1 className="max-w-[760px] text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[88px]">
              GCP Data
              <br />
              Engineer <span aria-hidden="true">☁️</span>
            </h1>
            <p className="mt-6 max-w-[650px] text-base font-medium leading-7 text-white/95 sm:text-lg">
              I design and build data pipelines and analytics solutions on Google
              Cloud. My technical focus includes BigQuery and SQL for warehouse
              modeling, Cloud Storage for data landing, Dataflow for processing,
              and Cloud Composer (Airflow) for orchestration, supported by Python
              and data-quality practices.
            </p>
            <p className="mt-5 text-sm font-medium tracking-wide text-white/85">
              Janardhan · Hyderabad, India
            </p>
            <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#ef2b12] shadow-xl transition hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-7"
              >
                View Projects
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href={`${assetBase}/Janardhan-Resume.pdf`}
                download
                className="inline-flex items-center gap-3 rounded-full border-2 border-white/80 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-7"
              >
                <Download size={18} aria-hidden="true" />
                Download Resume
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-white/85 sm:text-sm">
              <span>BigQuery</span><span aria-hidden="true">·</span>
              <span>Dataflow</span><span aria-hidden="true">·</span>
              <span>Cloud Composer</span><span aria-hidden="true">·</span>
              <span>SQL &amp; Python</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mt-8 flex justify-center lg:mt-0 lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex w-full max-w-[600px] justify-center"
            >
              <div className="relative h-[430px] w-[420px] max-w-full sm:h-[580px] sm:w-[520px] lg:h-[680px] lg:w-[580px]">
                <div
                  className="absolute left-1/2 top-1/2 -z-10 h-[min(80vw,460px)] w-[min(80vw,460px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/15 blur-[100px]"
                  aria-hidden="true"
                />
                <div
                  className="relative h-full w-full"
                  style={{
                    maskImage:
                      "radial-gradient(ellipse 72% 82% at center, black 48%, rgba(0,0,0,.95) 62%, rgba(0,0,0,.5) 78%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 72% 82% at center, black 48%, rgba(0,0,0,.95) 62%, rgba(0,0,0,.5) 78%, transparent 100%)",
                  }}
                >
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    playsInline
                    muted={muted}
                    onClick={toggleAudio}
                    title={muted ? "Tap the video to enable audio" : "Tap the video to mute audio"}
                    aria-label={muted ? "Animated portrait video, muted. Activate to enable audio." : "Animated portrait video, sound enabled. Activate to mute audio."}
                    className="h-full w-full cursor-pointer object-contain"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <source src={`${assetBase}/avatar.webm`} type="video/webm; codecs=vp9" />
                    <source src={`${assetBase}/avatar.mp4`} type="video/mp4" />
                  </video>
                </div>
              </div>
              <p className="pointer-events-none absolute bottom-1 text-xs font-medium text-white/80" aria-live="polite">
                {muted ? "Tap the video for sound" : "Sound enabled"}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-7 left-1/2 hidden h-8 w-px -translate-x-1/2 bg-white/50 md:block"
        aria-hidden="true"
      />
    </section>
  );
}
