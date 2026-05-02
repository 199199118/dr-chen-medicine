/**
 * Results Section — Dr. Chen Medicine
 * Style: Dark background, before/after comparison, social proof stats
 * Content: Treatment results from Facebook posts
 * Design: Full-width dark section with warm accent colors
 */

import { motion } from "framer-motion";

const SKIN_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663621481017/EaPJQiiDCiBxVQ5Gm69qgh/skin_texture_bg-gcbJSZZ9izRxLrCofGM83x.webp";

const results = [
  {
    id: 1,
    label: "Dark Spot Treatment",
    before: "Visible dark spots & hyperpigmentation",
    after: "Significantly lighter, more even tone",
    uses: "5 uses",
    emoji: "✨",
  },
  {
    id: 2,
    label: "Sun Damage Repair",
    before: "Sun-induced pigmentation & freckles",
    after: "Brighter complexion, reduced spots",
    uses: "7 uses",
    emoji: "☀️",
  },
  {
    id: 3,
    label: "Hormonal Pigmentation",
    before: "Melasma & hormonal dark patches",
    after: "Visibly faded patches, even tone",
    uses: "10 uses",
    emoji: "🌸",
  },
];

export default function Results() {
  return (
    <section id="results" className="py-24 lg:py-32 bg-[#2a2420] relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${SKIN_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#c9a96e]" />
            <span className="font-body text-xs tracking-[0.2em] uppercase text-[#c9a96e] font-medium">
              Real Results
            </span>
            <div className="w-10 h-px bg-[#c9a96e]" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-white leading-tight">
            Visible Transformation
            <br />
            <span className="italic text-[#c9a96e]">in Just Days</span>
          </h2>
          <p className="font-body text-base text-white/60 mt-4 max-w-xl mx-auto">
            Our clients see real, measurable improvements. Here's what consistent 
            use of Dr. Chen's formulations can achieve.
          </p>
        </motion.div>

        {/* Results Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {results.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#c9a96e]/40 transition-all duration-300"
            >
              {/* Before/After Visual */}
              <div className="grid grid-cols-2 h-36 text-xs font-body">
                <div className="bg-[#1a0f0a] flex flex-col items-center justify-center p-4 border-r border-white/10">
                  <div className="w-12 h-12 rounded-full bg-[#3d2a22] flex items-center justify-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#6b4a3a] opacity-80" />
                  </div>
                  <span className="text-white/40 tracking-widest uppercase text-[10px]">Before</span>
                </div>
                <div className="bg-[#f5f0ea]/10 flex flex-col items-center justify-center p-4">
                  <div className="w-12 h-12 rounded-full bg-[#e8d5cc]/30 flex items-center justify-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#f5f0ea]/60" />
                  </div>
                  <span className="text-[#c9a96e] tracking-widest uppercase text-[10px]">After</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{result.emoji}</span>
                  <span className="font-body text-xs tracking-wider uppercase text-[#c9a96e]">
                    {result.label}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-white/30 font-body text-xs mt-0.5 flex-shrink-0">Before:</span>
                    <span className="font-body text-xs text-white/50">{result.before}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#c9a96e] font-body text-xs mt-0.5 flex-shrink-0">After:</span>
                    <span className="font-body text-xs text-white/80">{result.after}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 bg-[#c9a96e]/15 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                  <span className="font-body text-xs text-[#c9a96e] font-medium">Results in {result.uses}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/10"
        >
          {[
            { value: "3.4K+", label: "Video Views", sub: "Most popular reel" },
            { value: "5", label: "Uses Needed", sub: "To see results" },
            { value: "FDA", label: "Certified", sub: "All products" },
            { value: "Free", label: "Shipping", sub: "Same-day dispatch" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl lg:text-5xl font-light text-[#c9a96e] mb-1">
                {stat.value}
              </div>
              <div className="font-body text-sm font-semibold text-white mb-0.5">{stat.label}</div>
              <div className="font-body text-xs text-white/40">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
