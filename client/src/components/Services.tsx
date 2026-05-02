/**
 * Services Section — Dr. Chen Medicine
 * Style: 3-column card grid on cream background
 * Content: aobenz SINPIN Radiance Essence (real product), Vitamin C Brightening, Free Skin Consultation
 * Design: Hover lift effect, real product image, elegant typography
 * Brand: aobenz — white/red/blue clinical aesthetic
 */

import { motion } from "framer-motion";
import { ArrowRight, Truck, ShieldCheck, MessageCircle } from "lucide-react";

const AOBENZ_PRODUCT_IMG = "/manus-storage/aobenz_product_45ae952f.jpg";
const SKIN_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663621481017/EaPJQiiDCiBxVQ5Gm69qgh/skin_texture_bg-gcbJSZZ9izRxLrCofGM83x.webp";

const services = [
  {
    id: 1,
    tag: "Best Seller",
    title: "aobenz SINPIN Radiance Essence",
    subtitle: "Brightening & Freckle Removal",
    description:
      "The aobenz SINPIN Light Spot Essence (40ml) targets dark spots, freckles, and uneven skin tone. Formulated with multiple antioxidant properties to illuminate and reveal translucent, even skin. Visible results in as few as 5 uses.",
    image: AOBENZ_PRODUCT_IMG,
    features: ["Light Spot Formula", "Even Skin Tone", "Antioxidant Properties", "Illuminate Skin"],
    cta: "Order via WhatsApp",
    badge: "70% Off Today",
    bgColor: "#f7f9fc",
    accentColor: "#c0392b",
  },
  {
    id: 2,
    tag: "Natural Formula",
    title: "Vitamin C Brightening Complex",
    subtitle: "Harness the power of nature",
    description:
      "Supercharge your brightening results with our Vitamin C booster — designed to complement the aobenz SINPIN Essence. Brightens complexion, reduces freckles, and evens skin tone with consistent daily use.",
    image: null,
    features: ["Natural ingredients", "Brightens complexion", "Reduces freckles"],
    cta: "Learn More",
    badge: null,
    bgColor: "#f5f8f5",
    accentColor: "#8fa89a",
  },
  {
    id: 3,
    tag: "Free Service",
    title: "Professional Skin Analysis",
    subtitle: "Personalized consultation",
    description:
      "Not sure which product is right for you? Send Dr. Chen a clear close-up photo and receive a professional skin assessment. Understand your pigmentation type before choosing a treatment.",
    image: null,
    features: ["100% Free", "Expert advice", "WhatsApp response"],
    cta: "Send Your Photo",
    badge: "Free",
    bgColor: "#f8f5f8",
    accentColor: "#c9a96e",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#8b5e52]" />
            <span className="font-body text-xs tracking-[0.2em] uppercase text-[#8b5e52] font-medium">
              Our Products
            </span>
            <div className="w-10 h-px bg-[#8b5e52]" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-[#2a2420] leading-tight">
            Treatments &amp;
            <span className="italic text-[#8b5e52]"> Solutions</span>
          </h2>
          <p className="font-body text-base text-[#2a2420]/60 mt-4 max-w-xl mx-auto">
            From targeted spot treatments to personalized consultations — 
            every solution is backed by science and tailored to your skin.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-[#f0e8e0]"
            >
              {/* Card top image/color area */}
              <div
                className="relative h-64 overflow-hidden"
                style={{ backgroundColor: service.bgColor }}
              >
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700 p-4"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      backgroundImage: `url(${SKIN_BG})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: service.accentColor + "30" }}>
                      {service.id === 2 ? (
                        <span className="text-4xl">🌿</span>
                      ) : (
                        <span className="text-4xl">💬</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Badge */}
                {service.badge && (
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-body font-semibold text-white"
                    style={{ backgroundColor: service.accentColor }}
                  >
                    {service.badge}
                  </div>
                )}

                {/* Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-body font-medium bg-white/90 backdrop-blur-sm"
                  style={{ color: service.accentColor }}>
                  {service.tag}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="font-body text-xs tracking-wider uppercase mb-2"
                  style={{ color: service.accentColor }}>
                  {service.subtitle}
                </div>
                <h3 className="font-display text-xl font-semibold text-[#2a2420] mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-[#2a2420]/60 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-body font-medium"
                      style={{
                        backgroundColor: service.accentColor + "15",
                        color: service.accentColor,
                      }}
                    >
                      <span className="w-1 h-1 rounded-full inline-block"
                        style={{ backgroundColor: service.accentColor }} />
                      {feat}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/16267480352"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-5 py-3 rounded-xl font-body text-sm font-medium transition-all duration-300 group/btn"
                  style={{
                    backgroundColor: service.accentColor + "15",
                    color: service.accentColor,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = service.accentColor;
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = service.accentColor + "15";
                    (e.currentTarget as HTMLElement).style.color = service.accentColor;
                  }}
                >
                  <span>{service.cta}</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {[
            { icon: <ShieldCheck className="w-5 h-5" />, label: "FDA Certified Products" },
            { icon: <Truck className="w-5 h-5" />, label: "Free Same-Day Shipping" },
            { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp Support" },
          ].map((badge) => (
            <div key={badge.label} className="flex flex-col items-center gap-2 text-center">
              <div className="w-10 h-10 rounded-full bg-[#f5f0ea] flex items-center justify-center text-[#8b5e52]">
                {badge.icon}
              </div>
              <span className="font-body text-xs text-[#2a2420]/60">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
