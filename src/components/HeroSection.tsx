"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

function CdBox({ value, label }: { value: number; label: string }) {
  const n = String(value).padStart(label === "DAYS" ? 3 : 2, "0");
  return (
    <div
      className="flex flex-col items-center justify-center rounded-xl px-4 py-3 text-center"
      style={{
        background: "rgba(0,0,0,0.75)",
        border: "1px solid rgba(255,255,255,0.18)",
        minWidth: "80px",
      }}
    >
      <span className="font-bebas leading-none block text-white" style={{ fontSize: "clamp(2.4rem,4vw,3.4rem)", letterSpacing: "0.04em" }}>
        {n}
      </span>
      <span className="font-outfit font-bold uppercase text-white/55 mt-0.5" style={{ fontSize: "0.55rem", letterSpacing: "0.2em" }}>
        {label}
      </span>
    </div>
  );
}

export default function HeroSection() {
  const { d, h, m, s } = useCountdown();

  return (
    <section className="relative flex items-center overflow-hidden" style={{ minHeight: "430px" }}>

      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
           style={{ backgroundImage: "url('/hero-bg.png')" }} />

      {/* Left dark overlay */}
      <div className="absolute inset-0"
           style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.87) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.28) 100%)" }} />
      <div className="absolute inset-0"
           style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 40%, rgba(0,0,0,0.4) 100%)" }} />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 pt-28 pb-8 w-full">
        <div className="flex items-center justify-between gap-4">

          {/* LEFT — countdown */}
          <div className="flex-1">
            <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.1 }}>
              <p className="font-outfit font-bold text-white uppercase tracking-[0.18em]" style={{ fontSize: "0.95rem" }}>
                COUNTDOWN TO THE
              </p>
              <p className="font-outfit font-extrabold text-white uppercase leading-tight" style={{ fontSize: "clamp(1.2rem,2.5vw,1.6rem)", letterSpacing: "0.06em" }}>
                2026 LOCAL GOVERNMENT
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.2 }}
              className="font-bebas leading-none"
              style={{
                fontSize: "clamp(4.5rem,9vw,7.5rem)",
                color: "#FFCC00",
                fontStyle: "italic",
                letterSpacing: "0.04em",
                textShadow: "0 2px 30px rgba(255,204,0,0.25)",
                lineHeight: 0.9,
              }}
            >
              ELECTIONS
            </motion.h1>

            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.3 }}
              className="flex items-center gap-2 mt-3 mb-4"
            >
              <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-outfit font-bold uppercase"
                style={{ background: "#007A33", fontSize: "0.88rem", letterSpacing: "0.1em" }}
              >
                <Calendar size={14} />
                4 NOVEMBER 2026
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
              className="flex gap-2 flex-wrap"
            >
              <CdBox value={d} label="DAYS" />
              <CdBox value={h} label="HOURS" />
              <CdBox value={m} label="MINUTES" />
              <CdBox value={s} label="SECONDS" />
            </motion.div>
          </div>

          {/* RIGHT — slogan */}
          <motion.div
            initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.8, delay:0.5 }}
            className="hidden md:flex flex-col items-end text-right flex-shrink-0"
            style={{ minWidth: "220px" }}
          >
            <span className="font-bebas leading-none text-white block"         style={{ fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing:"0.06em" }}>YOUR VOTE</span>
            <span className="font-bebas leading-none block"                    style={{ fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing:"0.06em", color: "#007A33" }}>YOUR FUTURE</span>
            <span className="font-bebas leading-none text-white block"         style={{ fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing:"0.06em" }}>OUR COMMUNITY</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
