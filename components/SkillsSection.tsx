"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

/* ─── Data ─── */
const categories = [
  {
    label: "Crafting Interfaces",
    skills: [
      { name: "JavaScript",  img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React.js",    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "React Native",img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", tint: true },
      { name: "Tailwind CSS",img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML5",       img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3",        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    label: "Powering Logic",
    skills: [
      { name: "Python",      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Node.js",     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "FastAPI",     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "TensorFlow",  img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "LangChain",   img: "https://cdn.simpleicons.org/langchain/00A67E" },
      { name: "PostgreSQL",  img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
  },
  {
    label: "My Toolkit",
    skills: [
      { name: "Git",             img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker",          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes",      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "GitHub Actions",  img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
      { name: "GitHub",          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
    ],
  },
];

/* ─── Per-bubble float config — varied amplitude & phase ─── */
const floatConfigs = [
  { yAmp: 12, xAmp: 3,  rot: 2,   dur: 4.2, delay: 0.0 },
  { yAmp: 10, xAmp: 4,  rot: -1.5,dur: 3.8, delay: 0.5 },
  { yAmp: 14, xAmp: 2,  rot: 2.5, dur: 4.8, delay: 0.9 },
  { yAmp: 9,  xAmp: 5,  rot: -2,  dur: 3.5, delay: 0.3 },
  { yAmp: 11, xAmp: 3,  rot: 1.5, dur: 4.0, delay: 0.7 },
  { yAmp: 13, xAmp: 4,  rot: -2.5,dur: 4.5, delay: 0.2 },
];

interface SkillItem {
  name: string;
  img: string;
  tint?: boolean;
  invert?: boolean;
}

function SkillBubble({ skill, globalIdx }: { skill: SkillItem; globalIdx: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples]     = useState<number[]>([]);
  const cfg = floatConfigs[globalIdx % floatConfigs.length];

  const handleHoverStart = () => {
    setIsHovered(true);
    const id = Date.now();
    setRipples((prev) => [...prev, id]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r !== id)), 1200);
  };

  return (
    <div className="flex flex-col items-center gap-4 group">
      {/* ── Floating bubble wrapper ── */}
      <div className="relative">
        {/* Ripple rings */}
        {ripples.map((id) => (
          <span
            key={id}
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              animation: "water-ripple 1.1s ease-out forwards",
              border: "2px solid rgba(0,229,255,0.6)",
              borderRadius: "50%",
            }}
          />
        ))}

        {/* Main floating bubble */}
        <motion.div
          onHoverStart={handleHoverStart}
          onHoverEnd={() => setIsHovered(false)}
          animate={{
            y:      [0, -cfg.yAmp, 0, -cfg.yAmp * 0.6, 0],
            x:      [0,  cfg.xAmp, 0, -cfg.xAmp, 0],
            rotate: [0, cfg.rot, 0, -cfg.rot * 0.5, 0],
          }}
          transition={{
            duration:   cfg.dur,
            delay:      cfg.delay,
            repeat:     Infinity,
            ease:       "easeInOut",
            times:      [0, 0.3, 0.5, 0.75, 1],
          }}
          whileHover={{
            scale: 1.13,
            boxShadow: "0 0 38px rgba(0,229,255,0.70), 0 0 70px rgba(124,58,237,0.30)",
            borderColor: "rgba(0,229,255,0.85)",
          }}
          className="relative w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] rounded-full flex items-center justify-center cursor-pointer"
          style={{
            border: "2px solid rgba(124,58,237,0.50)",
            background: "rgba(15,15,23,0.92)",
            boxShadow: isHovered
              ? "0 0 38px rgba(0,229,255,0.70), 0 0 70px rgba(124,58,237,0.30)"
              : "0 0 18px rgba(124,58,237,0.20)",
          }}
        >
          {/* Glassy inner sheen */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 35% 30%, rgba(255,255,255,0.08) 0%, transparent 65%)",
            }}
          />
          <img
            src={skill.img}
            alt={skill.name}
            draggable={false}
            loading="lazy"
            className={`w-10 h-10 sm:w-11 sm:h-11 object-contain select-none relative z-10 ${skill.tint ? "hue-rotate-30" : ""} ${skill.invert ? "brightness-0 invert" : ""}`}
          />
        </motion.div>

        {/* ── Water shadow beneath bubble ── */}
        <motion.div
          animate={{
            scaleX:  [0.8, 1.05, 0.8, 1.0, 0.8],
            opacity: [0.25, 0.45, 0.25, 0.40, 0.25],
            y:       [cfg.yAmp * 0.5, 0, cfg.yAmp * 0.5, cfg.yAmp * 0.3, cfg.yAmp * 0.5],
          }}
          transition={{
            duration: cfg.dur,
            delay:    cfg.delay,
            repeat:   Infinity,
            ease:     "easeInOut",
            times:    [0, 0.3, 0.5, 0.75, 1],
          }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-14 h-3 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(0,229,255,0.55) 0%, rgba(124,58,237,0.20) 55%, transparent 100%)",
            filter: "blur(5px)",
          }}
        />
      </div>

      {/* Label */}
      <span className="text-text-secondary text-[11px] sm:text-xs font-semibold tracking-wide text-center leading-tight group-hover:text-accent-cyan transition-colors duration-300 max-w-[84px] mt-2">
        {skill.name}
      </span>
    </div>
  );
}

export default function SkillsSection() {
  let globalIdx = 0;

  return (
    <>
      {/* ── Ripple keyframe ── */}
      <style>{`
        @keyframes water-ripple {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>

      <section id="skills" className="w-full py-32 bg-bg-primary relative overflow-hidden">
        {/* Background ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full pointer-events-none blur-[200px]"
          style={{
            background: "radial-gradient(ellipse, rgba(124,58,237,0.09) 0%, rgba(0,229,255,0.05) 55%, transparent 100%)",
          }}
        />

        {/* Animated water ripple background circles */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-accent-violet/10 pointer-events-none"
            style={{
              width:  300 + i * 200,
              height: 300 + i * 200,
              top:    "50%",
              left:   "50%",
              x:      "-50%",
              y:      "-50%",
            }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 4 + i * 1.5, repeat: Infinity, delay: i * 1.2, ease: "easeInOut" }}
          />
        ))}

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-wide relative inline-block">
              Technical <span className="text-gradient">Skills</span>
              <span className="section-underline" />
            </h2>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-24">
            {categories.map((cat, catIdx) => (
              <motion.div
                key={cat.label}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.12 }}
              >
                {/* Category label with decorative lines */}
                <div className="flex items-center gap-4 mb-14 w-full max-w-xs sm:max-w-sm">
                  <div
                    className="flex-1 h-px"
                    style={{ background: "linear-gradient(to right, transparent, rgba(0,229,255,0.30))" }}
                  />
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent-cyan whitespace-nowrap">
                    {cat.label}
                  </h3>
                  <div
                    className="flex-1 h-px"
                    style={{ background: "linear-gradient(to left, transparent, rgba(0,229,255,0.30))" }}
                  />
                </div>

                {/* Skill bubbles */}
                <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 lg:gap-14 pb-6">
                  {cat.skills.map((skill) => {
                    const idx = globalIdx++;
                    return <SkillBubble key={skill.name} skill={skill} globalIdx={idx} />;
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
