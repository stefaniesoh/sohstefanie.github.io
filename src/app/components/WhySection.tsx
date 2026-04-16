import { Check, Star, Shield, RefreshCw, Clock } from "lucide-react";
import { WatercolorBlob, HandDrawnUnderline, HandDrawnStar } from "./HandDrawnElements";

const reasons = [
  {
    icon: <Star size={18} strokeWidth={1.5} />,
    title: "I think like your customer, not just a designer",
    desc: "Every decision — from your bio to your website — is made with your ideal client's perspective in mind.",
  },
  {
    icon: <Check size={18} strokeWidth={1.5} />,
    title: "Step-by-step clarity throughout",
    desc: "No guesswork. You'll always know what's being done, why, and what comes next.",
  },
  {
    icon: <Shield size={18} strokeWidth={1.5} />,
    title: "All-in-one: branding, marketing, web",
    desc: "Instead of hiring three different people who don't talk to each other, everything comes from one cohesive vision.",
  },
  {
    icon: <RefreshCw size={18} strokeWidth={1.5} />,
    title: "Flexible pricing — no big packages",
    desc: "Start where it makes sense for you. You don't have to commit to everything upfront.",
  },
  {
    icon: <Clock size={18} strokeWidth={1.5} />,
    title: "Built specifically for busy people",
    desc: "Light on your time. No lengthy revision cycles or complicated feedback processes.",
  },
];

const workingImage = "https://images.unsplash.com/photo-1550867788-8d7e72ea8c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG9zZSUyMHVwJTIwaGFuZHMlMjBsYXB0b3AlMjB3b3JraW5nJTIwbWluaW1hbHxlbnwxfHx8fDE3NzYwNjk3NzEzfDA&ixlib=rb-4.1.0&q=80&w=1080";

export function WhySection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Decorative blurred background shapes - now watercolor */}
      <div className="absolute top-0 right-0 w-[900px] h-[900px] pointer-events-none opacity-35">
        <WatercolorBlob color="#E8B852" className="w-full h-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left – text */}
          <div className="relative">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 border border-[#E8B852]/30 backdrop-blur-md mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C97D60]"></span>
              <p className="font-sans text-xs text-[#6B625B] tracking-[0.2em] uppercase font-semibold">
                Why work with me
              </p>
            </div>
            
            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] text-[#3A3632] leading-[1.2] font-medium tracking-tight mb-12">
              Not just another designer. <br />
              <span className="italic text-[#C97D60] relative inline-block">
                A thinking partner.
                {/* Hand-drawn underline */}
                <HandDrawnUnderline 
                  color="#C97D60" 
                  className="absolute -bottom-2 left-0 w-full h-4 opacity-50"
                />
              </span>
            </h2>

            <div className="flex flex-col gap-4 relative z-10">
              {reasons.map((r, i) => (
                <div
                  key={i}
                  className="group flex gap-5 items-start p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-[#C97D60]/15 shadow-[0_4px_24px_0_rgba(201,125,96,0.05)] hover:bg-white/55 hover:border-[#E8B852]/30 hover:shadow-[0_8px_32px_0_rgba(232,184,82,0.1)] transition-all duration-300"
                  style={{
                    borderRadius: i % 2 === 0 ? '20px 18px 19px 21px' : '19px 21px 18px 20px',
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center text-[#C97D60] border border-[#E8B852]/30 shadow-sm flex-shrink-0 group-hover:bg-[#C97D60] group-hover:text-white transition-colors duration-300"
                    style={{
                      borderRadius: '50% 48% 52% 49%',
                    }}
                  >
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="font-sans text-[1rem] text-[#3A3632] mb-2 font-medium tracking-wide">
                      {r.title}
                    </h3>
                    <p className="font-sans text-[0.9rem] text-[#5A504A] leading-[1.7] font-light">
                      {r.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – image + quote */}
          <div className="flex flex-col gap-8 relative mt-10 lg:mt-0">
            {/* Hand-drawn star accent */}
            <HandDrawnStar color="#E8B852" className="absolute -top-8 -right-4 w-16 h-16 opacity-30 z-10" />
            
            {/* Floating glass quote */}
            <div className="absolute -left-12 top-10 z-20 bg-white/80 backdrop-blur-2xl border border-[#E8B852]/30 rounded-[2rem] p-8 shadow-[0_20px_40px_-10px_rgba(232,184,82,0.25)] max-w-[280px] hidden md:block transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              style={{
                borderRadius: '34px 30px 32px 31px',
              }}
            >
              <p className="font-serif text-lg text-[#3A3632] font-medium italic leading-[1.4] mb-4">
                "You deserve a business that works for you — not one that only works when you're hustling 24/7."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#C97D60]" style={{ transform: 'rotate(-1deg)' }}></div>
                <p className="font-sans text-xs text-[#6B625B] tracking-widest uppercase font-semibold">
                  Soh, Founder
                </p>
              </div>
            </div>

            <div className="relative p-2 rounded-[40px] bg-white/30 backdrop-blur-md border border-[#C97D60]/20 shadow-[0_8px_32px_0_rgba(201,125,96,0.1)] transform rotate-2 hover:rotate-0 transition-transform duration-700"
              style={{
                borderRadius: '44px 38px 42px 40px',
              }}
            >
              <div className="rounded-[32px] overflow-hidden aspect-[3/4] relative"
                style={{
                  borderRadius: '36px 32px 34px 33px',
                }}
              >
                <img
                  src={workingImage}
                  alt="Working at laptop close up"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#C97D60]/20 to-transparent mix-blend-overlay"></div>
              </div>
            </div>

            {/* Mobile Quote Version */}
            <div className="md:hidden bg-white/70 backdrop-blur-xl border border-[#E8B852]/30 rounded-[2rem] p-8 shadow-[0_16px_40px_-10px_rgba(232,184,82,0.2)] relative -mt-16 mx-4 z-20"
              style={{
                borderRadius: '34px 30px 32px 31px',
              }}
            >
              <p className="font-serif text-lg text-[#3A3632] font-medium italic leading-[1.4] mb-4">
                "You deserve a business that works for you — not one that only works when you're hustling 24/7."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#C97D60]" style={{ transform: 'rotate(-1deg)' }}></div>
                <p className="font-sans text-xs text-[#6B625B] tracking-widest uppercase font-semibold">
                  Soh, Founder
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}