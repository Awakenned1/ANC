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
      className="flex flex-col items-center justify-center rounded-[25px] px-5 py-5 text-center"
      style={{
        background: "#050505",
        border: "2px solid #00FF84",
        boxShadow:
          "0 0 25px rgba(0,255,132,.4), inset 0 0 20px rgba(0,255,132,.04)",
        minWidth: "140px",
        animation: "pulseGlow 2s ease-in-out infinite",
      }}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={display}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0,  opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="font-montserrat font-black leading-none block"
          style={{ fontSize: "clamp(3rem, 5.5vw, 4.5rem)", color: "#FFC107" }}
        >
          {display}
        </motion.span>
      </AnimatePresence>
      <span className="text-white text-[0.78rem] font-bold tracking-[0.2em] uppercase mt-2">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const { d, h, m, s } = useCountdown();

  return (
    <section
      id="countdown"
      className="py-20 relative overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Neon glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,255,132,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            COUNTDOWN TO THE
          </p>
          <h2
            className="font-montserrat font-black uppercase leading-none mb-1"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)", color: "white" }}
          >
            2026 LOCAL GOVERNMENT
          </h2>
          <h2
            className="font-montserrat font-black uppercase leading-none mb-5"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "#FFC107",
              textShadow: "0 0 25px rgba(255,193,7,.6)",
            }}
          >
            ELECTIONS
          </h2>

          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full"
            style={{
              background: "#0E7A3D",
              border: "1px solid #00FF84",
              boxShadow: "0 0 15px rgba(0,255,132,0.3)",
            }}
          >
            <Calendar size={15} className="text-white" />
            <span className="text-white font-bold text-sm tracking-widest uppercase">
              4 NOVEMBER 2026
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <CountBox value={d} label="Days" />
          <span className="text-[#00FF84] font-black text-4xl hidden sm:block select-none">:</span>
          <CountBox value={h} label="Hours" />
          <span className="text-[#00FF84] font-black text-4xl hidden sm:block select-none">:</span>
          <CountBox value={m} label="Minutes" />
          <span className="text-[#00FF84] font-black text-4xl hidden sm:block select-none">:</span>
          <CountBox value={s} label="Seconds" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 text-white/35 text-sm tracking-wider"
        >
          Every vote shapes our municipalities — water, electricity, housing, roads &amp; more.
        </motion.p>
      </div>
    </section>
  );
}
