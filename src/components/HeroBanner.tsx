"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, UserPlus } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial:    { opacity: 0, y: 40 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.85, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

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
      className="flex w-full min-w-0 flex-col items-center justify-center rounded-[22px] px-3 py-3 text-center sm:w-auto sm:min-w-[108px] sm:px-4 sm:py-4"
      style={{
        background: "rgba(0,0,0,.68)",
        border: "1px solid rgba(247,198,0,.22)",
        boxShadow: "0 12px 35px rgba(0,0,0,.35)",
      }}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={display}
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 8, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="font-bebas leading-none block text-white"
            style={{ fontSize: "clamp(2rem, 8vw, 3.7rem)", letterSpacing: "0.05em" }}
        >
          {display}
        </motion.span>
      </AnimatePresence>
      <span className="font-outfit font-bold uppercase text-white/55 mt-1" style={{ fontSize: "0.58rem", letterSpacing: "0.18em" }}>
        {label}
      </span>
    </div>
  );
}

export default function HeroBanner() {
  const { d, h, m, s } = useCountdown();

  return (
    <section className="relative min-h-[100svh] lg:min-h-screen flex items-center overflow-hidden">

      {/* Dark vignette — strong on left for text, opens up right so flag shows */}
      <div className="absolute inset-0"
           style={{
             background:
               "linear-gradient(90deg,rgba(0,0,0,.80) 0%,rgba(0,0,0,.52) 45%,rgba(0,0,0,.12) 100%)",
           }} />
      <div className="absolute inset-0"
           style={{
             background:
               "linear-gradient(180deg,rgba(0,0,0,.38) 0%,rgba(0,0,0,.08) 45%,rgba(0,0,0,.52) 100%)",
           }} />

      {/* Green smoke accent */}
      <div className="absolute bottom-0 left-0 w-2/3 h-1/2 pointer-events-none"
           style={{ background: "radial-gradient(ellipse 80% 55% at 0% 100%,rgba(0,133,63,.28) 0%,transparent 70%)" }} />

      {/* Gold light ray */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
           style={{ background: "radial-gradient(ellipse 55% 80% at 100% 20%,rgba(247,198,0,.12) 0%,transparent 65%)" }} />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-14 lg:pb-16 w-full">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-center">

          {/* LEFT */}
          <div className="order-2 lg:order-1">
            <motion.p {...fadeUp(0.05)}
              className="font-outfit font-semibold text-white/60 tracking-[0.38em] uppercase mb-1"
              style={{ fontSize: "0.95rem" }}>
              Welcome To
            </motion.p>

            <motion.h1 {...fadeUp(0.12)}
              className="font-outfit font-black text-white uppercase leading-none"
              style={{ fontSize: "clamp(2rem,5.5vw,4rem)", letterSpacing: "0.04em" }}>
              TOLOMANE MNYAYIZA
            </motion.h1>

            <motion.div {...fadeUp(0.2)}>
              <span
                className="font-outfit font-black uppercase leading-none block"
                style={{
                  fontSize: "clamp(3rem,9vw,6.5rem)",
                  color: "#F7C600",
                  textShadow: "0 0 22px rgba(247,198,0,.8),0 0 55px rgba(247,198,0,.35)",
                  letterSpacing: "0.06em",
                  lineHeight: 0.88,
                }}
              >
                REGION
              </span>
            </motion.div>

            <motion.p {...fadeUp(0.28)}
              className="font-outfit font-semibold text-white/40 tracking-[0.32em] uppercase mt-2 mb-8"
              style={{ fontSize: "0.65rem" }}>
              Unity &bull; Service &bull; Progress
            </motion.p>

            {/* Value chips */}
            <motion.div {...fadeUp(0.34)} className="flex flex-wrap gap-2 mb-8">
              {["People First","Service Excellence","Sustainable Development","Strong Communities"].map((v) => (
                <span key={v}
                      className="px-4 py-1.5 rounded-full font-outfit font-bold uppercase"
                      style={{
                        fontSize: "0.62rem", letterSpacing: "0.1em",
                        background: "rgba(0,0,0,.65)",
                        border: "1px solid rgba(247,198,0,.35)",
                        color: "rgba(255,255,255,.75)",
                      }}>
                  {v}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div {...fadeUp(0.42)} className="flex flex-wrap gap-4">
              <a href="https://registertovote.elections.org.za/"
                 target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-3 rounded-[20px] font-outfit font-bold text-black uppercase tracking-wider transition-all hover:scale-105"
                 style={{ background:"#F7C600", fontSize:"0.82rem", boxShadow:"0 0 22px rgba(247,198,0,.42)" }}>
                <UserPlus size={17} /> Register / Update Voter Details
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8, delay:0.5, ease:[0.25,0.46,0.45,0.94] }}
              className="mt-6 rounded-[26px] p-4 sm:p-6"
              style={{
                background: "rgba(0,0,0,.62)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(247,198,0,.18)",
                boxShadow: "0 0 60px rgba(247,198,0,.1),0 20px 50px rgba(0,0,0,.45)",
                width: "100%",
                maxWidth: "540px",
              }}
            >
              <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                <Calendar size={15} className="text-[#F7C600]" />
                <span className="font-outfit font-bold text-white/60 uppercase tracking-[0.18em] sm:tracking-[0.22em]" style={{ fontSize: "0.58rem" }}>
                  COUNTDOWN TO THE 2026 LOCAL GOVERNMENT ELECTIONS
                </span>
              </div>

              <div className="grid grid-cols-2 items-stretch justify-center gap-2 sm:flex sm:flex-wrap sm:gap-3 lg:justify-start">
                <CountBox value={d} label="Days" />
                <CountBox value={h} label="Hours" />
                <CountBox value={m} label="Minutes" />
                <CountBox value={s} label="Seconds" />
              </div>
            </motion.div>
          </div>

          {/* RIGHT: slogan and countdown */}
          <motion.div
            initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }}
            transition={{ duration:0.95, delay:0.45, ease:[0.25,0.46,0.45,0.94] }}
            className="order-1 flex w-full flex-col gap-4 sm:gap-5 lg:order-2 lg:items-end"
          >
            <div
              className="hidden rounded-2xl p-6 text-center lg:block lg:text-right"
              style={{
                background: "rgba(0,0,0,.55)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(247,198,0,.22)",
                boxShadow: "0 0 60px rgba(247,198,0,.15),0 30px 80px rgba(0,0,0,.55)",
                maxWidth: "380px",
                width: "100%",
              }}
            >
              <p className="font-bebas uppercase leading-none mb-2"
                 style={{ fontSize:"clamp(2.4rem,4.5vw,3.3rem)", color:"#fff", letterSpacing:"0.06em" }}>YOUR VOTE</p>
              <p className="font-bebas uppercase leading-none mb-2"
                 style={{ fontSize:"clamp(2.4rem,4.5vw,3.3rem)", color:"#F7C600", letterSpacing:"0.06em",
                          textShadow:"0 0 18px rgba(247,198,0,.6)" }}>YOUR FUTURE</p>
              <p className="font-bebas uppercase leading-none mb-5"
                 style={{ fontSize:"clamp(2.4rem,4.5vw,3.3rem)", color:"#fff", letterSpacing:"0.06em" }}>OUR COMMUNITY</p>
              <div className="w-16 h-0.5 lg:ml-auto mx-auto mb-4" style={{ background:"#00853F" }} />
              <p className="font-outfit font-bold text-white/50 uppercase tracking-widest"
                 style={{ fontSize:"0.62rem" }}>
                2026 LOCAL GOVERNMENT ELECTIONS
              </p>
              <p className="font-outfit font-extrabold mt-1" style={{ fontSize:"0.78rem", color:"#F7C600" }}>
                4 NOVEMBER 2026
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
