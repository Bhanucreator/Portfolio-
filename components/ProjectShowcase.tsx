"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "ipc-legal",
    title: "IPC Legal Assistant",
    description: "A full-stack cross-platform mobile app providing instant, verified information on the Indian Penal Code 1860 using React Native (Expo) + Flask backend. Implements Retrieval-Augmented Generation (RAG) with LangChain and Llama 3.3-70B, achieving 92% accuracy in legal section retrieval from a 227-page corpus. Query response time under 800ms with 99.5% uptime over 60-day production testing.",
    image: "/images/project_ipc_legal.png",
    tags: ["React Native", "Flask", "LangChain", "Groq LLM", "RAG", "Expo"],
    link: "https://github.com/Bhanucreator/IndianPenolCode-app.git",
    theme: "#7C3AED",
  },
  {
    id: "vikranta",
    title: "VIKRANTA — Tourist Guardian",
    description: "Real-time tourist safety platform achieving 98% alert delivery rate via a WebSocket layer handling 50+ concurrent distress signals with sub-3s notification latency. Reduced geospatial query time by 85% using PostGIS spatial indexing on 10,000+ danger zones. AI-driven cultural guide built with RAG + Gemini AI, supporting 200+ active sessions at peak load.",
    image: "/images/project_vikranta.png",
    tags: ["React", "Flask", "PostgreSQL", "PostGIS", "Docker", "Gemini AI"],
    link: "https://github.com/Bhanucreator/VIKRANTA-AI_Tourist_Safety_Companion.git",
    theme: "#C026D3",
  },
  {
    id: "ai-chatbot",
    title: "Python AI Chatbot Platform",
    description: "Asynchronous FastAPI platform handling 200+ concurrent WebSocket connections with 99.8% uptime over 90 days, zero message loss. Reduced average LLM response latency to 450ms via Redis session management and context pooling. Decreased hallucination rates by 40% through advanced prompt engineering. CI/CD via GitHub Actions reduced release cycle by 75%.",
    image: "/images/project_ai_chatbot.png",
    tags: ["FastAPI", "OpenAI API", "WebSockets", "Redis", "Docker", "GitHub Actions"],
    link: "https://github.com/Bhanucreator/Python_Tutor_AI.git",
    theme: "#00E5FF",
  },
  {
    id: "image-classifier",
    title: "Deep Learning Image Classifier",
    description: "Multi-class CNN achieving 94.3% top-1 accuracy on 50,000+ images using optimised layer configurations and adaptive learning rate scheduling. Transfer learning with pre-trained ResNet50 reduced training time by 60%. TensorFlow Lite quantisation shrunk model from 98MB to 24MB, cutting CPU inference latency from 145ms to 38ms for edge deployment.",
    image: "/images/project_image_classifier.png",
    tags: ["TensorFlow", "Keras", "ResNet50", "Python", "TFLite", "CNN"],
    link: "https://github.com/Bhanucreator/ImageClasifier.git",
    theme: "#9D4EDD",
  },
  {
    id: "cops-website",
    title: "COPS Official Website",
    description: "Engineered the official Club of Programmers (COPS) website at CBIT Kolar, a platform centralising resources, events, and club news for a 200+ student community. Built in collaboration with Technical Lead Deepak P S. Deployed on Vercel with modern Next.js architecture, smooth animations, and responsive design.",
    image: "/images/project_trip_guide.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel", "React"],
    link: "https://cops-official.vercel.app",
    theme: "#0EA5E9",
  },
];

