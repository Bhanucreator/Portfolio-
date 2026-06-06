"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const aboutStats = [
  { target: 200, suffix: "+", label: "Concurrent WS Connections" },
  { target: 92, suffix: "%", label: "RAG Retrieval Accuracy" },
  { target: 94.3, suffix: "%", label: "CNN Top-1 Accuracy", isDecimal: true },
  { target: 8.1, suffix: "", label: "Academic CGPI", isDecimal: true },
];

function AnimatedCounter({ target, suffix, isDecimal }: { target: number; suffix: string; isDecimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target, isDecimal]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : count}{suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-28 overflow-hidden bg-bg-primary">
      <div className="absolute left-1/3 top-0 w-[500px] h-[400px] bg-accent-violet/8 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[300px] bg-accent-cyan/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — About Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-mono text-accent-cyan tracking-widest uppercase mb-3">Who I Am</p>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I&apos;m a Software Development Engineer pursuing B.E. in Computer Science at C. Byregowda Institute
                of Technology, Kolar. I specialise in building scalable, production-grade systems from
                200+ concurrent WebSocket connections to sub-500ms AI inference pipelines.
              </p>
              <p>
                My work spans the full spectrum: React Native mobile apps with RAG-powered legal AI,
                real-time tourist safety platforms with PostGIS spatial indexing, and multi-class CNNs
                achieving 94.3% accuracy deployed at the edge with TensorFlow Lite.
              </p>
              <p>
                I&apos;m a published researcher my work on Graph Neural Networks in pharmaceutical drug
                discovery (NCRTEST-2025) and the KisanShakti smart-farming platform (ICNEXT-2026) reflects
                my passion for technology that reaches people who need it most.
              </p>
              <p>
                As Vice President of COPS CBIT, I&apos;ve mentored 15+ students, organised coding competitions
                for 100+ teams, and led the development of the official club website.
              </p>
            </div>

            {/* Quick info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                { icon: "◈", text: "Bangarapet, Karnataka" },
                { icon: "◈", text: "CBIT Kolar, 2023–27" },
                { icon: "◈", text: "bhanukiran90216@gmail.com" },
                { icon: "◈", text: "2× Published Researcher" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                  <span className="text-accent-cyan shrink-0">{item.icon}</span>
                  <span className="break-all sm:break-words">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-3 sm:gap-5"
          >
            {aboutStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-bg-card rounded-2xl p-4 sm:p-6 border border-white/5 card-hover text-center relative overflow-hidden flex flex-col justify-center"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse at center, rgba(124,58,237,0.08) 0%, transparent 70%)" }}
                />
                <p className="text-4xl md:text-5xl font-extrabold text-gradient mb-2">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} isDecimal={stat.isDecimal} />
                </p>
                <p className="text-xs text-text-muted uppercase tracking-widest leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
