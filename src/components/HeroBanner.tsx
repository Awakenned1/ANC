"use client";

import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial:    { opacity: 0, y: 40 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.85, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

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
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <motion.div {...fadeUp(0)} className="mb-7">
              <div
                className="w-[145px] h-[145px] rounded-full overflow-hidden border-4"
                style={{
                  borderColor: "#F7C600",
                  boxShadow: "0 0 30px rgba(247,198,0,.7),0 0 70px rgba(247,198,0,.28)",
                }}
              >
                <img src="/hero-bg.png" alt="ANC Tolomane Mnyayiza Region"
                     className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.p {...fadeUp(0.15)}
              className="font-outfit font-semibold text-white/60 tracking-[0.38em] uppercase mb-1"
              style={{ fontSize: "0.95rem" }}>
              Welcome To
            </motion.p>

            <motion.h1 {...fadeUp(0.22)}
              className="font-outfit font-black text-white uppercase leading-none"
              style={{ fontSize: "clamp(2rem,5.5vw,4rem)", letterSpacing: "0.04em" }}>
              TOLOMANE MNYAYIZA
            </motion.h1>

            <motion.div {...fadeUp(0.30)}>
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

            <motion.p {...fadeUp(0.37)}
              className="font-outfit font-semibold text-white/40 tracking-[0.32em] uppercase mt-2 mb-8"
              style={{ fontSize: "0.65rem" }}>
              Unity &bull; Service &bull; Progress
            </motion.p>

            {/* Value chips */}
            <motion.div {...fadeUp(0.44)} className="flex flex-wrap gap-2 mb-8">
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
            <motion.div {...fadeUp(0.52)} className="flex flex-wrap gap-4">
              <a href="https://registertovote.elections.org.za/"
                 target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-3 rounded-[20px] font-outfit font-bold text-black uppercase tracking-wider transition-all hover:scale-105"
                 style={{ background:"#F7C600", fontSize:"0.82rem", boxShadow:"0 0 22px rgba(247,198,0,.42)" }}>
                <UserPlus size={17} /> Register / Update Voter Details
              </a>
            </motion.div>
          </div>

          {/* RIGHT: glassmorphism card over the background */}
          <motion.div
            initial={{ opacity:0, x:60 }} animate={{ opacity:1, x:0 }}
            transition={{ duration:1.1, delay:0.5, ease:[0.25,0.46,0.45,0.94] }}
            className="hidden lg:flex items-center justify-center">
            <div
              className="rounded-2xl p-6 text-center"
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
                 style={{ fontSize:"3.2rem", color:"#fff", letterSpacing:"0.06em" }}>YOUR VOTE</p>
              <p className="font-bebas uppercase leading-none mb-2"
                 style={{ fontSize:"3.2rem", color:"#F7C600", letterSpacing:"0.06em",
                          textShadow:"0 0 18px rgba(247,198,0,.6)" }}>YOUR FUTURE</p>
              <p className="font-bebas uppercase leading-none mb-6"
                 style={{ fontSize:"3.2rem", color:"#fff", letterSpacing:"0.06em" }}>OUR COMMUNITY</p>
              <div className="w-16 h-0.5 mx-auto mb-4" style={{ background:"#00853F" }} />
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
