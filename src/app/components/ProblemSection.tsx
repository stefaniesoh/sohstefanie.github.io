import { WatercolorBlob, HandDrawnDivider, BrushStroke } from "./HandDrawnElements";

const problems = [
  {
    label: "No time for marketing",
    detail: "You're fully committed to your clients. Marketing falls to the bottom of the list — every single week.",
  },
  {
    label: "You don't know where to start",
    detail: "Instagram? LinkedIn? Website? Everyone says something different and it becomes paralyzing.",
  },
  {
    label: "You've tried posting, but nothing happened",
    detail: "You wrote captions, shared tips, maybe even ran an ad. But crickets. No leads, no traction.",
  },
  {
    label: "Your profile doesn't reflect your expertise",
    detail: "People land on your page and can't immediately see how good you really are at what you do.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-32 overflow-hidden">
      {/* Background decoration - now with watercolor */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] transform -translate-y-1/2 pointer-events-none">
        <WatercolorBlob color="#C97D60" className="w-full h-full opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-xl mb-20 text-center sm:text-left mx-auto sm:mx-0">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 border border-[#E8B852]/30 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C97D60] animate-pulse"></span>
            <p className="font-sans text-xs text-[#6B625B] tracking-[0.2em] uppercase font-semibold">
              Sound familiar?
            </p>
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#3A3632] leading-tight font-medium tracking-tight">
            You're great at your work. You just haven't cracked the marketing part — <span className="italic text-[#C97D60] block mt-1">yet.</span>
          </h2>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((p, i) => (
            <div
              key={i}
              className="group relative p-8 sm:p-10 rounded-3xl bg-white/50 backdrop-blur-xl border border-[#C97D60]/15 shadow-[0_8px_32px_0_rgba(201,125,96,0.08)] hover:bg-white/60 hover:border-[#E8B852]/30 transition-all duration-500 overflow-hidden"
              style={{
                borderRadius: i % 2 === 0 ? '28px 24px 26px 27px' : '25px 29px 24px 26px',
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E8B852]/20 to-transparent rounded-bl-[100px] opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="flex items-start gap-5 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white/70 border border-[#E8B852]/30 shadow-sm flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#E8B852]/20 group-hover:border-[#E8B852]/50 transition-colors duration-300"
                  style={{
                    borderRadius: '50% 48% 52% 49%', // Slightly irregular circle
                  }}
                >
                  <span className="font-serif text-[#C97D60] text-lg font-medium">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#3A3632] mb-3 font-medium tracking-tight group-hover:text-[#C97D60] transition-colors duration-300">
                    {p.label}
                  </h3>
                  <p className="font-sans text-[0.95rem] text-[#5A504A] leading-[1.8] font-light">
                    {p.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empathy line */}
        <div className="mt-20 text-center">
          <div className="inline-block p-6 px-10 rounded-2xl bg-white/40 backdrop-blur-md border border-[#E8B852]/30 shadow-[0_4px_24px_0_rgba(232,184,82,0.1)] transform hover:scale-[1.02] transition-transform duration-500 relative"
            style={{
              borderRadius: '18px 16px 19px 17px',
            }}
          >
            <p className="font-serif text-xl text-[#C97D60] italic leading-relaxed font-medium">
              "If any of this feels familiar — you're not behind. <br className="hidden sm:block"/> You just haven't had the right support."
            </p>
            {/* Hand-drawn underline accent */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-2">
              <BrushStroke color="#E8B852" className="w-full h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}