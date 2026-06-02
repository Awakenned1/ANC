"use client";

import { motion } from "framer-motion";
import { Calendar, Vote, Info } from "lucide-react";

const cards = [
  {
    Icon: Calendar, iconBg: "#00853F", iconClr: "white",
    tag: "Voter Registration", date: "20 – 21 June 2026", time: "08:00 – 17:00", tagClr: "#00853F",
    desc: "All national voting stations open. Register as a new voter or update your residential address and voting station details.",
  },
  {
    Icon: Vote, iconBg: "#F7C600", iconClr: "#000",
    tag: "Election Day", date: "4 November 2026", time: "07:00 – 21:00", tagClr: "#F7C600",
    desc: "Vote at your registered station. Bring your South African Smart ID Card, Green Barcoded ID Book, or Temporary Identity Certificate.",
  },
  {
    Icon: Info, iconBg: "#00853F", iconClr: "white",
    tag: "Voter Information", date: "Register Before", time: "Proclamation Date", tagClr: "#00853F",
    desc: "If you move or change address you must re-register. Online registration is available at the IEC website at any time.",
  },
];

export default function ImportantDatesSection() {
  return (
    <section id="dates" className="py-20 relative">
      <div className="absolute inset-0 section-overlay-green" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        <motion.div
          initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.65 }}
          className="text-center mb-12">
          <p className="font-outfit font-bold text-white/40 uppercase tracking-[0.3em] mb-3"
             style={{ fontSize:"0.78rem" }}>Mark Your Calendar</p>
          <h2 className="font-outfit font-black text-white uppercase"
              style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>
            Important <span style={{ color:"#F7C600" }}>Dates</span>
          </h2>
        </motion.div>

        <div className="-mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-4 md:grid md:grid-cols-3 md:gap-6 overflow-x-auto md:overflow-visible py-2 snap-x snap-mandatory">
            {cards.map(({ Icon, iconBg, iconClr, tag, date, time, tagClr, desc }, i) => (
              <motion.div
                key={tag}
                initial={{ opacity:0, y:36 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.55, delay: i*0.08 }}
                whileHover={{ y:-6, transition:{ duration:0.18 } }}
                className="snap-start shrink-0 min-w-[84%] sm:min-w-[65%] md:min-w-0 md:w-auto"
              >
                <div
                  className="p-6 rounded-2xl cursor-default h-full"
                  style={{
                    background: "rgba(255,255,255,0.96)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    borderTop: `6px solid ${tagClr}`,
                    boxShadow: "0 10px 30px rgba(2,6,23,0.08)",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                           style={{ background: iconBg }}>
                        <Icon size={18} color={iconClr} />
                      </div>
                      <span className="font-outfit font-bold uppercase tracking-wide text-gray-500 text-xs">
                        {tag}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="font-outfit font-black text-gray-900 leading-none" style={{ fontSize: '1.25rem' }}>{date}</div>
                      <div className="font-outfit font-bold mt-1" style={{ fontSize: '0.78rem', color: tagClr }}>{time}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed" style={{ fontSize: '0.88rem' }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