export default function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying && !isFlipped) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
      }, 8000);
    }
    return () => { if (interval) clearInterval(interval); };
  }, [isAutoPlaying, isFlipped]);

  const handleNext = () => { setIsAutoPlaying(false); setIsFlipped(false); setActiveIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0)); };
  const handlePrev = () => { setIsAutoPlaying(false); setIsFlipped(false); setActiveIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1)); };
  const handleCardClick = (i: number, isActive: boolean) => {
    setIsAutoPlaying(false);
    if (isActive) { setIsFlipped(!isFlipped); } else { setIsFlipped(false); setActiveIndex(i); }
  };

  return (
    <section id="projects" className="relative w-full py-24 bg-bg-primary overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-[180px]"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, rgba(0,229,255,0.04) 60%, transparent 100%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-wide relative inline-block">
            Projects
            <span className="section-underline" />
          </h2>
        </div>

        <div className="relative w-full h-[520px] md:h-[580px] flex items-center justify-center overflow-visible">
          <div className="relative w-full max-w-[1000px] h-full flex items-center justify-center overflow-visible">
            {projects.map((project, i) => {
              const total = projects.length;
              let offset = i - activeIndex;
              if (offset > Math.floor(total / 2)) offset -= total;
              else if (offset < -Math.floor(total / 2)) offset += total;

              const absOffset = Math.abs(offset);
              if (absOffset > 1 && isMobile) return null;

              const spacing = isMobile ? 90 : 230;
              const translateX = offset * spacing;
              const scale = absOffset === 0 ? 1 : isMobile ? 0.75 : 0.85;
              const opacity = absOffset > 0 ? (isMobile ? 0.3 : 0.5) : 1;
              const zIndex = 30 - absOffset;
              const isActive = offset === 0;

              return (
                <motion.div
                  key={project.id}
                  onClick={() => handleCardClick(i, isActive)}
                  animate={{ x: translateX, scale, opacity }}
                  transition={{ type: "spring", stiffness: 260, damping: 25 }}
                  style={{
                    zIndex,
                    position: "absolute",
                    pointerEvents: (absOffset > 1 && isMobile) ? "none" : "auto",
                    boxShadow: isActive
                      ? `0 0 55px 10px ${project.theme}80, 0 0 100px 20px ${project.theme}25`
                      : `0 0 18px 3px ${project.theme}25`,
                    borderColor: isActive ? project.theme : `${project.theme}55`,
                    borderWidth: isActive ? "2px" : "1px",
                  }}
                  className="w-[300px] sm:w-[320px] md:w-[360px] h-[480px] md:h-[520px] rounded-[20px] cursor-pointer select-none border-solid"
                >
                  <div
                    className="relative w-full h-full rounded-[18px]"
                    style={{
                      transformStyle: "preserve-3d",
                      WebkitTransformStyle: "preserve-3d",
                      transform: isActive && isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                      transition: "transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                    }}
                  >
                    {/* FRONT */}
                    <div
                      className="absolute inset-0 w-full h-full bg-bg-card flex flex-col rounded-[18px] overflow-hidden"
                      style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                    >
                      <div className="h-[48%] w-full bg-bg-card p-4 relative">
                        <div className="w-full h-full relative rounded-xl overflow-hidden border border-white/10">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover pointer-events-none" />
                          {!isActive && <div className="absolute inset-0 bg-black/55" />}
                        </div>
                      </div>
                      <div className="h-[52%] w-full px-5 pb-5 pt-2 flex flex-col justify-between items-center text-center">
                        <div>
                          <h3 className="text-[1.15rem] font-bold text-text-primary mb-2 leading-snug">{project.title}</h3>
                          <p className="text-[0.8rem] text-text-secondary line-clamp-3 leading-relaxed">{project.description}</p>
                        </div>
                        <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-lg mt-2 transition-all ${isActive ? "border-white/20 bg-white/5" : "border-white/8 bg-black/40 opacity-70"}`}>
                          👆
                        </div>
                      </div>
                    </div>

                    {/* BACK */}
                    <div
                      className="absolute inset-0 w-full h-full bg-bg-card flex flex-col px-6 py-8 rounded-[18px] overflow-hidden"
                      style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                    >
                      <h3 className="text-[1.2rem] font-bold text-center mb-3 text-text-primary leading-snug">{project.title}</h3>
                      <div className="text-[0.82rem] text-text-secondary leading-relaxed overflow-y-auto pr-1 flex-grow mb-4 text-center">
                        {project.description}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-5 justify-center">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-[0.72rem] font-medium rounded-full border border-white/10 text-text-muted bg-transparent">{tag}</span>
                        ))}
                      </div>
                      <div className="flex justify-center mt-auto">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-8 py-3 rounded-full font-bold text-[0.9rem] flex items-center gap-2 text-white transition-all duration-300"
                          style={{ background: "linear-gradient(135deg, #7C3AED, #00E5FF)", boxShadow: "0 0 20px rgba(124,58,237,0.4)" }}
                        >
                          Visit
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          {(["left", "right"] as const).map((side) => (
            <div key={side} className={`absolute top-1/2 -translate-y-1/2 ${side === "left" ? "left-2 sm:left-4 md:left-8" : "right-2 sm:right-4 md:right-8"} z-40`}>
              <button
                onClick={side === "left" ? handlePrev : handleNext}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-bg-card/80 hover:bg-bg-card border border-white/10 text-text-primary flex items-center justify-center transition-all hover:border-accent-violet/40 hover:shadow-[0_0_15px_rgba(124,58,237,0.25)]"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  {side === "left"
                    ? <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    : <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />}
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
