"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

/* ─── Data — All publications from real resume + ICNEXT paper ─── */
const publicationsData = [
  {
    id: "kisanshakti",
    title: "KisanShakti: An Integrated Smart Farming and Hyperlocal Commerce Platform for Enhancing Farmer Profitability in India",
    conference: "International Conference on Next-Gen Engineering & Technology (ICNEXT-2026)",
    isbn: "978-93-5768-920-5",
    authors: "Bhanu Kiran R, Bindan N, Harshitha L, Harshitha N S and Guided by Dr. Vasudeva R",
    institution: "Dept. of CSE, C. Byregowda Institute of Technology, Kolar",
    description:
      "We didn't start with a dataset we visited villages, sat with farmers, and listened. No single platform addressed crop planning, input access, and local market sales together, especially offline. KisanShakti is our answer: an integrated smart farming and hyperlocal commerce platform designed to raise farmer income from the ground up.",
    bullets: [
      "Offline-capable React Native architecture for low-connectivity rural zones across Karnataka.",
      "AI-driven crop advisory system using localised agri-data and TensorFlow Lite CNN for disease detection.",
      "Hyperlocal digital marketplace bypassing intermediaries who capture 60–70% of crop value.",
      "Unified IoT dashboard integrating soil health, weather, livestock, and market pricing.",
      "Proof-of-concept frontend validated with stratified user testing including women farmers.",
    ],
    linkText: "View Publication",
    linkUrl: "#",
  },
  {
    id: "drug-discovery",
    title: "AI Applications in Pharmaceutical Drug Discovery",
    conference: "7th National Conference on Recent Trends in Engineering Science & Technology (NCRTEST-2025)",
    isbn: "978-93-6884-411-2",
    authors: "Bhanu Kiran R",
    institution: "C. Byregowda Institute of Technology, Kolar",
    description:
      "Explored how Graph Neural Networks can revolutionise molecular property prediction, dramatically reducing the time and cost of early-stage pharmaceutical drug discovery pipelines. Received commendation for practical applicability at the national conference.",
    bullets: [
      "Applied GNNs for molecular property prediction across 5,000+ compound structures.",
      "Analysed drug-target binding affinity, contributing methodology for accelerating early-stage drug screening.",
      "Reduced computational requirements for compound analysis by 35% compared to traditional molecular dynamics.",
    ],
    linkText: "View Research",
    linkUrl: "#",
  },
];

/* ── Card accent palette — violet, cyan ── */
const cardAccents = ["#7C3AED", "#00E5FF"];

