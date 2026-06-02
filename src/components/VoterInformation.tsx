"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, CreditCard, UserPlus } from "lucide-react";
import { useState } from "react";

const checks = [
  "Check your voter registration status",
  "Update your residential address",
  "Register online before proclamation",
  "Locate your voting station",
];

const idDocs = [
  { label: "Green Barcoded ID Book",         color: "#00853F" },
  { label: "South African Smart ID Card",    color: "#F7C600" },
  { label: "Temporary Identity Certificate", color: "rgba(255,255,255,.6)" },
];

export default function VoterInformation() {
  const [ticked, setTicked] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setTicked((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <section id="voter-info" className="py-20 relative">
      <div className="absolute inset-0 section-overlay-green" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        <motion.div
          initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.65 }}
          className="text-center mb-12">
          <p className="font-outfit font-bold text-white/40 uppercase tracking-[0.3em] mb-3"
             style={{ fontSize:"0.78rem" }}>Prepare To Vote</p>
          <h2 className="font-outfit font-black text-white uppercase"
              style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>
            Voter <span style={{ color:"#F7C600" }}>Information</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Be Election Ready */}
          <motion.div
            initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.6 }}
            className="p-6 rounded-[20px]"
            style={{ background:"rgba(0,133,63,.82)", backdropFilter:"blur(16px)", WebkitBackdropFilter:"blur(16px)", border:"1px solid rgba(0,255,132,.2)" }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                   style={{ background:"rgba(255,255,255,.2)" }}>
                <Check size={18} color="white" strokeWidth={3} />
              </div>
              <h3 className="font-outfit font-extrabold text-white uppercase tracking-widest"
                  style={{ fontSize:"0.85rem" }}>Be Election Ready</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {checks.map((c, i) => {
                const done = ticked.has(i);
                return (
                  <li
                    key={c}
                    onClick={() => toggle(i)}
                    className="flex items-center gap-3 cursor-pointer select-none group"
                    role="checkbox"
                    aria-checked={done}
                  >
                    <span
                      className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all duration-200"
                      style={{
                        background: done ? "#F7C600" : "rgba(255,255,255,.15)",
                        border: done ? "2px solid #F7C600" : "1.5px solid rgba(255,255,255,.3)",
                        boxShadow: done ? "0 0 8px rgba(247,198,0,.5)" : "none",
                      }}
                    >
                      <AnimatePresence>
                        {done && (
                          <motion.span
                            key="tick"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          >
                            <Check size={9} color="#000" strokeWidth={3.5} />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                    <span
                      className="font-outfit font-semibold transition-all duration-200"
                      style={{
                        fontSize: "0.78rem",
                        color: done ? "rgba(255,255,255,.5)" : "white",
                        textDecoration: done ? "line-through" : "none",
                      }}
                    >
                      {c}
                    </span>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Required ID */}
          <motion.div
            initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.6, delay:0.1 }}
            className="p-6 rounded-[20px] glass-gold">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                   style={{ background:"rgba(247,198,0,.15)", border:"1px solid rgba(247,198,0,.3)" }}>
                <CreditCard size={18} color="#F7C600" />
              </div>
              <h3 className="font-outfit font-extrabold uppercase tracking-widest"
                  style={{ fontSize:"0.85rem", color:"#F7C600" }}>Required ID</h3>
            </div>
            <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <div
                className="overflow-hidden rounded-2xl border lg:self-stretch"
                style={{ borderColor: "rgba(247,198,0,.22)", background: "rgba(255,255,255,.04)" }}
              >
                <img
                  src="/ID%20.png"
                  alt="Accepted voter identification documents"
                  className="w-full h-full min-h-[180px] object-contain"
                />
              </div>

              <div>
                <p className="text-white/45 mb-4" style={{ fontSize:"0.78rem", lineHeight:1.6 }}>
                  Present one of these valid documents at your voting station:
                </p>
                <div className="flex flex-col gap-2">
                  {idDocs.map(({ label, color }) => (
                    <div key={label} className="flex items-center gap-3 p-2.5 rounded-xl"
                         style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)" }}>
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background:color }} />
                      <span className="font-outfit font-semibold text-white leading-snug" style={{ fontSize:"0.78rem" }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.6, delay:0.2 }}
            className="p-6 rounded-[20px] glass-dark flex flex-col gap-6 justify-between min-h-[320px] md:min-h-0">
            <h3 className="font-outfit font-extrabold text-white uppercase tracking-wider"
                style={{ fontSize:"0.9rem" }}>Take Action Today</h3>
            <a href="https://registertovote.elections.org.za/"
               target="_blank" rel="noopener noreferrer"
               className="flex w-full items-center gap-3 px-5 py-3.5 rounded-[20px] font-outfit font-extrabold uppercase text-white transition-all hover:scale-105"
               style={{ background:"rgba(0,133,63,.85)", fontSize:"0.82rem", letterSpacing:"0.07em",
                        boxShadow:"0 0 18px rgba(0,255,132,.3)", border:"1px solid rgba(0,255,132,.25)" }}>
              <UserPlus size={18} />
              <span className="leading-tight">REGISTER<br/>TO VOTE ONLINE</span>
              <span className="ml-auto text-lg">&rsaquo;</span>
            </a>
            <div className="flex flex-col items-center gap-2 pt-2">
              <img
                src="/Iec-South-Africa-Logo-Vector.svg-.png"
                alt="IEC South Africa"
                className="h-12 w-auto object-contain sm:h-14"
              />
              <span className="font-outfit font-bold text-white/35 uppercase text-center" style={{ fontSize:"0.55rem", letterSpacing:"0.2em" }}>
                SOUTH AFRICA
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
