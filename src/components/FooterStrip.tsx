"use client";

import { motion } from "framer-motion";
import { Calendar, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const stats = [
  { num: "9",       lbl: "PROVINCES"      },
  { num: "257",     lbl: "MUNICIPALITIES" },
  { num: "60 000+", lbl: "VOTING STATIONS"},
];

export default function FooterStrip() {
  return (
    <footer style={{ background: "#000000", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1280px] mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-4">

          {/* Cursive slogan */}
          <motion.div
            initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ duration:0.8 }}
            className="flex flex-col leading-tight"
          >
            <span className="font-dancing text-white" style={{ fontSize: "1.8rem" }}>Together</span>
            <span className="font-dancing" style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)" }}>
              We Build Better Communities
            </span>
          </motion.div>

          {/* Stats */}
          <div className="flex items-center gap-0">
            {stats.map((s, i) => (
              <div key={s.lbl} className="flex items-center">
                <div className="flex flex-col items-center px-4 text-center">
                  <span className="font-bebas text-white leading-none" style={{ fontSize: "1.6rem", letterSpacing: "0.05em" }}>
                    {s.num}
                  </span>
                  <span className="font-outfit font-bold uppercase text-white/40" style={{ fontSize: "0.54rem", letterSpacing: "0.18em" }}>
                    {s.lbl}
                  </span>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-8 flex-shrink-0" style={{ background: "rgba(255,255,255,0.1)" }} />
                )}
              </div>
            ))}
            <div className="w-px h-8 flex-shrink-0 mx-0" style={{ background: "rgba(255,255,255,0.1)" }} />
            <div className="flex items-center gap-2 px-4">
              <Calendar size={18} style={{ color: "#FFCC00", flexShrink: 0 }} />
              <div className="flex flex-col">
                <span className="font-outfit font-bold uppercase text-white/40" style={{ fontSize: "0.54rem", letterSpacing: "0.15em" }}>
                  ELECTION DAY
                </span>
                <span className="font-outfit font-extrabold" style={{ fontSize: "0.72rem", color: "#FFCC00" }}>
                  4 NOVEMBER 2026
                </span>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-1.5">
            {[
              { Icon: Facebook,  href: "#", bg: "#1877F2",       border: ""                         },
              { Icon: Twitter,   href: "#", bg: "#111111",       border: "1px solid rgba(255,255,255,0.2)" },
              { Icon: Instagram, href: "#", bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)", border: "" },
              { Icon: Youtube,   href: "#", bg: "#FF0000",       border: ""                         },
            ].map(({ Icon, href, bg, border }, i) => (
              <a
                key={i}
                href={href}
                className="w-[34px] h-[34px] rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ background: bg, border: border || undefined }}
              >
                <Icon size={14} color="white" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