function PublicationCard({
  pub, index, totalCards, scrollYProgress,
}: {
  pub: (typeof publicationsData)[0];
  index: number;
  totalCards: number;
  scrollYProgress: MotionValue<number>;
}) {
  const accent = cardAccents[index % cardAccents.length];

  const segmentSize = 1 / totalCards;
  // Trigger the fade/scale a bit later to ensure it doesn't fade while being read
  const fadeStart  = segmentSize * (index + 0.4); 
  const fadeEnd    = segmentSize * (index + 0.9);

  // Apply scaling and fading as user scrolls to the next card
  const scale   = useTransform(scrollYProgress, [fadeStart, fadeEnd], index < totalCards - 1 ? [1, 0.94] : [1, 1]);
  const opacity = useTransform(scrollYProgress, [fadeStart, fadeEnd], index < totalCards - 1 ? [1, 0.3] : [1, 1]);

  return (
    <div
      className="md:sticky mb-16 md:mb-0 relative"
      style={{
        // On md+ screens, it sticks near the top to stack
        top: `calc(12vh + ${index * 30}px)`,
        zIndex: index + 1,
        // Ensure there is plenty of scrolling space before the next card overlaps
        paddingBottom: index < totalCards - 1 ? "15vh" : "0px",
      }}
    >
      <motion.div
        style={{ scale, opacity, transformOrigin: "top" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
        className="relative rounded-3xl overflow-hidden group cursor-default shadow-2xl bg-bg-primary/50 backdrop-blur-sm border border-white/5"
      >
        {/* Card Background */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: "linear-gradient(135deg, rgba(15,15,23,0.98) 0%, rgba(10,10,18,0.99) 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        />

        {/* Top gradient on hover */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-t-3xl"
          style={{ background: `linear-gradient(90deg, transparent 0%, ${accent} 50%, transparent 100%)` }}
        />

        {/* Left stripe */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(180deg, ${accent}, transparent)` }}
        />

        {/* Ghost number */}
        <span
          className="text-[5.5rem] md:text-[7.5rem] font-black leading-none opacity-[0.03] absolute top-4 right-6 select-none pointer-events-none"
          style={{ color: accent }}
        >
          0{index + 1}
        </span>

        {/* Content Grid */}
        <div className="relative z-10 p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          
          {/* Left Column: Details & Button */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span
                  className="text-[9px] font-bold uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full border whitespace-nowrap"
                  style={{
                    color: accent,
                    borderColor: `${accent}30`,
                    backgroundColor: `${accent}0D`,
                    boxShadow: `0 0 20px ${accent}25`,
                  }}
                >
                  Published Paper
                </span>
              </div>

              {/* Conference */}
              <p className="text-sm font-semibold mb-3 leading-snug" style={{ color: accent }}>
                {pub.conference}
              </p>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-text-primary leading-snug tracking-tight mb-4">
                {pub.title}
              </h3>

              {/* Authors & Institution */}
              <div className="space-y-1.5 mb-4">
                <p className="text-xs text-text-muted font-mono flex items-start gap-2">
                  <span className="w-3 h-px mt-2 shrink-0" style={{ backgroundColor: accent }} />
                  <span className="leading-relaxed">{pub.authors}</span>
                </p>
                <p className="text-xs text-text-muted font-mono flex items-start gap-2">
                  <span className="w-3 h-px opacity-0 shrink-0" />
                  <span className="leading-relaxed">{pub.institution}</span>
                </p>
              </div>

              {/* ISBN */}
              {pub.isbn && (
                <p className="text-xs text-text-muted font-mono mb-6 flex items-center gap-2">
                  <span className="w-3 h-px shrink-0" style={{ backgroundColor: accent }} />
                  <span>ISBN: {pub.isbn}</span>
                </p>
              )}

              {/* Description */}
              <p className="text-text-secondary leading-[1.8] text-[0.95rem] mb-6 md:mb-0">
                {pub.description}
              </p>
            </div>

            {/* Button (Desktop) */}
            <div className="hidden md:block mt-8">
              <a
                href={pub.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-semibold text-text-primary border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-300 relative z-20"
              >
                {pub.linkText}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Key Findings */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-bold text-text-muted mb-4 uppercase tracking-[0.2em] flex items-center gap-3">
                <span className="w-6 h-px shrink-0" style={{ backgroundColor: accent }} />
                Key Findings
              </p>
              <ul className="space-y-4 pl-1">
                {pub.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                    className="flex items-start gap-3 text-text-secondary text-[0.9rem] leading-relaxed"
                  >
                    <span
                      className="mt-[7px] w-2 h-2 rounded-sm shrink-0 rotate-45"
                      style={{ backgroundColor: accent, boxShadow: `0 0 8px ${accent}60` }}
                    />
                    <span className="hover:text-text-primary transition-colors duration-200">{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Mobile Button placement */}
            <div className="block md:hidden mt-8">
              <a
                href={pub.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn w-full justify-center inline-flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-semibold text-text-primary border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-300 relative z-20"
              >
                {pub.linkText}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

export default function PublicationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Track scroll progress for the whole section to drive the stacking card animations
  const { scrollYProgress } = useScroll({ 
    target: sectionRef, 
    offset: ["start start", "end end"] 
  });

  return (
    <section id="publications" ref={sectionRef} className="relative w-full py-28 bg-bg-primary">
      {/* Ambient glows */}
      <div
        className="absolute left-1/3 top-1/4 w-[600px] h-[500px] rounded-full pointer-events-none blur-[180px] opacity-12"
        style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)" }}
      />
      <div
        className="absolute right-0 bottom-1/3 w-[400px] h-[400px] rounded-full pointer-events-none blur-[150px] opacity-8"
        style={{ background: "radial-gradient(circle, #00E5FF 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-wide relative inline-block">
            Publications
            <span className="section-underline" />
          </h2>
          <p className="text-text-secondary mt-8 text-base max-w-xl mx-auto">
            Peer-reviewed research in AI/ML applications and agricultural technology, presented at national and international conferences.
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="relative">
          {publicationsData.map((pub, idx) => (
            <PublicationCard
              key={pub.id}
              pub={pub}
              index={idx}
              totalCards={publicationsData.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
