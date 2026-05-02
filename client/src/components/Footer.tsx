/**
 * Footer — Dr. Chen Medicine
 * Style: Dark background, elegant minimal footer
 * Design: Brand info, quick links, social links
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2a2420] text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#8b5e52] flex items-center justify-center">
                <span className="text-white font-display text-sm font-semibold">Dr</span>
              </div>
              <span className="font-display text-lg font-semibold text-white">Dr. Chen Medicine</span>
            </div>
            <p className="font-body text-sm leading-relaxed text-white/50 mb-6">
              Powered by <strong className="text-white/70">aobenz SINPIN Radiance Essence</strong> — professional brightening formula for dark spots, freckles, and uneven skin tone. Real, visible results.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/people/Dr-Chen-Medicine/61570975984429/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8b5e52] transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/16267480352"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-white/40 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Dr. Chen", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Results", href: "#results" },
                { label: "Contact", href: "#contact" },
                { label: "Facebook Page", href: "https://www.facebook.com/people/Dr-Chen-Medicine/61570975984429/" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={link.href.startsWith("#") ? (e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    } : undefined}
                    className="font-body text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-white/40 mb-5">Products</h4>
            <ul className="space-y-3">
              {[
                "aobenz SINPIN Radiance Essence",
                "Vitamin C Brightening Complex",
                "Free Skin Consultation",
                "Photo Analysis Service",
              ].map((product) => (
                <li key={product}>
                  <a
                    href="https://wa.me/16267480352"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="font-body text-xs text-white/40 mb-2">Current Promotion</div>
              <div className="font-display text-2xl font-semibold text-[#c9a96e]">70% Off</div>
              <div className="font-body text-xs text-white/50">Limited time offer</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/30">
            © {currentYear} Dr. Chen Medicine. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
            <span className="font-body text-xs text-white/30">FDA Certified Products</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
            <span className="font-body text-xs text-white/30">Free Shipping</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
            <span className="font-body text-xs text-white/30">Same-Day Dispatch</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
