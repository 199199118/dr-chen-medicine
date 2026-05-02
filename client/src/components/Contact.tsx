/**
 * Contact Section — Dr. Chen Medicine
 * Style: Split layout — left info panel, right form
 * Design: Warm cream background, elegant form inputs, WhatsApp primary CTA
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    concern: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    toast.success("Message sent! Dr. Chen will respond via WhatsApp shortly.");
    setForm({ name: "", email: "", concern: "", message: "" });
  };

  const concerns = [
    "Dark spots / Hyperpigmentation",
    "Uneven skin tone",
    "Freckles / Sun damage",
    "Hormonal pigmentation (Melasma)",
    "Post-acne marks",
    "General skin brightening",
    "Other",
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#8b5e52]" />
              <span className="font-body text-xs tracking-[0.2em] uppercase text-[#8b5e52] font-medium">
                Get In Touch
              </span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl font-light text-[#2a2420] leading-tight mb-6">
              Start Your
              <br />
              <span className="italic text-[#8b5e52]">Skin Journey</span>
            </h2>

            <p className="font-body text-base text-[#2a2420]/70 leading-relaxed mb-10">
              Have questions about your skin concerns? Want to know which product 
              is right for you? Dr. Chen is here to help with personalized, 
              professional guidance — completely free.
            </p>

            {/* Contact methods */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-body text-sm font-semibold text-[#2a2420] mb-0.5">WhatsApp (Preferred)</div>
                  <div className="font-body text-sm text-[#2a2420]/60">
                    Send a message or photo for instant consultation
                  </div>
                  <a
                    href="https://wa.me/16267480352"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#25D366] font-body text-sm font-medium mt-1 hover:underline"
                  >
                    <MessageCircle size={14} />
                    Chat Now
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8b5e52]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#8b5e52]" />
                </div>
                <div>
                  <div className="font-body text-sm font-semibold text-[#2a2420] mb-0.5">Email</div>
                  <div className="font-body text-sm text-[#2a2420]/60">
                    For detailed inquiries and product questions
                  </div>
                  <a
                    href="mailto:contact@drchenmed.com"
                    className="font-body text-sm text-[#8b5e52] font-medium mt-1 hover:underline block"
                  >
                    contact@drchenmed.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8fa89a]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#8fa89a]" />
                </div>
                <div>
                  <div className="font-body text-sm font-semibold text-[#2a2420] mb-0.5">Response Time</div>
                  <div className="font-body text-sm text-[#2a2420]/60">
                    WhatsApp: Within hours<br />
                    Email: Within 24 hours
                  </div>
                </div>
              </div>
            </div>

            {/* Facebook link */}
            <a
              href="https://www.facebook.com/people/Dr-Chen-Medicine/61570975984429/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-[#e8d5cc] text-[#2a2420]/70 font-body text-sm hover:border-[#8b5e52] hover:text-[#8b5e52] transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Follow on Facebook
            </a>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="bg-[#f5f0ea] rounded-3xl p-8 lg:p-10">
              <h3 className="font-display text-2xl font-semibold text-[#2a2420] mb-2">
                Send a Message
              </h3>
              <p className="font-body text-sm text-[#2a2420]/60 mb-8">
                Fill in the form below and Dr. Chen will get back to you via WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="font-body text-xs font-medium text-[#2a2420]/70 uppercase tracking-wider mb-2 block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8d5cc] font-body text-sm text-[#2a2420] placeholder-[#2a2420]/30 focus:outline-none focus:border-[#8b5e52] focus:ring-2 focus:ring-[#8b5e52]/10 transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-body text-xs font-medium text-[#2a2420]/70 uppercase tracking-wider mb-2 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8d5cc] font-body text-sm text-[#2a2420] placeholder-[#2a2420]/30 focus:outline-none focus:border-[#8b5e52] focus:ring-2 focus:ring-[#8b5e52]/10 transition-all duration-200"
                  />
                </div>

                {/* Skin Concern */}
                <div>
                  <label className="font-body text-xs font-medium text-[#2a2420]/70 uppercase tracking-wider mb-2 block">
                    Skin Concern
                  </label>
                  <select
                    name="concern"
                    value={form.concern}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8d5cc] font-body text-sm text-[#2a2420] focus:outline-none focus:border-[#8b5e52] focus:ring-2 focus:ring-[#8b5e52]/10 transition-all duration-200 appearance-none"
                  >
                    <option value="">Select your concern...</option>
                    {concerns.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="font-body text-xs font-medium text-[#2a2420]/70 uppercase tracking-wider mb-2 block">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your skin concern, how long you've had it, and any products you've tried..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8d5cc] font-body text-sm text-[#2a2420] placeholder-[#2a2420]/30 focus:outline-none focus:border-[#8b5e52] focus:ring-2 focus:ring-[#8b5e52]/10 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-3 bg-[#8b5e52] text-white px-8 py-4 rounded-xl font-body font-medium text-sm tracking-wide hover:bg-[#7a5248] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="font-body text-xs text-[#2a2420]/40 text-center">
                  Or contact directly via{" "}
                  <a
                    href="https://wa.me/16267480352"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline"
                  >
                    WhatsApp
                  </a>{" "}
                  for faster response
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
