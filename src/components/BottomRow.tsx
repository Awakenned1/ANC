"use client";

import { motion } from "framer-motion";
import { Check, CreditCard, Search, UserPlus } from "lucide-react";

const checks = [
  "Check your voter registration status",
  "Update your residential address",
  "Register online before proclamation",
  "Locate your voting station",
];

/* ── Tiny ID document thumbnail ──────────────── */
function IdThumb({ type }: { type: "green" | "gold" | "white" }) {
  if (type === "green") return (
    <svg viewBox="0 0 48 32" className="w-[52px] h-[34px] flex-shrink-0 rounded" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="32" rx="3" fill="#1a5c2e"/>
      <rect x="3" y="3" width="14" height="17" rx="1.5" fill="#2d8a4e"/>
      <circle cx="10" cy="9" r="3.5" fill="#4ade80" opacity="0.55"/>
      <line x1="21" y1="9"  x2="44" y2="9"  stroke="#4ade80" strokeWidth="1.5" opacity="0.55"/>
      <line x1="21" y1="13" x2="36" y2="13" stroke="#4ade80" strokeWidth="1.5" opacity="0.45"/>
      <line x1="3"  y1="25" x2="45" y2="25" stroke="#4ade80" strokeWidth="1"   opacity="0.35"/>
    </svg>
  );
  if (type === "gold") return (
    <svg viewBox="0 0 48 32" className="w-[52px] h-[34px] flex-shrink-0 rounded" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="32" rx="3" fill="#2c5c1e"/>
      <rect x="3" y="3" width="12" height="16" rx="1.5" fill="#FFCC0040"/>
      <circle cx="9" cy="9"  r="3" fill="#FFCC00" opacity="0.55"/>
      <line x1="18" y1="8"  x2="44" y2="8"  stroke="#FFCC00" strokeWidth="1.5" opacity="0.55"/>
      <line x1="18" y1="12" x2="34" y2="12" stroke="#FFCC00" strokeWidth="1.5" opacity="0.45"/>
      <rect x="3"  y="22" width="8" height="5" rx="1" fill="#FFCC00" opacity="0.25"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 48 32" className="w-[52px] h-[34px] flex-shrink-0 rounded" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="32" rx="3" fill="#252525"/>
      <text x="3" y="7" fontSize="4" fill="white" opacity="0.5" fontFamily="sans-serif">REPUBLIC OF SOUTH AFRICA</text>
      <line x1="3" y1="10" x2="45" y2="10" stroke="white" strokeWidth="1" opacity="0.35"/>
      <line x1="3" y1="15" x2="45" y2="15" stroke="white" strokeWidth="1" opacity="0.35"/>
      <line x1="3" y1="20" x2="30" y2="20" stroke="white" strokeWidth="1" opacity="0.35"/>
    </svg>
  );
}

export default function BottomRow() {
  return (
    <section style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">

        {/* ── COL 1: BE ELECTION READY ─────────────── */}
        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}
          className="p-5"
          style={{ background: "#007A33" }}
        >
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
              <Check size={15} color="white" strokeWidth={3} />
            </div>
            <h3 className="font-outfit font-extrabold uppercase text-white tracking-widest" style={{ fontSize: "0.82rem" }}>
              BE ELECTION READY
            </h3>
          </div>
          <ul className="flex flex-col gap-2.5">
            {checks.map((c) => (
              <li key={c} className="flex items-center gap-2.5">
                <span className="w-[18px] h-[18px] flex items-center justify-center rounded-[3px] flex-shrink-0 text-white font-bold"
                      style={{ background: "rgba(255,255,255,0.25)", fontSize: "0.65rem" }}>
                  &#10003;
                </span>
                <span className="text-white font-outfit font-semibold" style={{ fontSize: "0.76rem" }}>{c}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── COL 2: REQUIRED IDENTIFICATION ──────── */}
        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.1 }}
          className="p-5"
          style={{ background: "#181818" }}
        >
          <div className="flex items-center gap-2.5 mb-4 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                 style={{ background: "rgba(255,204,0,0.15)", border: "1px solid rgba(255,204,0,0.3)" }}>
              <CreditCard size={14} color="#FFCC00" />
            </div>
            <h3 className="font-outfit font-extrabold uppercase tracking-widest" style={{ fontSize: "0.82rem", color: "#FFCC00" }}>
              REQUIRED IDENTIFICATION
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { thumb: "green" as const, label: "Green Barcoded ID Book" },
              { thumb: "gold"  as const, label: "South African Smart ID Card" },
              { thumb: "white" as const, label: "Temporary Identity Certificate" },
            ].map(({ thumb, label }) => (
              <div key={label} className="flex items-center gap-3">
                <IdThumb type={thumb} />
                <span className="font-outfit font-semibold text-white/75" style={{ fontSize: "0.76rem" }}>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── COL 3: ACTION BUTTONS + IEC ─────────── */}
        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.2 }}
          className="p-5 flex flex-col gap-3 justify-center"
          style={{ background: "#0d0d0d" }}
        >
          <a
            href="https://registertovote.elections.org.za/"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3.5 rounded-lg font-outfit font-extrabold uppercase text-white transition-all hover:brightness-110 hover:-translate-y-0.5"
            style={{ background: "#007A33", fontSize: "1rem", letterSpacing: "0.07em" }}
          >
            <UserPlus size={20} className="flex-shrink-0" />
            <span className="leading-tight">REGISTER<br/>TO VOTE ONLINE</span>
            <span className="ml-auto text-lg">&rsaquo;</span>
          </a>
          <div className="flex items-center gap-2 justify-center pt-1">
            <div className="px-3 py-1.5 rounded" style={{ background: "#003DA6" }}>
              <span className="font-outfit font-black text-white" style={{ fontSize: "1.1rem", letterSpacing: "0.12em" }}>IEC</span>
            </div>
            <span className="font-outfit font-bold text-white/45 uppercase" style={{ fontSize: "0.58rem", letterSpacing: "0.2em" }}>
              SOUTH AFRICA
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
