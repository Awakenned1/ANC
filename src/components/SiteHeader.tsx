"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "HOME",       href: "#",          active: true  },
  { label: "ABOUT US",   href: "#about"                    },
  { label: "LEADERSHIP", href: "#leadership"               },
  { label: "NEWS",       href: "#news"                     },
  { label: "RESOURCES",  href: "#resources"                },
  { label: "GALLERY",    href: "#gallery"                  },
  { label: "CONTACT",    href: "#contact"                  },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(0,0,0,0.97)" : "rgba(0,0,0,0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "2px solid #007A33",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between gap-4"
           style={{ paddingTop: "0.4rem", paddingBottom: "0.4rem" }}>

        {/* Brand */}
        <div className="flex items-center gap-3 flex-shrink-0">

          {/* Protruding logo */}
          <div
            className="rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center bg-black cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-3"
            style={{
              width:        "108px",
              height:       "108px",
              marginTop:    "-26px",
              marginBottom: "-26px",
              position:     "relative",
              zIndex:       200,
              boxShadow: `
                0 0 0 4px #FFCC00,
                0 0 0 7px #007A33,
                0 0 0 9px rgba(255,204,0,0.35),
                0 0 28px rgba(255,204,0,0.80),
                0 0 60px rgba(255,204,0,0.40),
                0 10px 35px rgba(0,0,0,0.75)
              `,
              animation: "logoGlow 3s ease-in-out infinite alternate",
            }}
          >
            <img
              src="/hero-bg.png"
              alt="ANC Tolomane Mnyayiza Region"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="hidden sm:flex flex-col leading-none gap-0.5">
            <span className="font-outfit font-black text-white tracking-widest uppercase"
                  style={{ fontSize: "0.88rem" }}>
              TOLOMANE MNYAYIZA
            </span>
            <span className="font-outfit font-black tracking-widest uppercase leading-tight"
                  style={{ fontSize: "1.3rem", color: "#007A33" }}>
              REGION
            </span>
            <span className="font-outfit font-semibold tracking-widest uppercase"
                  style={{ fontSize: "0.54rem", color: "#888" }}>
              UNITY &bull; SERVICE &bull; PROGRESS
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5">
          {NAV.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-outfit font-bold uppercase transition-colors duration-200 pb-0.5"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                color: link.active ? "#fff" : "rgba(255,255,255,0.8)",
                borderBottom: link.active ? "2px solid #fff" : "2px solid transparent",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#involved"
            className="font-outfit font-black uppercase px-4 py-2 rounded-md transition-all hover:brightness-90"
            style={{ background: "#FFCC00", color: "#000", fontSize: "0.72rem", letterSpacing: "0.08em" }}
          >
            GET INVOLVED &rsaquo;
          </a>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2 text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ background: "rgba(0,0,0,0.98)", borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {NAV.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                   className="py-2.5 font-outfit font-bold text-sm uppercase tracking-widest text-white/80 hover:text-white border-b"
                   style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                  {l.label}
                </a>
              ))}
              <a href="#involved"
                 className="mt-2 self-start px-5 py-2 rounded font-outfit font-black text-sm uppercase tracking-wider text-black"
                 style={{ background: "#FFCC00" }}>
                GET INVOLVED &rsaquo;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
