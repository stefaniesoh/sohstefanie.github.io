export function Footer() {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-[#3A3632] text-[#FBF6F0]">
      {/* Decorative gradient overlay inside footer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#2C2420] via-transparent to-[#C97D60]/20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-serif text-[#FBF6F0] text-xl font-medium tracking-tight">Soh</span>
              <div className="h-4 w-[1px] bg-white/20"></div>
              <span className="font-sans text-[#E8B852] text-xs font-semibold tracking-widest uppercase">
                Meaningful Design
              </span>
            </div>
            <p className="font-sans text-[0.95rem] text-[#E8DDD0] leading-relaxed max-w-sm font-light">
              Brand, marketing & web design for solopreneurs who want to grow without the overwhelm.
            </p>
          </div>

          <div className="md:col-span-2 lg:col-span-2 lg:col-start-7"></div>

          {/* Links */}
          <div className="md:col-span-2">
            <p className="font-sans text-xs text-[#E8B852] tracking-[0.15em] uppercase font-semibold mb-6">
              Navigate
            </p>
            <div className="flex flex-col gap-4">
              {["Services", "Process", "Why Me", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="font-sans text-[0.95rem] text-[#E8DDD0] hover:text-[#FBF6F0] hover:translate-x-1 transition-all duration-300 w-fit font-light"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="font-sans text-xs text-[#E8B852] tracking-[0.15em] uppercase font-semibold mb-6">
              Get in touch
            </p>
            <div className="flex flex-col gap-2 mb-8">
              <a href="mailto:hello@sohmeaningful.com" className="font-sans text-[0.95rem] text-[#E8DDD0] hover:text-[#FBF6F0] transition-colors font-light">
                hello@sohmeaningful.com
              </a>
              <div className="inline-flex items-center gap-2 mt-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8B852] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8B852]"></span>
                </span>
                <p className="font-sans text-[0.85rem] text-[#E8DDD0] font-light">
                  Available for new projects
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              {["LinkedIn", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/20 bg-white/5 font-sans text-[0.8rem] text-[#E8DDD0] hover:bg-white/10 hover:text-[#FBF6F0] hover:border-[#E8B852]/40 transition-all duration-300 backdrop-blur-sm tracking-wide"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[0.8rem] text-white/40 tracking-wide font-light">
            © 2026 Soh Meaningful Design. All rights reserved.
          </p>
          <p className="font-serif text-[0.85rem] text-white/40 italic">
            Designed with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}