"use client";

import { motion } from "framer-motion";
import { Heart, Star, Leaf, Users } from "lucide-react";

const cards = [
  {
    Icon:  Heart,
    title: "People First",
    desc:  "Our communities are at the heart of every decision. Every policy is designed with real people in mind.",
    color: "#FFC107",
  },
  {
    Icon:  Star,
    title: "Service Excellence",
    desc:  "Delivering quality services — water, electricity, roads, housing — with accountability and care.",
    color: "#00FF84",
  },
  {
    Icon:  Leaf,
    title: "Sustainable Development",
    desc:  "Building a greener, more prosperous future through responsible governance and long-term planning.",
    color: "#FFC107",
  },
  {
    Icon:  Users,
    title: "Strong Communities",
    desc:  "United communities lead to united progress — safety, shared prosperity, and collective growth.",
    color: "#00FF84",
  },
];

export default function FeatureCards() {
  return (
    <section
      id="about"
      className="py-20"
      style={{ background: "linear-gradient(180deg, #050505 0%, #0a0f0a 100%)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-3">
            What We Stand For
          </p>
          <h2
            className="font-montserrat font-extrabold uppercase tracking-wide"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "white" }}
          >
            Our Core <span style={{ color: "#FFC107" }}>Values</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map(({ Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-[20px] cursor-default"
              style={{
                background: "rgba(0,0,0,0.75)",
                border: "1px solid rgba(255,193,7,.35)",
                boxShadow: "0 4px 40px rgba(0,0,0,0.5)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `${color}18`,
                  border: `1px solid ${color}40`,
                }}
              >
                <Icon size={22} style={{ color }} />
              </div>
              <h3
                className="font-montserrat font-extrabold uppercase tracking-wide mb-2 text-white"
                style={{ fontSize: "0.95rem" }}
              >
                {title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
