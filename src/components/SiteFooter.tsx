"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube, Calendar } from "lucide-react";

const quickLinks = ["About Us","News","Programmes","Gallery","Documents","Contact"];
const stats = [
  { num:"9",       lbl:"PROVINCES"       },
  { num:"257",     lbl:"MUNICIPALITIES"  },
  { num:"60 000+", lbl:"VOTING STATIONS" },
];
const socials = [
  { Icon:Facebook,  href:"#", bg:"#1877F2", border:"" },
  { Icon:Twitter,   href:"#", bg:"#111",    border:"1px solid rgba(255,255,255,.2)" },
  { Icon:Instagram, href:"#", bg:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)", border:"" },
  { Icon:Youtube,   href:"#", bg:"#FF0000", border:"" },
];

export default function SiteFooter() {
  return (
    <footer id="contact" style={{ position:"relative" }}>

      {/* Dark overlay over background image */}
      <div className="absolute inset-0"
           style={{ background:"rgba(0,0,0,.88)", backdropFilter:"blur(4px)", WebkitBackdropFilter:"blur(4px)" }} />

      <div className="relative z-10">
        {/* Main footer */}
        <div className="max-w-[1440px] mx-auto px-6 pt-14 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

            <div>
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 mb-4"
                   style={{ borderColor:"#F7C600", boxShadow:"0 0 16px rgba(247,198,0,.35)" }}>
                <img src="/hero-bg.png" alt="ANC Logo" className="w-full h-full object-cover" />
              </div>
              <p className="font-outfit font-black text-white/65 uppercase tracking-widest"
                 style={{ fontSize:"0.72rem" }}>TOLOMANE MNYAYIZA</p>
              <p className="font-outfit font-black uppercase tracking-widest mb-3"
                 style={{ fontSize:"1.3rem", color:"#F7C600" }}>REGION</p>
              <p className="text-white/28 leading-relaxed max-w-xs" style={{ fontSize:"0.75rem" }}>
                Together building stronger, more prosperous communities. Unity &bull; Service &bull; Progress.
              </p>
            </div>

            <div>
              <p className="font-outfit font-bold text-white/40 uppercase tracking-widest mb-4"
                 style={{ fontSize:"0.68rem" }}>Quick Links</p>
              <ul className="flex flex-col gap-2.5">
                {quickLinks.map((l) => (
                  <li key={l}>
                    <a href="#" className="font-outfit text-white/45 hover:text-white transition-colors"
                       style={{ fontSize:"0.85rem" }}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-outfit font-bold text-white/40 uppercase tracking-widest mb-4"
                 style={{ fontSize:"0.68rem" }}>Take Action</p>
              <div className="flex flex-col gap-3">
                <a href="https://registertovote.elections.org.za/"
                   target="_blank" rel="noopener noreferrer"
                   className="block text-center py-3 rounded-[20px] font-outfit font-extrabold uppercase tracking-wider text-white transition-all hover:scale-105"
                   style={{ background:"rgba(0,133,63,.85)", fontSize:"0.78rem",
                            border:"1px solid rgba(0,255,132,.22)", boxShadow:"0 0 14px rgba(0,255,132,.2)" }}>
                  Register to Vote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats + social strip */}
        <div style={{ borderTop:"1px solid rgba(255,255,255,.08)" }}>
          <div className="max-w-[1440px] mx-auto px-6 py-3">
            <div className="flex flex-wrap items-center justify-between gap-4">

              <motion.div
                initial={{ opacity:0 }} whileInView={{ opacity:1 }}
                viewport={{ once:true }} transition={{ duration:0.8 }}
                className="flex flex-col leading-none">
                <span className="font-dancing text-white" style={{ fontSize:"1.85rem" }}>Together</span>
                <span className="font-dancing text-white/40" style={{ fontSize:"0.95rem" }}>
                  We Build Better Communities
                </span>
              </motion.div>

              <div className="flex items-center">
                {stats.map((s, i) => (
                  <div key={s.lbl} className="flex items-center">
                    <div className="flex flex-col items-center px-4 text-center">
                      <span className="font-bebas text-white leading-none"
                            style={{ fontSize:"1.55rem", letterSpacing:"0.05em" }}>{s.num}</span>
                      <span className="font-outfit font-bold text-white/30 uppercase"
                            style={{ fontSize:"0.52rem", letterSpacing:"0.18em" }}>{s.lbl}</span>
                    </div>
                    {i < stats.length - 1 && (
                      <div className="w-px h-7 flex-shrink-0" style={{ background:"rgba(255,255,255,.1)" }} />
                    )}
                  </div>
                ))}
                <div className="w-px h-7 mx-0 flex-shrink-0" style={{ background:"rgba(255,255,255,.1)" }} />
                <div className="flex items-center gap-2 px-4">
                  <Calendar size={17} style={{ color:"#F7C600", flexShrink:0 }} />
                  <div className="flex flex-col">
                    <span className="font-outfit font-bold text-white/30 uppercase"
                          style={{ fontSize:"0.52rem", letterSpacing:"0.15em" }}>ELECTION DAY</span>
                    <span className="font-outfit font-extrabold"
                          style={{ fontSize:"0.7rem", color:"#F7C600" }}>4 NOVEMBER 2026</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                {socials.map(({ Icon, href, bg, border }, i) => (
                  <a key={i} href={href}
                     className="w-[34px] h-[34px] rounded-full flex items-center justify-center transition-all hover:scale-110"
                     style={{ background:bg, border:border||undefined }}>
                    <Icon size={14} color="white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 pb-4 text-center">
          <p className="font-outfit text-white/18" style={{ fontSize:"0.65rem" }}>
            &copy; 2026 African National Congress &mdash; Tolomane Mnyayiza Region. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
