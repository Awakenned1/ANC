"use client";

import { motion } from "framer-motion";
import { Calendar, Phone, Send } from "lucide-react";

/* ── impact icon SVGs ─────────────────────────── */
function ImpactIcon({ type }: { type: string }) {
  const cls = "w-[22px] h-[22px] flex-shrink-0";
  switch (type) {
    case "water":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 2a6 6 0 0 1 0 12 6 6 0 0 1 0-12z"/><path d="M12 22v-8"/></svg>;
    case "house":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
    case "bolt":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
    case "trash":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>;
    case "road":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M3 12h18M3 6h18M3 18h18"/></svg>;
    case "people":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    default: return null;
  }
}

const impacts = [
  { icon: "water",  label: "Water Supply"          },
  { icon: "house",  label: "Housing"               },
  { icon: "bolt",   label: "Electricity"           },
  { icon: "trash",  label: "Waste Management"      },
  { icon: "road",   label: "Roads & Infrastructure"},
  { icon: "people", label: "Community Services"    },
];

const byElections = [
  { date: "10 JUNE 2026", province: "KwaZulu-Natal",          color: "#FFCC00" },
  { date: "17 JUNE 2026", province: "Eastern Cape",            color: "#60a5fa" },
  { date: "24 JUNE 2026", province: "Mpumalanga & North West", color: "#a855f7" },
];

/* ── SA Map SVG (simplified outline) ──────────── */
function SaMap() {
  return (
    <div className="flex justify-center my-2">
      <svg viewBox="0 0 220 200" className="w-[145px] h-auto">
        <path
          d="M40 30 L85 18 L130 16 L165 22 L190 38 L205 58 L210 80 L208 102 L200 122 L188 140 L172 157 L155 168 L140 175 L124 178 L108 175 L92 170 L78 162 L65 150 L52 135 L40 118 L32 100 L28 80 L30 60 Z"
          fill="rgba(0,122,51,0.35)"
          stroke="#007A33"
          strokeWidth="1.5"
        />
        <circle cx="175" cy="115" r="5" fill="#FFCC00" opacity="0.9"/>
        <circle cx="148" cy="150" r="5" fill="#60a5fa" opacity="0.9"/>
        <circle cx="120" cy="65"  r="5" fill="#a855f7" opacity="0.9"/>
      </svg>
    </div>
  );
}

/* ── Shared section animation wrapper ─────────── */
function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function InfoPanels() {
  return (
    <section style={{ background: "#111111", borderTop: "3px solid #007A33" }}>
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.07]">

        {/* ── PANEL 1: KEY TIMELINES ───────────────── */}
        <FadeIn>
          <div className="p-5">
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-4 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#007A33" }}>
                <Calendar size={15} color="white" />
              </div>
              <h2 className="font-outfit font-extrabold uppercase tracking-widest" style={{ fontSize: "0.82rem", color: "#FFCC00" }}>
                KEY TIMELINES
              </h2>
            </div>

            {/* Timeline item 1 */}
            <div className="flex gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                   style={{ background: "rgba(0,122,51,0.18)", border: "1px solid #007A33" }}>
                <Calendar size={14} color="#007A33" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="inline-block font-outfit font-bold uppercase px-2 py-0.5 rounded-full mb-1"
                      style={{ fontSize: "0.58rem", letterSpacing: "0.12em", background: "rgba(0,122,51,0.18)", color: "#4ade80", border: "1px solid rgba(0,122,51,0.3)" }}>
                  VOTER REGISTRATION WEEKEND
                </span>
                <span className="font-outfit font-extrabold" style={{ fontSize: "0.95rem", color: "#FFCC00" }}>20 &ndash; 21 JUNE 2026</span>
                <span className="font-outfit font-semibold" style={{ fontSize: "0.72rem", color: "#ccc" }}>08:00 AM &ndash; 05:00 PM</span>
                <p style={{ fontSize: "0.72rem", color: "#666", lineHeight: 1.5, marginTop: "0.2rem" }}>
                  All national voting stations will be open to register or update your details.
                </p>
              </div>
            </div>

            <div className="w-px h-4 ml-4 mb-3" style={{ background: "rgba(255,255,255,0.1)" }} />

            {/* Timeline item 2 */}
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                   style={{ background: "rgba(255,204,0,0.12)", border: "1px solid #FFCC00" }}>
                <Calendar size={14} color="#FFCC00" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="inline-block font-outfit font-bold uppercase px-2 py-0.5 rounded-full mb-1"
                      style={{ fontSize: "0.58rem", letterSpacing: "0.12em", background: "rgba(255,204,0,0.12)", color: "#FFCC00", border: "1px solid rgba(255,204,0,0.3)" }}>
                  ELECTION DAY
                </span>
                <span className="font-outfit font-extrabold" style={{ fontSize: "0.95rem", color: "#FFCC00" }}>4 NOVEMBER 2026</span>
                <span className="font-outfit font-semibold" style={{ fontSize: "0.72rem", color: "#ccc" }}>07:00 AM &ndash; 09:00 PM</span>
                <p style={{ fontSize: "0.72rem", color: "#666", lineHeight: 1.5, marginTop: "0.2rem" }}>
                  Voting stations across the country will be open.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── PANEL 2: WHAT ARE THESE ELECTIONS FOR? ── */}
        <FadeIn delay={0.1}>
          <div className="p-5">
            <div className="flex items-center gap-2.5 mb-4 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,204,0,0.15)", border: "1px solid rgba(255,204,0,0.3)" }}>
                <Phone size={14} color="#FFCC00" />
              </div>
              <h2 className="font-outfit font-extrabold uppercase tracking-widest leading-tight" style={{ fontSize: "0.82rem", color: "#FFCC00" }}>
                WHAT ARE THESE ELECTIONS FOR?
              </h2>
            </div>
            <p style={{ fontSize: "0.76rem", color: "#ccc", lineHeight: 1.65, marginBottom: "0.85rem" }}>
              Municipal elections happen every five years to elect local councils for all district,
              metropolitan, and local municipalities across South Africa&apos;s nine provinces.
            </p>
            <p className="font-outfit font-bold mb-3" style={{ fontSize: "0.76rem", color: "#FFCC00" }}>
              Your vote will directly impact:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {impacts.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2" style={{ color: "#bbb", fontSize: "0.72rem", fontWeight: 600 }}>
                  <span style={{ color: "#007A33" }}><ImpactIcon type={icon} /></span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ── PANEL 3: UPCOMING WARD BY-ELECTIONS ──── */}
        <FadeIn delay={0.2}>
          <div className="p-5">
            <div className="flex items-center gap-2.5 mb-4 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#007A33" }}>
                <Send size={14} color="white" />
              </div>
              <h2 className="font-outfit font-extrabold uppercase tracking-widest leading-tight" style={{ fontSize: "0.82rem", color: "#FFCC00" }}>
                UPCOMING WARD BY-ELECTIONS
              </h2>
            </div>
            <SaMap />
            <div className="flex flex-col gap-3 mt-1">
              {byElections.map((be) => (
                <div key={be.date} className="flex items-center gap-2.5">
                  <span style={{ color: be.color, fontSize: "1.1rem", lineHeight: 1, flexShrink: 0 }}>★</span>
                  <div>
                    <p className="font-outfit font-extrabold text-white" style={{ fontSize: "0.85rem" }}>{be.date}</p>
                    <p style={{ fontSize: "0.68rem", color: "#999" }}>{be.province}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
