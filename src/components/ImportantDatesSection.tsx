"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight, Info, Vote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const carousel = carouselRef.current;
    const card = carousel?.children.item(index) as HTMLElement | null;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateActiveIndex = () => {
      const cards = Array.from(carousel.children) as HTMLElement[];
      const scrollLeft = carousel.scrollLeft;
      const current = cards.reduce(
        (bestIndex, node, index) => {
          const distance = Math.abs(node.offsetLeft - scrollLeft);
          const bestDistance = Math.abs(cards[bestIndex]?.offsetLeft - scrollLeft);
          return distance < bestDistance ? index : bestIndex;
        },
        0,
      );
      setActiveIndex(current);
    };

    updateActiveIndex();
    carousel.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      carousel.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, []);

  return (
    <section id="dates" className="py-20 relative">
      <div className="absolute inset-0 section-overlay-green" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        <motion.div
          initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.65 }}
          className="text-center mb-8 md:mb-12">
          <p className="font-outfit font-bold text-white/40 uppercase tracking-[0.3em] mb-3"
             style={{ fontSize:"0.78rem" }}>Mark Your Calendar</p>
          <h2 className="font-outfit font-black text-white uppercase"
              style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>
            Important <span style={{ color:"#F7C600" }}>Dates</span>
          </h2>
        </motion.div>

        <div className="flex items-center justify-between gap-3 mb-4 md:mb-6">
          <p className="text-white/45 text-xs md:text-sm tracking-[0.2em] uppercase">
            Swipe or use the arrows to browse upcoming dates
          </p>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous date"
              onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed"
              disabled={activeIndex === 0}
              style={{ background: "rgba(0,0,0,.35)", border: "1px solid rgba(247,198,0,.18)" }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next date"
              onClick={() => scrollToIndex(Math.min(activeIndex + 1, cards.length - 1))}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed"
              disabled={activeIndex === cards.length - 1}
              style={{ background: "rgba(0,0,0,.35)", border: "1px solid rgba(247,198,0,.18)" }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="-mx-4 px-4 md:mx-0 md:px-0">
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto md:overflow-visible py-2 snap-x snap-mandatory scroll-smooth"
          >
            {cards.map(({ Icon, iconBg, iconClr, tag, date, time, tagClr, desc }, i) => (
              <motion.div
                key={tag}
                initial={{ opacity:0, y:36 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.55, delay: i*0.08 }}
                whileHover={{ y:-6, transition:{ duration:0.18 } }}
                className="snap-start shrink-0 min-w-[88%] sm:min-w-[72%] md:min-w-[55%] lg:min-w-[32%]"
              >
                <div
                  className="p-5 sm:p-6 rounded-2xl cursor-default h-full"
                  style={{
                    background: "rgba(255,255,255,0.96)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    borderTop: `6px solid ${tagClr}`,
                    boxShadow: "0 10px 30px rgba(2,6,23,0.08)",
                  }}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                           style={{ background: iconBg }}>
                        <Icon size={18} color={iconClr} />
                      </div>
                      <span className="font-outfit font-bold uppercase tracking-wide text-gray-500 text-xs leading-tight">
                        {tag}
                      </span>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="font-outfit font-black text-gray-900 leading-tight" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.25rem)' }}>{date}</div>
                      <div className="font-outfit font-bold mt-1" style={{ fontSize: '0.78rem', color: tagClr }}>{time}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed" style={{ fontSize: '0.88rem' }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-5 md:mt-6">
          {cards.map((card, index) => (
            <button
              key={card.tag}
              type="button"
              aria-label={`Go to ${card.tag}`}
              onClick={() => scrollToIndex(index)}
              className="h-2 rounded-full transition-all"
              style={{
                width: activeIndex === index ? "1.75rem" : "0.55rem",
                background: activeIndex === index ? "#F7C600" : "rgba(255,255,255,.28)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
