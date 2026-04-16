import { WatercolorBlob, HandDrawnCircle, BrushStroke } from "./HandDrawnElements";

const pillars = [
  {
    number: "01",
    title: "Clear positioning",
    desc: "Know exactly who you serve, what problem you solve, and why clients choose you over anyone else.",
  },
  {
    number: "02",
    title: "Simple messaging",
    desc: "Words that speak directly to your ideal client — no jargon, no hard sell. Just clarity that builds trust.",
  },
  {
    number: "03",
    title: "Low-effort system",
    desc: "A repeatable, sustainable process that generates leads without demanding hours of your time each week.",
  },
];

const coffeeImage = "https://images.unsplash.com/photo-1737458473627-6817940519d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBtb3JuaW5nJTIwY2FsbSUyMGRlc2slMjBuYXR1cmFsJTIwbGlnaHR8ZW58MXx8fHwxNzc2MDY5Nzc4fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function ReframeSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Abstract warm blobs - now watercolor */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] pointer-events-none opacity-35">
        <WatercolorBlob color="#E8B852" className="w-full h-full" />
      </div>
      <div className="absolute -bottom-40 -left-20 w-[600px] h-[600px] pointer-events-none opacity-25">
        <WatercolorBlob color="#C97D60" className="w-full h-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left – Image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative p-3 rounded-[32px] bg-white/30 backdrop-blur-md border border-[#C97D60]/20 shadow-[0_8px_32px_0_rgba(201,125,96,0.1)] transform -rotate-1 hover:rotate-1 transition-transform duration-700 z-10"
              style={{
                borderRadius: '36px 30px 34px 32px',
              }}
            >
              <div className="rounded-[24px] overflow-hidden aspect-[4/5] relative"
                style={{
                  borderRadius: '28px 24px 26px 25px',
                }}
              >
                <img
                  src={coffeeImage}
                  alt="Calm working moment with coffee"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#C97D60]/15 via-transparent to-[#FBF6F0]/20 mix-blend-overlay"></div>
              </div>
            </div>
            
            {/* Floating glass element overlapping image */}
            <div className="absolute top-1/4 -right-8 lg:-right-12 bg-white/70 backdrop-blur-2xl border border-[#E8B852]/30 rounded-2xl p-5 shadow-[0_16px_40px_-10px_rgba(232,184,82,0.25)] max-w-[200px] z-20"
              style={{
                borderRadius: '18px 16px 17px 19px',
              }}
            >
              <div className="flex gap-2 mb-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C97D60]"
                    style={{
                      borderRadius: i === 1 ? '50% 48%' : i === 2 ? '52% 48%' : '49% 51%',
                    }}
                  ></div>
                ))}
              </div>
              <p className="font-serif text-sm text-[#3A3632] italic">
                Focus on what moves the needle.
              </p>
            </div>
            
            {/* Hand-drawn circle accent */}
            <HandDrawnCircle color="#E8B852" className="absolute -bottom-8 -left-8 w-24 h-24 opacity-30" />
          </div>

          {/* Right – Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 border border-[#E8B852]/30 backdrop-blur-md mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C97D60]"></span>
              <p className="font-sans text-xs text-[#6B625B] tracking-[0.2em] uppercase font-semibold">
                The Reframe
              </p>
            </div>

            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] text-[#3A3632] leading-[1.15] font-medium tracking-tight mb-4">
              It's not that marketing doesn't work.
            </h2>

            <div className="relative inline-block mb-6">
              <p className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] text-[#C97D60] leading-[1.3] font-medium italic">
                You just don't have a system that fits your life.
              </p>
              {/* Hand-drawn underline accent */}
              <div className="absolute -bottom-1 left-0 w-full h-3">
                <BrushStroke color="#C97D60" className="w-full h-6" />
              </div>
            </div>

            <p className="font-sans text-[1.05rem] text-[#5A504A] leading-relaxed mb-10 max-w-xl font-light">
              The problem isn't effort — it's the missing foundation. Without three essential ingredients, even the most consistent posting falls flat.
            </p>

            {/* Glass Pillars */}
            <div className="flex flex-col gap-4">
              {pillars.map((p, idx) => (
                <div
                  key={p.number}
                  className="group flex gap-6 items-start p-5 rounded-2xl bg-white/40 backdrop-blur-sm border border-[#C97D60]/15 shadow-[0_4px_20px_0_rgba(201,125,96,0.05)] hover:bg-white/55 hover:border-[#E8B852]/30 hover:shadow-[0_8px_30px_0_rgba(232,184,82,0.1)] transition-all duration-300 relative overflow-hidden"
                  style={{
                    borderRadius: idx === 0 ? '20px 18px 19px 21px' : idx === 1 ? '19px 21px 18px 20px' : '21px 19px 20px 18px',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  <span className="font-serif text-lg text-[#C97D60]/60 font-medium mt-0.5 group-hover:text-[#C97D60] transition-colors">
                    {p.number}
                  </span>
                  <div>
                    <h3 className="font-sans text-[0.95rem] text-[#3A3632] font-medium mb-1.5 tracking-wide">
                      {p.title}
                    </h3>
                    <p className="font-sans text-[0.9rem] text-[#6B625B] leading-[1.7] font-light">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}