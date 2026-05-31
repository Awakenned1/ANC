"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const socialLinks = [
  { Icon: Facebook,  href: "#", label: "Facebook",  bg: "#1877F2",  border: "" },
  { Icon: Twitter,   href: "#", label: "X/Twitter", bg: "#111111",  border: "rgba(255,255,255,0.15)" },
  { Icon: Instagram, href: "#", label: "Instagram", bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)", border: "" },
  { Icon: Youtube,   href: "#", label: "YouTube",   bg: "#FF0000",  border: "" },
];

const footerLinks = [
  { label: "About Us",     href: "#" },
  { label: "News",         href: "#" },
  { label: "Programmes",   href: "#" },
  { label: "Gallery",      href: "#" },
  { label: "Documents",    href: "#" },
  { label: "Contact",      href: "#" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{ background: "#000000", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-6">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <div
              className="w-16 h-16 rounded-full overflow-hidden border-2 mb-4"
              style={{ borderColor: "#FFC107", boxShadow: "0 0 16px rgba(255,193,7,0.35)" }}
            >
              <img src="/hero-bg.png" alt="ANC Logo" className="w-full h-full object-cover" />
            </div>
            <p className="text-white/70 text-xs font-bold tracking-widest uppercase mb-1">
              TOLOMANE MNYAYIZA
            </p>
            <p style={{ color: "#FFC107" }} className="text-lg font-black tracking-widest uppercase mb-3">
              REGION
            </p>
            <p className="text-white/35 text-xs leading-relaxed max-w-xs">
              Together building stronger, more prosperous communities across South Africa.
              Unity &bull; Service &bull; Progress
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-4">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Action */}
          <div>
            <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-4">
              Take Action
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://registertovote.elections.org.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2.5 rounded-[20px] text-xs font-bold uppercase tracking-wider text-white transition-all hover:scale-105"
                style={{ background: "#0E7A3D", boxShadow: "0 0 14px rgba(0,255,132,0.25)" }}
              >
                Register to Vote
              </a>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col leading-none"
          >
            <span
              className="font-greatvibes"
              style={{ fontSize: "1.9rem", color: "white" }}
            >
              Together
            </span>
            <span
              className="font-greatvibes"
              style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)" }}
            >
              We Build Better Communities
            </span>
          </motion.div>

          <p className="text-white/25 text-xs text-center">
            &copy; 2026 African National Congress &mdash; Tolomane Mnyayiza Region.
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-2">
            {socialLinks.map(({ Icon, href, label, bg, border }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: bg,
                  border: border ? `1px solid ${border}` : undefined,
                }}
              >
                <Icon size={15} color="white" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
