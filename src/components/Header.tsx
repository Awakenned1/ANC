"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { label: "HOME",       href: "#" },
  { label: "ABOUT US",   href: "#about" },
  { label: "NEWS",       href: "#news" },
  { label: "PROGRAMMES", href: "#" },
  { label: "GALLERY",    href: "#" },
  { label: "DOCUMENTS",  href: "#" },
  { label: "CONTACT",    href: "#contact" },
];

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(0,0,0,0.92)"
          : "rgba(0,0,0,0.45)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3 sm:gap-4">

        {/* Brand */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden flex-shrink-0 border-2"
            style={{
              borderColor: "#FFC107",
              boxShadow: "0 0 20px rgba(255,193,7,0.45)",
            }}
          >
            <img
              src="/hero-bg.png"
              alt="ANC Tolomane Mnyayiza Region"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="flex min-w-0 flex-col leading-none">
            <span className="font-bold text-white/80 tracking-widest uppercase whitespace-nowrap"
                  style={{ fontSize: "clamp(0.5rem, 1.8vw, 0.65rem)" }}>
              TOLOMANE MNYAYIZA
            </span>
            <span
              className="font-black tracking-widest uppercase leading-tight whitespace-nowrap"
              style={{ color: "#FFC107", fontSize: "clamp(0.9rem, 3vw, 1.3rem)" }}
            >
              REGION
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.7rem] font-bold tracking-wider text-white/70 hover:text-white transition-colors duration-200 uppercase relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-anc-yellow transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <button className="hidden lg:flex p-2 text-white/50 hover:text-white transition-colors">
            <Search size={17} />
          </button>
          <a
            href="#"
            className="hidden lg:inline-flex items-center px-5 py-2 rounded-full text-[0.72rem] font-bold tracking-wider uppercase text-white transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "#0E7A3D",
              boxShadow: "0 0 18px rgba(0,255,132,0.3)",
            }}
          >
            JOIN ANC
          </a>
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t"
            style={{
              background: "rgba(0,0,0,0.97)",
              borderColor: "rgba(255,255,255,0.07)",
            }}
          >
            <div className="px-4 sm:px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-sm font-bold tracking-wider text-white/70 hover:text-white border-b uppercase"
                  style={{ borderColor: "rgba(255,255,255,0.05)" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                className="mt-3 self-start px-5 py-2 rounded-full text-sm font-bold text-white uppercase"
                style={{ background: "#0E7A3D" }}
              >
                JOIN ANC
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
