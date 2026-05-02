/**
 * About Section — Dr. Chen Medicine
 * Style: Split layout — left text story, right doctor image with stats
 * Design: Warm cream background, serif typography, elegant dividers
 */

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const DOCTOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663621481017/EaPJQiiDCiBxVQ5Gm69qgh/doctor_portrait-i6hnYNw6v6iZguCfuuvATc.webp";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#f5f0ea]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Doctor Image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative background shape */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#e8d5cc] rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={DOCTOR_IMG}
                alt="Dr. Chen — Skincare Specialist"
                className="w-full h-[500px] lg:h-[600px] object-cover object-top"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a2420]/30 to-transparent" />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-4 lg:-right-8 bg-white rounded-2xl p-6 shadow-xl border border-[#e8d5cc]/50"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 500, suffix: "+", label: "Clients Helped" },
                  { value: 5, suffix: "★", label: "Star Service" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-3xl font-semibold text-[#8b5e52]">
                      <AnimatedNumber target={s.value} suffix={s.suffix} />
                    </div>
                    <div className="font-body text-xs text-[#8b5e52]/70 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Brand Story */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              {/* Section label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-[#8b5e52]" />
                <span className="font-body text-xs tracking-[0.2em] uppercase text-[#8b5e52] font-medium">
                  Our Story
                </span>
              </div>

              <h2 className="font-display text-4xl lg:text-5xl font-light text-[#2a2420] leading-tight mb-6">
                Science-Backed Care
                <br />
                <span className="italic text-[#8b5e52]">for Every Skin</span>
              </h2>

              <p className="font-body text-base text-[#2a2420]/70 leading-relaxed mb-6">
                Dark spots and uneven skin tone can come from many different causes — 
                sun exposure, hormonal changes, aging, or past skin irritation. 
                Before choosing a product, it's better to understand what type of 
                pigmentation it may be.
              </p>

              <p className="font-body text-base text-[#2a2420]/70 leading-relaxed mb-8">
                Dr. Chen Medicine was founded on the belief that everyone deserves 
                personalized, professional skincare guidance. We combine FDA-certified 
                formulations with the transformative power of Vitamin C and natural 
                botanicals to deliver real, visible results.
              </p>

              {/* Key points */}
              <div className="space-y-4 mb-10">
                {[
                  { icon: "🧪", title: "FDA Certified", desc: "All products meet rigorous safety and efficacy standards" },
                  { icon: "🌿", title: "Natural Ingredients", desc: "Vitamin C, botanicals, and skin-friendly actives" },
                  { icon: "📸", title: "Free Photo Analysis", desc: "Send a close-up photo for a professional skin assessment" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#e8d5cc] flex items-center justify-center flex-shrink-0 text-lg">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-body text-sm font-semibold text-[#2a2420] mb-0.5">{item.title}</div>
                      <div className="font-body text-sm text-[#2a2420]/60">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/message/DrChenMedicine"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#8b5e52] text-white px-8 py-4 rounded-full font-body font-medium text-sm tracking-wide hover:bg-[#7a5248] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#8b5e52]/30"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send Your Photo for Free Analysis
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
