"use client";
import React from "react";
import { motion } from "framer-motion";

const CYAN = "#00E5FF";
const VIOLET = "#7C3AED";

const educationItems = [
  {
    period: "2023 – 2027",
    title: "Bachelor of Engineering in Computer Science & Engineering",
    org: "C. Byregowda Institute of Technology, Kolar",
    type: "DEGREE",
    detail: null,
    courses: ["Data Structures & Algorithms", "Machine Learning", "Deep Learning", "System Design", "Database Systems"],
  },
  {
    period: "2021 – 2023",
    title: "PUC – PCMB",
    org: "SDC Independent PU College, Bangarpet",
    type: "HIGH SCHOOL",
    detail: null,
    courses: [],
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative w-full py-28 overflow-hidden bg-bg-primary">
      <div
        className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-[160px]"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.10) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-wide relative inline-block">
            Education
            <span className="section-underline" />
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className="absolute left-[18px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] rounded-full"
            style={{ background: `linear-gradient(180deg, ${VIOLET} 0%, ${CYAN} 100%)` }}
          />

          <div className="flex flex-col gap-16 md:gap-20">
            {educationItems.map((item, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 18, delay: idx * 0.15 }}
                  className="relative w-full"
                >
                  {/* Node */}
                  <div
                    className="absolute top-[26px] left-[8px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-bg-primary border-[3px] z-20"
                    style={{ borderColor: CYAN, boxShadow: `0 0 18px rgba(0,229,255,0.8)` }}
                  />

                  {/* ── MOBILE CARD ── */}
                  <div className="md:hidden ml-[42px] relative">
                    <div className="absolute top-[24px] -left-[10px] w-5 h-5 bg-bg-card border-b border-l border-white/10 rotate-45 z-10" />
                    <div className="bg-bg-card rounded-2xl p-6 border border-white/8 shadow-lg hover:border-accent-cyan/30 transition-all duration-300">
                      <span className="inline-block text-[10px] font-bold px-3 py-1 rounded-full mb-4 tracking-wider" style={{ color: CYAN, background: "rgba(0,229,255,0.08)" }}>
                        {item.type}
                      </span>
                      <h3 className="text-xl font-bold text-text-primary mb-1.5">{item.title}</h3>
                      <p className="text-text-secondary text-sm font-medium mb-2">{item.org}</p>
                      {item.detail && <p className="text-xs text-text-muted mb-2">{item.detail}</p>}
                      <p className="text-xs font-mono font-semibold" style={{ color: CYAN }}>{item.period}</p>
                    </div>
                  </div>

                  {/* ── DESKTOP CARD ── */}
                  <div className={`hidden md:block w-[calc(50%-40px)] ${isLeft ? "mr-auto" : "ml-auto"}`}>
                    <div className="relative group">
                      {isLeft ? (
                        <div className="absolute top-[24px] -right-[12px] w-6 h-6 bg-bg-card border-t border-r border-white/10 rotate-45 group-hover:border-t-accent-cyan/40 group-hover:border-r-accent-cyan/40 transition-colors z-10" />
                      ) : (
                        <div className="absolute top-[24px] -left-[12px] w-6 h-6 bg-bg-card border-b border-l border-white/10 rotate-45 group-hover:border-b-accent-cyan/40 group-hover:border-l-accent-cyan/40 transition-colors z-10" />
                      )}

                      <div
                        className={`bg-bg-card rounded-2xl p-8 border border-white/8 shadow-xl transition-all duration-300 hover:-translate-y-1 ${isLeft ? "text-right" : "text-left"}`}
                        onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.boxShadow = "0 0 35px rgba(0,229,255,0.12), 0 0 60px rgba(124,58,237,0.08)"; el.style.borderColor = "rgba(0,229,255,0.30)"; }}
                        onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.boxShadow = "none"; el.style.borderColor = "rgba(255,255,255,0.08)"; }}
                      >
                        <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-5 tracking-wider" style={{ color: CYAN, background: "rgba(0,229,255,0.08)", boxShadow: "0 0 10px rgba(0,229,255,0.12)" }}>
                          {item.type}
                        </span>
                        <h3 className="text-2xl font-bold text-text-primary mb-2 leading-tight">{item.title}</h3>
                        <p className="text-text-secondary font-medium mb-2 text-[0.95rem]">{item.org}</p>
                        {item.detail && <p className="text-text-muted text-sm mb-3">{item.detail}</p>}
                        <p className="text-sm font-mono font-semibold mb-4" style={{ color: CYAN }}>{item.period}</p>
                        {item.courses.length > 0 && (
                          <div className={`flex flex-wrap gap-1.5 mt-2 ${isLeft ? "justify-end" : ""}`}>
                            {item.courses.map(c => (
                              <span key={c} className="px-2.5 py-1 bg-white/5 border border-white/8 text-text-muted text-[10px] font-medium rounded-full">{c}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
}
