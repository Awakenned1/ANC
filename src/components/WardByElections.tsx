"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const elections = [
  { date:"10 June 2026",  province:"KwaZulu-Natal",          color:"#F7C600" },
  { date:"17 June 2026",  province:"Eastern Cape",            color:"#60a5fa" },
  { date:"24 June 2026",  province:"Mpumalanga & North West", color:"#a855f7" },
];

function SaMap() {
  return (
    <svg viewBox="0 0 280 240" className="w-full max-w-[240px] mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="mapGlow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#00853F" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#00853F" stopOpacity="0.05" />
        </radialGradient>
      </defs>
      <path d="M55 38 L105 24 L160 22 L200 30 L228 50 L245 75 L250 100 L248 126 L238 150 L222 170 L202 187 L180 198 L158 204 L136 206 L112 202 L90 196 L72 184 L56 168 L42 148 L34 124 L30 100 L34 76 L44 56 Z"
            fill="url(#mapGlow2)" stroke="#00853F" strokeWidth="1.5" />
      <circle cx="216" cy="138" r="6" fill="#F7C600" opacity="0.9">
        <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="180" cy="176" r="6" fill="#60a5fa" opacity="0.9">
        <animate attributeName="r" values="6;10;6" dur="2s" begin="0.6s" repeatCount="indefinite"/>
      </circle>
      <circle cx="148" cy="80" r="6" fill="#a855f7" opacity="0.9">
        <animate attributeName="r" values="6;10;6" dur="2s" begin="1.2s" repeatCount="indefinite"/>
      </circle>
      <text x="222" y="132" fill="#F7C600" fontSize="8" fontFamily="sans-serif" opacity="0.8">KZN</text>
      <text x="158" y="192" fill="#60a5fa" fontSize="8" fontFamily="sans-serif" opacity="0.8">EC</text>
      <text x="114" y="76"  fill="#a855f7" fontSize="8" fontFamily="sans-serif" opacity="0.8">MP/NW</text>
    </svg>
  );
}

export default function WardByElections() {
  return (
    <section id="ward-elections" className="py-20 relative">
      <div className="absolute inset-0 section-overlay" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        <motion.div
          initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.65 }}
          className="text-center mb-12">
          <p className="font-outfit font-bold text-white/40 uppercase tracking-[0.3em] mb-3"
             style={{ fontSize:"0.78rem" }}>Upcoming</p>
          <h2 className="font-outfit font-black text-white uppercase"
              style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>
            Ward <span style={{ color:"#F7C600" }}>By-Elections</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.8 }}
            className="flex justify-center">
            <div className="glass-green rounded-2xl p-6 w-full max-w-[320px]">
              <SaMap />
              <p className="text-center text-white/35 font-outfit font-bold uppercase tracking-widest mt-3"
                 style={{ fontSize:"0.58rem" }}>SOUTH AFRICA — WARD BY-ELECTIONS 2026</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            {elections.map(({ date, province, color }, i) => (
              <motion.div
                key={date}
                initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }} transition={{ duration:0.6, delay: i*0.12 }}
                whileHover={{ x:6, transition:{ duration:0.2 } }}
                className="flex items-center gap-5 p-5 rounded-[18px] cursor-default"
                style={{
                  background: "rgba(0,0,0,.55)",
                  border: `1px solid ${color}28`,
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                     style={{ background:`${color}18`, border:`1px solid ${color}40` }}>
                  <MapPin size={20} style={{ color }} />
                </div>
                <div className="flex-1">
                  <p className="font-outfit font-black text-white" style={{ fontSize:"1.05rem" }}>{date}</p>
                  <p className="font-outfit font-semibold" style={{ fontSize:"0.78rem", color:"rgba(255,255,255,.5)" }}>{province}</p>
                </div>
                <span className="text-2xl flex-shrink-0" style={{ color }}>★</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
