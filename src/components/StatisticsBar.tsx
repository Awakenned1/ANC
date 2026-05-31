"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, CheckSquare, Mic2 } from "lucide-react";

const stats = [
  { Icon: MapPin,       num: "9",       label: "Provinces"      },
  { Icon: Building2,    num: "257",     label: "Municipalities" },
  { Icon: CheckSquare,  num: "60 000+", label: "Voting Stations" },
  { Icon: Mic2,         num: "1",       label: "Voice Nation"   },
];

export default function StatisticsBar() {
  return (
    <section
      className="py-16"
      style={{
        background: "#050505",
        borderTop:  "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map(({ Icon, num, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <Icon size={26} style={{ color: "#FFC107" }} />
              <span
                className="font-montserrat font-black leading-none"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "white" }}
              >
                {num}
              </span>
              <span className="text-white/40 text-[0.65rem] font-bold tracking-[0.25em] uppercase">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
