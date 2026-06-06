"use client";
import React from "react";
import { motion } from "framer-motion";

const CYAN = "#00E5FF";
const VIOLET = "#7C3AED";

const experiences = [
  {
    period: "20 Jan 2026 – 12 Feb 2026",
    title: "Intern",
    org: "Microsoft × AICTE",
    type: "INTERNSHIP",
    points: [
      "Completed an intensive 4-week program focused on Microsoft-driven emerging technologies in collaboration with AICTE.",
      "Accumulated 85+ hours of specialised training across AI/ML, Cloud Administration, and Microsoft Azure.",
      "Developed a foundational understanding of cloud architecture, scalable engineering principles, and Azure services.",
    ],
    tech: ["AI/ML", "Azure", "Cloud Administration", "Microsoft"],
  },
  {
    period: "Aug 2023 – Present",
    title: "Vice President",
    org: "Club of Programmers (COPS) — CBIT Kolar",
    type: "LEADERSHIP",
    points: [
      "Started as a member collaborating with senior leaders to host programming challenges, and progressed to serving as Vice President.",
      "Successfully hosted i-Sphere 1.0, managing cross-functional teams and earning incredible positive feedback from attendees.",
      "Led the development of the official club website alongside the Technical Lead to centralize resources and improve online presence.",
    ],
    tech: ["Leadership", "Event Management", "Web Development", "Mentorship"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full py-28 overflow-hidden bg-bg-primary">
      {/* Ambient glow */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none blur-[180px]"
        style={{ background: `radial-gradient(ellipse, rgba(124,58,237,0.10) 0%, transparent 70%)` }}
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
            Experience
            <span className="section-underline" />
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div
            className="absolute left-[18px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] rounded-full"
            style={{ background: `linear-gradient(180deg, ${VIOLET} 0%, ${CYAN} 100%)` }}
          />

          <div className="flex flex-col gap-16 md:gap-20">
            {experiences.map((exp, idx) => {
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
                  {/* Glowing Node */}
                  <div
                    className="absolute top-[26px] left-[8px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-bg-primary border-[3px] z-20"
                    style={{ borderColor: CYAN, boxShadow: `0 0 18px rgba(0,229,255,0.8)` }}
                  />

                  {/* ── MOBILE CARD ── */}
                  <div className="md:hidden ml-[42px] relative">
                    <div className="absolute top-[24px] -left-[10px] w-5 h-5 bg-bg-card border-b border-l border-white/10 rotate-45 z-10" />
                    <div className="bg-bg-card rounded-2xl p-6 border border-white/8 shadow-lg hover:border-accent-cyan/30 transition-all duration-300">
                      <span className="inline-block text-[10px] font-bold px-3 py-1 rounded-full mb-4 tracking-wider" style={{ color: CYAN, background: "rgba(0,229,255,0.08)" }}>
                        {exp.type}
                      </span>
                      <h3 className="text-xl font-bold text-text-primary mb-1">{exp.title}</h3>
                      <p className="text-text-secondary text-sm font-medium mb-1">{exp.org}</p>
                      <p className="text-xs font-mono font-semibold mb-4" style={{ color: CYAN }}>{exp.period}</p>
                      <ul className="space-y-2 mb-5 text-sm text-text-secondary">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: CYAN, boxShadow: `0 0 5px ${CYAN}` }} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span key={t} className="px-2.5 py-1 bg-white/5 border border-white/10 text-text-muted text-[10px] font-medium rounded-full">{t}</span>
                        ))}
                      </div>
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
                          {exp.type}
                        </span>
                        <h3 className="text-2xl font-bold text-text-primary mb-1">{exp.title}</h3>
                        <p className="text-text-secondary font-medium mb-1">{exp.org}</p>
                        <p className="text-sm font-mono font-semibold mb-6" style={{ color: CYAN }}>{exp.period}</p>

                        <ul className={`space-y-3 mb-8 text-[0.95rem] text-text-secondary ${isLeft ? "flex flex-col items-end" : ""}`}>
                          {exp.points.map((point, i) => (
                            <li key={i} className={`flex items-start gap-3 leading-relaxed w-full ${isLeft ? "text-right justify-end" : ""}`}>
                              {isLeft && <span>{point}</span>}
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: CYAN, boxShadow: `0 0 5px ${CYAN}` }} />
                              {!isLeft && <span>{point}</span>}
                            </li>
                          ))}
                        </ul>

                        <div className={`flex flex-wrap gap-2 ${isLeft ? "justify-end" : ""}`}>
                          {exp.tech.map((t) => (
                            <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 text-text-muted text-xs font-medium rounded-full hover:bg-white/10 transition-colors">{t}</span>
                          ))}
                        </div>
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
