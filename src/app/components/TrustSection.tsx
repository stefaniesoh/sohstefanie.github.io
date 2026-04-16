import { MessageCircle } from "lucide-react";
import { WatercolorTexture, HandDrawnStar, HandDrawnCircle } from "./HandDrawnElements";

const objections = [
  {
    thought: '"I don\'t have time for this."',
    response:
      "That's exactly why I'm here. My job is to take this off your plate. Your time investment is minimal — I handle the heavy lifting so you can stay focused on your clients.",
  },
  {
    thought: '"I tried this before and it didn\'t work."',
    response:
      "Most marketing attempts fail because they lack a foundation. We don't just create content — we build the strategy underneath it first. That's what makes the difference.",
  },
  {
    thought: '"I don\'t even know what I need."',
    response:
      "You're not expected to. We start with a simple conversation. From there, I can tell you exactly what would move the needle for your specific situation.",
  },
];

const journalImage = "https://images.unsplash.com/photo-1600783355836-71c1717faf25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjByZWFkaW5nJTIwcGxhbm5pbmclMjBqb3VybmFsJTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NzYwNjk3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function TrustSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glass gradient with watercolor */}
      <div className="absolute inset-0 pointer-events-none">
        <WatercolorTexture color="#E8B852" className="absolute top-0 left-0 w-full h-[500px] opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 border border-[#E8B852]/30 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C97D60]"></span>
            <p className="font-sans text-xs text-[#6B625B] tracking-[0.2em] uppercase font-semibold">
              Real thoughts, honest answers
            </p>
          </div>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] text-[#3A3632] leading-[1.2] font-medium tracking-tight">
            Whatever's holding you back — <br />
            <span className="italic text-[#C97D60]">let's talk through it.</span>
          </h2>
        </div>

        {/* Objections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24 relative">
          {objections.map((o, i) => (
            <div
              key={i}
              className="relative p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-[#C97D60]/15 shadow-[0_8px_32px_0_rgba(201,125,96,0.08)] hover:bg-white/55 hover:border-[#E8B852]/30 transition-all duration-500 group"
              style={{
                borderRadius: i === 0 ? '34px 30px 32px 31px' : i === 1 ? '31px 33px 30px 32px' : '32px 31px 34px 30px',
              }}
            >
              {/* Inner ambient glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#E8B852]/40 to-transparent rounded-tr-[2rem] rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Hand-drawn star accent */}
              {i === 0 && (
                <HandDrawnStar color="#E8B852" className="absolute -top-3 -right-3 w-10 h-10 opacity-40" />
              )}

              {/* Thought Box */}
              <div className="relative z-10 bg-white/60 backdrop-blur-md rounded-2xl p-5 mb-8 border-l-4 border-[#C97D60] shadow-[0_4px_16px_0_rgba(201,125,96,0.08)]"
                style={{
                  borderRadius: '18px 16px 17px 19px',
                  borderLeftWidth: '3px',
                  borderLeftStyle: 'solid',
                }}
              >
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border border-[#E8B852]/30 flex items-center justify-center text-[#C97D60] shadow-sm">
                  <MessageCircle size={14} strokeWidth={2} />
                </div>
                <p className="font-serif text-[1.05rem] text-[#3A3632] font-medium italic leading-[1.4]">
                  {o.thought}
                </p>
              </div>

              {/* Response */}
              <p className="relative z-10 font-sans text-[0.95rem] text-[#5A504A] leading-[1.8] font-light">
                {o.response}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Glass Container */}
        <div className="relative rounded-[2.5rem] bg-white/30 backdrop-blur-xl border border-[#C97D60]/20 shadow-[0_16px_60px_-15px_rgba(201,125,96,0.2)] overflow-hidden"
          style={{
            borderRadius: '42px 38px 40px 39px',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Image */}
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <img
                src={journalImage}
                alt="Thoughtful planning moment"
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20"></div>
              {/* Watercolor overlay on image */}
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
                <WatercolorTexture color="#E8B852" className="w-full h-full" />
              </div>
            </div>

            {/* Right Content */}
            <div className="relative p-10 sm:p-14 lg:p-16 flex flex-col justify-center bg-white/50 backdrop-blur-md">
              <div className="absolute -top-10 -left-10 text-[10rem] font-serif text-[#C97D60]/20 leading-none">
                "
              </div>
              
              {/* Hand-drawn circle accent behind quote */}
              <HandDrawnCircle color="#E8B852" className="absolute top-8 right-8 w-24 h-24 opacity-20" />
              
              <p className="relative z-10 font-serif text-[clamp(1.4rem,2.5vw,1.8rem)] text-[#3A3632] leading-[1.5] italic mb-10 font-medium">
                "Working with Soh was the first time my brand actually felt like me — and the leads started coming in within weeks."
              </p>
              
              <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-[#C97D60]/20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#C97D60] to-[#E8B852] flex items-center justify-center text-white shadow-md"
                  style={{
                    borderRadius: '50% 48% 51% 49%',
                  }}
                >
                  <span className="font-serif text-lg font-medium">A</span>
                </div>
                <div>
                  <p className="font-sans text-[0.95rem] text-[#3A3632] font-medium tracking-wide">
                    Amelia C.
                  </p>
                  <p className="font-sans text-[0.8rem] text-[#6B625B] tracking-wide uppercase font-medium mt-0.5">
                    Independent Financial Advisor
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}