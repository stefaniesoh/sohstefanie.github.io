import { HandDrawnCircle, WatercolorBlob, HandDrawnDivider } from "./HandDrawnElements";

const services = [
  {
    category: "Brand Foundation",
    tagline: "Know who you are. Show up with confidence.",
    items: [
      "Brand positioning & messaging",
      "Visual identity (logo, palette, typography)",
      "Brand voice & tone guide",
      "Client persona definition",
      "Bio & profile copy",
    ],
    note: "Start here if you're unsure how to present yourself.",
  },
  {
    category: "Content & Social Media",
    tagline: "Stay visible without burning out.",
    items: [
      "Content strategy & calendar",
      "Caption writing & templates",
      "LinkedIn / Instagram presence",
      "Storytelling & thought leadership",
      "Monthly content direction",
    ],
    note: "Ideal if you're posting but not getting results.",
  },
  {
    category: "Website & Lead System",
    tagline: "Your digital home that works while you sleep.",
    items: [
      "Landing page / website design",
      "Lead magnet creation",
      "Email sequence setup",
      "Contact & booking flow",
      "Ongoing optimisation",
    ],
    note: "Best when you want a complete lead generation system.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Dynamic background - now with watercolor blobs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] pointer-events-none">
        <WatercolorBlob color="#C97D60" className="w-full h-full opacity-30" />
      </div>
      <div className="absolute bottom-0 right-10 w-[600px] h-[600px] pointer-events-none">
        <WatercolorBlob color="#E8B852" className="w-full h-full opacity-35" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 border border-[#E8B852]/30 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C97D60] animate-pulse"></span>
            <p className="font-sans text-xs text-[#6B625B] tracking-[0.2em] uppercase font-semibold">
              Services
            </p>
          </div>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] text-[#3A3632] leading-[1.2] font-medium tracking-tight max-w-xl mx-auto mb-4">
            Everything you need — <br />
            <span className="italic text-[#C97D60]">nothing you don't.</span>
          </h2>
          <p className="font-sans text-[0.95rem] text-[#5A504A] leading-relaxed max-w-md mx-auto font-light">
            Mix and match based on where you are right now. Start small, add as you grow.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative flex flex-col p-8 rounded-3xl bg-white/40 backdrop-blur-xl border border-[#C97D60]/15 shadow-[0_8px_32px_0_rgba(201,125,96,0.08)] hover:bg-white/55 hover:border-[#E8B852]/30 hover:shadow-[0_16px_40px_0_rgba(232,184,82,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              style={{
                borderRadius: i === 0 ? '28px 25px 27px 26px' : i === 1 ? '26px 28px 25px 27px' : '27px 26px 28px 25px',
              }}
            >
              {/* Inner card glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E8B852]/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Hand-drawn circle accent */}
              {i === 1 && (
                <HandDrawnCircle color="#E8B852" className="absolute top-2 right-2 w-16 h-16 opacity-30" />
              )}

              <p className="font-sans text-[0.7rem] text-[#C97D60] tracking-[0.15em] uppercase font-semibold mb-4">
                {s.category}
              </p>

              <h3 className="font-serif text-[1.25rem] text-[#3A3632] leading-[1.3] font-medium mb-6">
                {s.tagline}
              </h3>

              {/* Divider - hand-drawn style */}
              <div className="w-full h-2 mb-6">
                <HandDrawnDivider color="#C97D60" className="w-full h-full" />
              </div>

              {/* Items list */}
              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-[#C97D60] text-[0.7rem] pt-1.5 flex-shrink-0">▸</span>
                    <span className="font-sans text-[0.9rem] text-[#5A504A] leading-[1.6] font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Note / Tag */}
              <div className="mt-auto bg-white/50 border border-[#E8B852]/25 backdrop-blur-sm rounded-xl p-4 transition-colors group-hover:bg-white/70"
                style={{
                  borderRadius: '14px 12px 13px 15px',
                }}
              >
                <p className="font-serif text-[0.85rem] text-[#C97D60] leading-[1.5] italic">
                  "{s.note}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA / Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-4 px-6 rounded-2xl bg-white/30 backdrop-blur-md border border-[#C97D60]/20 shadow-sm"
            style={{
              borderRadius: '18px 16px 17px 19px',
            }}
          >
            <p className="font-sans text-[0.9rem] text-[#6B625B] leading-[1.7] font-light">
              Not sure what you need? That's completely fine.{" "}
              <a
                href="#contact"
                className="text-[#3A3632] font-medium underline decoration-[#C97D60]/40 decoration-2 underline-offset-4 hover:decoration-[#C97D60] hover:text-[#C97D60] transition-all duration-300"
              >
                Let's figure it out together.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}