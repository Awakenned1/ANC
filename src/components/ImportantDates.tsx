"use client";

import { motion } from "framer-motion";
import { Calendar, Vote, MapPin } from "lucide-react";

const byElections = [
  { date: "10 June 2026",   province: "KwaZulu-Natal",          color: "#FFC107" },
  { date: "17 June 2026",   province: "Eastern Cape",            color: "#60a5fa" },
  { date: "24 June 2026",   province: "Mpumalanga & North West", color: "#a855f7" },
];

export default function ImportantDates() {
  return (
    <section
      id="dates"
      className="py-20"
      style={{ background: "linear-gradient(180deg, #050505 0%, #070f07 100%)" }}
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
            Mark Your Calendar
          </p>
          <h2
            className="font-montserrat font-extrabold uppercase tracking-wide"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "white" }}
          >
            Important <span style={{ color: "#FFC107" }}>Dates</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Registration Weekend */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="p-7 rounded-[20px] bg-white"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                   style={{ background: "#0E7A3D" }}>
                <Calendar size={18} color="white" />
              </div>
              <span className="text-[0.65rem] font-bold uppercase tracking-widest text-gray-400">
                Voter Registration Weekend
              </span>
            </div>
            <h3 className="font-montserrat font-extrabold text-gray-900 mb-1"
                style={{ fontSize: "1.4rem" }}>
              20 – 21 June 2026
            </h3>
            <p className="font-bold text-sm mb-4" style={{ color: "#0E7A3D" }}>
              08:00 – 17:00
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              All national voting stations will be open. Register as a new voter or update your
              residential address and voting station details.
            </p>
          </motion.div>

          {/* Election Day */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="p-7 rounded-[20px] bg-white"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                   style={{ background: "#FFC107" }}>
                <Vote size={18} color="#000" />
              </div>
              <span className="text-[0.65rem] font-bold uppercase tracking-widest text-gray-400">
                Election Day
              </span>
            </div>
            <h3 className="font-montserrat font-extrabold text-gray-900 mb-1"
                style={{ fontSize: "1.4rem" }}>
              4 November 2026
            </h3>
            <p className="font-bold text-sm mb-4" style={{ color: "#FFC107" }}>
              07:00 – 21:00
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Vote at your registered station. Bring your South African Smart ID Card, Green
              Barcoded ID Book, or Temporary Identity Certificate.
            </p>
          </motion.div>

          {/* Ward By-Elections */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="p-7 rounded-[20px] bg-white"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                   style={{ background: "#0E7A3D" }}>
                <MapPin size={18} color="white" />
              </div>
              <span className="text-[0.65rem] font-bold uppercase tracking-widest text-gray-400">
                Upcoming Ward By-Elections
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {byElections.map((be) => (
                <div key={be.date} className="flex items-center gap-3">
                  <span className="text-xl leading-none flex-shrink-0" style={{ color: be.color }}>
                    ★
                  </span>
                  <div>
                    <p className="font-montserrat font-extrabold text-gray-900 text-sm">
                      {be.date}
                    </p>
                    <p className="text-xs text-gray-400">{be.province}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
