"use client";

import { motion } from "framer-motion";

const services = [
  { icon:"💧", title:"Water Supply",          desc:"Clean, reliable water access for every household and community.",           color:"#60a5fa" },
  { icon:"🏠", title:"Housing",               desc:"Affordable, quality housing with modern infrastructure and facilities.",    color:"#4ade80" },
  { icon:"⚡", title:"Electricity",           desc:"Sustainable energy solutions, grid upgrades and electrification.",          color:"#F7C600" },
  { icon:"🛣️", title:"Roads & Infrastructure", desc:"Maintained roads, bridges and public infrastructure connecting communities.", color:"#fb923c" },
  { icon:"🗑️", title:"Waste Management",       desc:"Regular refuse removal, recycling initiatives and clean public spaces.",    color:"#a78bfa" },
  { icon:"👥", title:"Community Services",    desc:"Libraries, clinics, sports facilities and community centres for all.",      color:"#00FF84" },
];

export default function CommunityDev() {
  return (
    <section id="community" className="py-20 relative">
      <div className="absolute inset-0 section-overlay" />
      <div className="absolute inset-0 pointer-events-none"
           style={{ background:"radial-gradient(ellipse 60% 50% at 50% 100%,rgba(0,133,63,.1) 0%,transparent 70%)" }} />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        <motion.div
          initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.65 }}
          className="text-center mb-12">
          <p className="font-outfit font-bold text-white/40 uppercase tracking-[0.3em] mb-3"
             style={{ fontSize:"0.78rem" }}>Your Vote Shapes</p>
          <h2 className="font-outfit font-black text-white uppercase"
              style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>
            Community <span style={{ color:"#F7C600" }}>Development</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto mt-4" style={{ fontSize:"0.88rem", lineHeight:1.7 }}>
            Municipal elections determine who controls the services that directly affect your daily life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.55, delay: i*0.08 }}
              whileHover={{ y:-6, transition:{ duration:0.2 } }}
              className="p-6 rounded-[20px] cursor-default glass-dark"
              style={{ border:`1px solid ${color}22` }}>
              <div className="text-4xl mb-4">{icon}</div>
              <div className="w-8 h-0.5 rounded mb-4" style={{ background:color }} />
              <h3 className="font-outfit font-extrabold text-white uppercase tracking-wide mb-2"
                  style={{ fontSize:"0.95rem" }}>{title}</h3>
              <p className="text-white/45 leading-relaxed" style={{ fontSize:"0.78rem" }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
