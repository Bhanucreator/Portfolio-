"use client";
import React from "react";
import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    value: "bhanukiran90216@gmail.com",
    href:  "mailto:bhanukiran90216@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bhanu-kiran-r",
    href:  "https://linkedin.com/in/bhanu-kiran-r",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/Bhanucreator",
    href:  "https://github.com/Bhanucreator",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted,  setIsSubmitted]  = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const formUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL;
      
      if (!formUrl || formUrl.includes("YOUR_FORM_ID")) {
        alert("Oops! The form handler URL is not configured yet. Please update the .env.local file.");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(formUrl, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-28 overflow-hidden bg-bg-primary">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none blur-[140px]"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, rgba(0,229,255,0.05) 60%, transparent 100%)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-mono text-accent-cyan tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Let&apos;s Build Something <span className="text-gradient">Together</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-12">
            I&apos;m always open to new opportunities, collaborations, and interesting projects. Feel free to reach out!
          </p>

          {/* Unified Contact Box */}
          <div className="max-w-5xl mx-auto bg-bg-card rounded-3xl border border-white/5 shadow-2xl overflow-hidden flex flex-col lg:flex-row">

            {/* Left — Contact Info */}
            <div className="w-full lg:w-2/5 p-8 md:p-10 bg-white/[0.02] border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-text-primary mb-8 text-left">Contact Information</h3>
              <div className="flex flex-col gap-6">
                {contactLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 text-left"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: "rgba(124,58,237,0.10)",
                        border: "1px solid rgba(124,58,237,0.25)",
                        color: "#00E5FF",
                      }}
                      onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.background = "rgba(124,58,237,0.20)"; el.style.boxShadow = "0 0 20px rgba(0,229,255,0.20)"; }}
                      onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.background = "rgba(124,58,237,0.10)"; el.style.boxShadow = "none"; }}
                    >
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-primary">{link.label}</p>
                      <p className="text-xs text-text-muted group-hover:text-accent-cyan transition-colors break-all">{link.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="w-full lg:w-3/5 p-8 md:p-10 text-left">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Name</label>
                    <input
                      required type="text" id="name" name="name" placeholder="Your Name"
                      className="w-full bg-bg-primary border border-white/5 rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none transition-all"
                      onFocus={(e) => { e.target.style.borderColor = "rgba(124,58,237,0.45)"; e.target.style.boxShadow = "0 0 0 1px rgba(124,58,237,0.35)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.05)"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                    <input
                      required type="email" id="email" name="email" placeholder="your@email.com"
                      className="w-full bg-bg-primary border border-white/5 rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none transition-all"
                      onFocus={(e) => { e.target.style.borderColor = "rgba(124,58,237,0.45)"; e.target.style.boxShadow = "0 0 0 1px rgba(124,58,237,0.35)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.05)"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                  <textarea
                    required id="message" name="message" rows={5} placeholder="How can I help you?"
                    className="w-full bg-bg-primary border border-white/5 rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none transition-all resize-none"
                    onFocus={(e) => { e.target.style.borderColor = "rgba(124,58,237,0.45)"; e.target.style.boxShadow = "0 0 0 1px rgba(124,58,237,0.35)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.05)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:-translate-y-0.5 mt-2"
                  style={isSubmitted
                    ? { background: "#059669", boxShadow: "0 0 25px rgba(5,150,105,0.35)" }
                    : { background: "linear-gradient(135deg, #7C3AED, #00E5FF)", boxShadow: "0 0 25px rgba(124,58,237,0.35)" }
                  }
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </div>
                  ) : isSubmitted ? (
                    <div className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Message Sent! ✨
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5">
        <div className="flex justify-center text-sm text-text-muted mb-8">
          <p>Built with ❤️ by <span className="text-gradient font-semibold">Bhanu Kiran R</span></p>
        </div>
      </div>
    </section>
  );
}
