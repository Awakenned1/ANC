"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const elections = [
  { date:"10 June 2026",  province:"KwaZulu-Natal",          color:"#4ADE80" },
  { date:"17 June 2026",  province:"Eastern Cape",            color:"#F7C600" },
  { date:"24 June 2026",  province:"Mpumalanga & North West", color:"#00853F" },
];

function SaMap() {
  return (
    <div className="w-full max-w-[320px] mx-auto rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(247,198,0,.18)" }}>
      <img
        src="/map.png"
        alt="South Africa ward by-elections map"
        className="block w-full h-auto object-contain"
      />
    </div>
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
            <div className="glass-green rounded-2xl p-5 sm:p-6 w-full max-w-[320px]">
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
