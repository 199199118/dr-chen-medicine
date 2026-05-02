/**
 * Testimonials Section — Dr. Chen Medicine
 * Style: Cream background, card grid with star ratings
 * Content: Simulated social proof based on Facebook engagement data
 * Design: Warm, trustworthy, elegant serif quotes
 */

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Amsterdam",
    rating: 5,
    text: "I've struggled with dark spots from sun damage for years. After just 5 uses of Dr. Chen's Anti-Spot Serum, I could already see a visible difference. My skin tone is so much more even now!",
    tag: "Anti-Spot Serum",
    avatar: "S",
    avatarColor: "#8b5e52",
  },
  {
    id: 2,
    name: "Priya K.",
    location: "Rotterdam",
    rating: 5,
    text: "Dr. Chen analyzed my skin photo and immediately identified my pigmentation type. The personalized advice was spot-on. The Vitamin C complex has transformed my complexion completely.",
    tag: "Free Consultation",
    avatar: "P",
    avatarColor: "#8fa89a",
  },
  {
    id: 3,
    name: "Maria L.",
    location: "Brussels",
    rating: 5,
    text: "I was skeptical at first, but the results speak for themselves. Hormonal pigmentation that I've had for 3 years is finally fading. Free shipping and same-day dispatch — what more could you ask for?",
    tag: "Hormonal Pigmentation",
    avatar: "M",
    avatarColor: "#c9a96e",
  },
  {
    id: 4,
    name: "Aisha B.",
    location: "Den Haag",
    rating: 5,
    text: "The free photo consultation is incredible. Dr. Chen took the time to explain exactly what was causing my dark spots and recommended the perfect treatment. Highly professional service!",
    tag: "Skin Analysis",
    avatar: "A",
    avatarColor: "#8b5e52",
  },
  {
    id: 5,
    name: "Linda V.",
    location: "Utrecht",
    rating: 5,
    text: "70% off promotion was amazing value. The serum arrived the same day I ordered — I couldn't believe it. After 2 weeks of nightly use, my freckles have visibly lightened. So happy!",
    tag: "Anti-Spot Serum",
    avatar: "L",
    avatarColor: "#8fa89a",
  },
  {
    id: 6,
    name: "Fatima R.",
    location: "Eindhoven",
    rating: 5,
    text: "I sent Dr. Chen a photo and within hours received a detailed, professional analysis. The product recommendation was perfect for my skin type. This is the kind of personalized care I've been looking for.",
    tag: "Free Consultation",
    avatar: "F",
    avatarColor: "#c9a96e",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "text-[#c9a96e]" : "text-[#e8d5cc]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#f5f0ea]">
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
              Client Stories
            </span>
            <div className="w-10 h-px bg-[#8b5e52]" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-[#2a2420] leading-tight">
            What Our Clients
            <span className="italic text-[#8b5e52]"> Are Saying</span>
          </h2>
          <p className="font-body text-base text-[#2a2420]/60 mt-4 max-w-xl mx-auto">
            Real experiences from real people who transformed their skin 
            with Dr. Chen Medicine's professional treatments.
          </p>

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#c9a96e]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-display text-2xl font-semibold text-[#2a2420]">5.0</span>
            <span className="font-body text-sm text-[#2a2420]/50">Trusted by hundreds of clients</span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#f0e8e0]"
            >
              {/* Quote mark */}
              <div className="font-display text-5xl text-[#e8d5cc] leading-none mb-3 -mt-2">"</div>

              {/* Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Text */}
              <p className="font-body text-sm text-[#2a2420]/70 leading-relaxed mt-3 mb-5">
                {testimonial.text}
              </p>

              {/* Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-medium mb-4"
                style={{
                  backgroundColor: testimonial.avatarColor + "15",
                  color: testimonial.avatarColor,
                }}>
                <span className="w-1 h-1 rounded-full inline-block" style={{ backgroundColor: testimonial.avatarColor }} />
                {testimonial.tag}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#f5f0ea]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-body font-semibold text-sm flex-shrink-0"
                  style={{ backgroundColor: testimonial.avatarColor }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-body text-sm font-semibold text-[#2a2420]">{testimonial.name}</div>
                  <div className="font-body text-xs text-[#2a2420]/50">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="font-body text-sm text-[#2a2420]/60 mb-4">
            Ready to start your skin transformation journey?
          </p>
          <a
            href="https://wa.me/16267480352"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-body font-medium text-sm tracking-wide hover:bg-[#1da851] transition-all duration-300 hover:scale-105 whatsapp-pulse shadow-lg shadow-green-900/20"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Join Our Happy Clients
          </a>
        </motion.div>
      </div>
    </section>
  );
}
