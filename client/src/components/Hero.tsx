/**
 * Hero Section — Dr. Chen Medicine
 * Style: Full-viewport, clinic background, asymmetric layout
 * Left: Brand story text + CTA | Right: Doctor portrait floating
 * Design: Dark overlay on clinic bg, cream/white text, warm accents
 */

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663621481017/EaPJQiiDCiBxVQ5Gm69qgh/hero_bg-kBbxvrVBHaQ7TFabDcUyJ9.webp";
const DOCTOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663621481017/EaPJQiiDCiBxVQ5Gm69qgh/doctor_portrait-i6hnYNw6v6iZguCfuuvATc.webp";
const AOBENZ_PRODUCT_IMG = "/manus-storage/aobenz_product_45ae952f.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Gradient Overlay — dark left, lighter right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f0a]/85 via-[#2a1810]/70 to-[#2a1810]/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen">
            {/* Left: Brand Story */}
            <div className="flex flex-col justify-center pt-20 lg:pt-0">
              {/* Badge */}
              <motion.div
                custom={0.2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="inline-flex items-center gap-2 mb-6"
              >
                <div className="w-8 h-px bg-[#c9a96e]" />
                <span className="font-body text-xs tracking-[0.25em] uppercase text-[#c9a96e] font-medium">
                  Professional Skincare
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                custom={0.35}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="font-display text-5xl lg:text-7xl font-light text-white leading-[1.1] mb-4"
              >
                Reveal Your
                <br />
                <span className="italic font-medium text-[#e8d5cc]">
                  Brightest Skin
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                custom={0.5}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="font-body text-base lg:text-lg text-white/80 leading-relaxed mb-8 max-w-md"
              >
                Introducing <strong className="text-[#e8d5cc]">aobenz SINPIN Radiance Essence</strong> — the professional brightening formula that targets dark spots, freckles, and uneven skin tone. Visible results in as few as 5 uses.
              </motion.p>

              {/* Stats Row */}
              <motion.div
                custom={0.6}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex items-center gap-8 mb-10"
              >
                {[
                  { value: "5", label: "Uses to see results" },
                  { value: "FDA", label: "Certified products" },
                  { value: "Free", label: "Shipping included" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-2xl lg:text-3xl font-semibold text-[#c9a96e]">
                      {stat.value}
                    </div>
                    <div className="font-body text-xs text-white/60 mt-1 leading-tight max-w-[80px]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                custom={0.75}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="https://wa.me/16267480352"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-body font-medium text-sm tracking-wide hover:bg-[#1da851] transition-all duration-300 hover:scale-105 whatsapp-pulse shadow-lg shadow-green-900/30"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Get Free Consultation
                </a>
                <button
                  onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
                  className="flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-4 rounded-full font-body font-medium text-sm tracking-wide hover:bg-white/10 transition-all duration-300"
                >
                  View Services
                </button>
              </motion.div>
            </div>

            {/* Right: Doctor Portrait + Product */}
            <div className="hidden lg:flex justify-end items-end h-screen pb-0 pr-0">
              <motion.div
                initial={{ opacity: 0, x: 60, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="relative"
              >
                {/* Doctor image */}
                <div className="relative w-[380px] xl:w-[440px]">
                  <img
                    src={DOCTOR_IMG}
                    alt="Dr. Chen — Professional Skincare Specialist"
                    className="w-full h-auto object-cover object-top"
                    style={{
                      maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 85%, transparent 100%)",
                      WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 85%, transparent 100%)",
                    }}
                  />
                  {/* Floating product card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="absolute top-24 -left-16 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-[#e8d5cc]/50 w-36"
                  >
                    <img src={AOBENZ_PRODUCT_IMG} alt="aobenz SINPIN" className="w-full h-24 object-contain rounded-lg" />
                    <div className="mt-2">
                      <div className="font-display text-xs font-bold text-[#c0392b]">aobenz</div>
                      <div className="font-body text-[10px] text-[#2a2420]/70 leading-tight">SINPIN Light Spot Essence</div>
                      <div className="mt-1 inline-block bg-[#c0392b] text-white text-[9px] font-body font-bold px-2 py-0.5 rounded-full">70% OFF</div>
                    </div>
                  </motion.div>

                  {/* Floating credential card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="absolute bottom-32 -left-12 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-[#e8d5cc]/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#8b5e52] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-display text-sm font-semibold">Dr</span>
                      </div>
                      <div>
                        <div className="font-display text-sm font-semibold text-[#2a2420]">Dr. Chen</div>
                        <div className="font-body text-xs text-[#8b5e52]">Skincare Specialist</div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-1">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-3 h-3 text-[#c9a96e]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="font-body text-xs text-[#8b5e52] ml-1">Trusted Expert</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
