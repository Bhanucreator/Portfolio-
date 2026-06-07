"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home",         href: "#hero" },
  { label: "About",        href: "#about" },
  { label: "Experience",   href: "#experience" },
  { label: "Projects",     href: "#projects" },
  { label: "Skills",       href: "#skills" },
  { label: "Publications", href: "#publications" },
  { label: "Education",    href: "#education" },
  { label: "Contact",      href: "#contact" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full glass-strong">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold tracking-tight">
          <span className="text-gradient">BK</span>
          <span className="text-text-secondary ml-1 font-light">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5 lg:gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-2 lg:px-4 py-2 text-xs lg:text-sm text-text-secondary hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:bhanukiran90216@gmail.com"
            className="ml-2 lg:ml-4 px-3 lg:px-5 py-2 text-xs lg:text-sm font-semibold rounded-lg bg-accent-violet/10 text-accent-cyan border border-accent-violet/30 hover:bg-accent-violet/20 hover:border-accent-cyan/40 transition-all whitespace-nowrap"
          >
            Let&apos;s Talk
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-white/5 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    const targetId = link.href.substring(1);
                    const elem = document.getElementById(targetId);
                    if (elem) {
                      setTimeout(() => {
                        elem.scrollIntoView({ behavior: "smooth" });
                        window.history.pushState(null, "", link.href);
                      }, 100);
                    }
                  }}
                  className="px-4 py-3 text-sm text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:bhanukiran90216@gmail.com"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 text-sm font-semibold text-accent-cyan hover:bg-accent-violet/10 rounded-lg transition-colors"
              >
                Let&apos;s Talk →
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
