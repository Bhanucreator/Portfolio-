"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Typewriter({ words, delay = 100, deleteDelay = 50, pauseDelay = 2500 }: {
  words: string[]; delay?: number; deleteDelay?: number; pauseDelay?: number;
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = words[currentWordIndex];

    if (isDeleting) {
      timer = setTimeout(() => setCurrentText(fullText.substring(0, currentText.length - 1)), deleteDelay);
    } else {
      timer = setTimeout(() => setCurrentText(fullText.substring(0, currentText.length + 1)), delay);
    }

    if (!isDeleting && currentText === fullText) timer = setTimeout(() => setIsDeleting(true), pauseDelay);
    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, delay, deleteDelay, pauseDelay]);

  return (
    <span className="inline-block relative">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet via-accent-purple to-accent-cyan">
        {currentText}
      </span>
      <span className="inline-block w-[3px] h-[0.8em] bg-accent-cyan ml-1 animate-pulse align-middle" />
    </span>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-start overflow-hidden pt-20 bg-bg-primary">

      {/* Desktop Avatar */}
      <div className="hidden md:block absolute right-16 top-0 bottom-0 w-[60%] z-0 pointer-events-none">
        <img
          src="/images/hero_bg_developer.png"
          alt="Bhanu Kiran R"
          className="absolute right-0 bottom-0 h-full w-auto max-w-none object-contain object-right-bottom"
        />
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-bg-primary via-bg-primary/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg-primary to-transparent" />
      </div>

      {/* Mobile Avatar */}
      <div className="block md:hidden absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/hero_bg_developer.png"
          alt="Bhanu Kiran R"
          className="w-full h-full object-cover object-top opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-bg-primary/40" />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent-violet/8 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-accent-cyan/6 blur-[120px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">

          {/* Availability Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-60" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-cyan" />
            </div>
            <span className="text-sm font-mono text-accent-cyan uppercase tracking-widest">
              Available for opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-text-primary leading-[1.05] tracking-tighter uppercase mb-4">
              Bhanu Kiran
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold font-sans text-text-secondary mb-8 h-[36px] md:h-[48px] flex items-center">
              <Typewriter words={["AI/ML Engineer", "Full-Stack Developer", "Published Researcher"]} />
            </h2>
          </motion.div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-text-secondary text-base lg:text-lg leading-relaxed max-w-xl mb-10"
          >
            Building production-grade AI systems and scalable full-stack applications.
            Published researcher in Graph Neural Networks for pharmaceutical drug discovery
            and AI-driven smart farming platforms.
          </motion.p>

          {/* Real Metrics from Resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:grid md:grid-cols-3 gap-6 mb-12 max-w-md md:max-w-xl"
          >
            {[
              { value: "200+", label: "Concurrent WebSocket Connections" },
              { value: "92%",  label: "RAG Legal Retrieval Accuracy" },
              { value: "94.3%",label: "CNN Image Classification" },
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-4 md:block">
                <span className="text-3xl md:text-4xl font-extrabold text-gradient min-w-[80px] md:min-w-0 shrink-0">{m.value}</span>
                <p className="text-xs md:text-[10px] text-text-muted font-mono uppercase mt-0 md:mt-1 leading-tight">{m.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href="#projects"
              className="group w-full sm:w-auto justify-center px-8 py-3.5 rounded-xl font-bold text-white transition-all duration-300 flex items-center gap-2"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #00E5FF)",
                boxShadow: "0 0 30px rgba(124,58,237,0.35)",
              }}
            >
              View Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="/IBM (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center px-8 py-3.5 rounded-xl border border-accent-violet/30 text-text-primary font-medium hover:bg-accent-violet/8 hover:border-accent-cyan/40 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              View Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
