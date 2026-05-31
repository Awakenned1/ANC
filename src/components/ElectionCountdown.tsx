"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";

const ELECTION = new Date("2026-11-04T07:00:00+02:00");

function useCountdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    function calc() {
      const diff = ELECTION.getTime() - Date.now();
      if (diff <= 0) return;
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function CountBox({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(label === "Days" ? 3 : 2, "0");
  return (
    <div
      className="flex flex-col items-center justify-center rounded-[25px] neon-card"
      style={{
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "2px solid #00FF84",
        width:  "clamp(110px,17vw,175px)",
        height: "clamp(110px,15vw,155px)",
      }}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={display}
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0,   opacity: 1 }}
          exit={{    y: 12,  opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="font-outfit font-black leading-none block"
          style={{ fontSize: "clamp(2.6rem,5vw,4.2rem)", color: "#F7C600" }}
        >
          {display}
        </motion.span>
      </AnimatePresence>
      <span className="font-outfit font-bold text-white uppercase mt-2 tracking-widest"
            style={{ fontSize: "clamp(0.6rem,1.2vw,1rem)" }}>
        {label}
      </span>
    </div>
  );
}

export default function ElectionCountdown() {
  const { d, h, m, s } = useCountdown();

  return (
    <section id="countdown" className="pt-32 pb-24 relative">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 section-overlay" />

      {/* Neon glow glow backdrop */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: "radial-gradient(ellipse 65% 55% at 50% 50%,rgba(0,255,132,.07) 0%,transparent 70%)" }} />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.7 }}
          className="mb-10"
        >
          <p className="font-outfit font-bold text-white/40 uppercase tracking-[0.3em] mb-4"
             style={{ fontSize:"0.82rem" }}>COUNTDOWN TO THE</p>
          <h2 className="font-outfit font-black text-white uppercase leading-none mb-1"
              style={{ fontSize:"clamp(1.8rem,4.5vw,3rem)" }}>
            2026 LOCAL GOVERNMENT
          </h2>
          <h2 className="font-bebas uppercase leading-none mb-5"
              style={{
                fontSize: "clamp(3rem,7.5vw,5.5rem)",
                color: "#F7C600",
                fontStyle: "italic",
                textShadow: "0 0 28px rgba(247,198,0,.65)",
              }}>
            ELECTIONS
          </h2>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full"
               style={{ background:"rgba(0,133,63,.75)", border:"1px solid #00FF84",
                        boxShadow:"0 0 16px rgba(0,255,132,.3)", backdropFilter:"blur(10px)" }}>
            <Calendar size={15} className="text-white" />
            <span className="font-outfit font-bold text-white uppercase tracking-widest"
                  style={{ fontSize:"0.85rem" }}>4 NOVEMBER 2026</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity:0, scale:0.93 }} whileInView={{ opacity:1, scale:1 }}
          viewport={{ once:true }} transition={{ duration:0.8, delay:0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <CountBox value={d} label="Days"    />
          <span className="font-bebas text-[#00FF84] hidden sm:block select-none"
                style={{ fontSize:"clamp(2.5rem,4vw,4rem)" }}>:</span>
          <CountBox value={h} label="Hours"   />
          <span className="font-bebas text-[#00FF84] hidden sm:block select-none"
                style={{ fontSize:"clamp(2.5rem,4vw,4rem)" }}>:</span>
          <CountBox value={m} label="Minutes" />
          <span className="font-bebas text-[#00FF84] hidden sm:block select-none"
                style={{ fontSize:"clamp(2.5rem,4vw,4rem)" }}>:</span>
          <CountBox value={s} label="Seconds" />
        </motion.div>

        <motion.p
          initial={{ opacity:0 }} whileInView={{ opacity:1 }}
          viewport={{ once:true }} transition={{ duration:0.7, delay:0.7 }}
          className="mt-8 text-white/30 tracking-wider" style={{ fontSize:"0.85rem" }}>
          Every vote shapes our municipalities — water, electricity, housing, roads &amp; more.
        </motion.p>
      </div>
    </section>
  );
}
