import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 sm:px-6">
      <div 
        className={`max-w-6xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full
          ${scrolled ? "py-3 px-6 md:px-8 bg-white/50 backdrop-blur-xl border border-[#C97D60]/20 shadow-[0_8px_32px_0_rgba(201,125,96,0.1)]" : "py-5 px-4 md:px-6 bg-transparent"}`}
        style={scrolled ? {
          borderRadius: '32px 30px 31px 33px', // Irregular when scrolled
        } : undefined}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-serif text-[#3A3632] text-xl font-medium tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Soh
          </span>
          <div className="h-4 w-[1px] bg-[#3A3632]/20 hidden sm:block"></div>
          <span className="hidden sm:inline font-sans text-[#6B625B] text-xs font-medium tracking-widest uppercase">
            Meaningful Design
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/30 backdrop-blur-md rounded-full px-2 py-1 border border-[#C97D60]/20"
          style={{
            borderRadius: '28px 26px 27px 29px',
          }}
        >
          {["Work", "Services", "Process", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-5 py-2 rounded-full font-sans text-sm text-[#5A504A] hover:bg-white/60 hover:text-[#3A3632] transition-all duration-300"
              style={{
                borderRadius: '20px 18px 19px 21px',
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-sans text-sm font-medium bg-[#C97D60] text-white hover:bg-[#B36B51] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-transparent shadow-[0_4px_14px_0_rgba(201,125,96,0.25)]"
            style={{
              borderRadius: '22px 20px 21px 23px',
            }}
          >
            Get in touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border border-[#C97D60]/20 text-[#3A3632]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            borderRadius: '50% 48% 52% 49%',
          }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden mt-4 mx-auto max-w-sm rounded-3xl bg-white/70 backdrop-blur-xl border border-[#C97D60]/20 shadow-[0_16px_40px_0_rgba(201,125,96,0.15)] p-4 overflow-hidden"
          style={{
            borderRadius: '28px 24px 26px 27px',
          }}
        >
          <div className="flex flex-col gap-1">
            {["Work", "Services", "Process", "Contact"].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 rounded-xl font-sans text-base text-[#5A504A] bg-white/50 hover:bg-white/80 active:bg-white/90 transition-all border border-transparent hover:border-[#E8B852]/30"
                style={{
                  borderRadius: i % 2 === 0 ? '16px 14px 15px 17px' : '15px 17px 14px 16px',
                }}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block mt-4 text-center px-6 py-4 rounded-xl font-sans text-base font-medium bg-[#C97D60] text-white shadow-md"
              style={{
                borderRadius: '18px 16px 17px 19px',
              }}
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}