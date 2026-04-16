import { HandDrawnArrow, WatercolorTexture, HandDrawnStar } from "./HandDrawnElements";

const steps = [
  {
    number: "01",
    title: "Understand your client",
    desc: "We start by getting crystal clear on who your ideal client is, what keeps them up at night, and why they would choose you.",
    detail: "Discovery call + client profile",
  },
  {
    number: "02",
    title: "Build your brand",
    desc: "Your positioning, voice, and visual identity — shaped to feel authentically you and powerfully attractive to the right people.",
    detail: "Brand foundation + messaging",
  },
  {
    number: "03",
    title: "Create attracting content",
    desc: "Simple, consistent content that builds trust, shows your expertise, and naturally draws clients to want to work with you.",
    detail: "Content strategy + templates",
  },
  {
    number: "04",
    title: "Set up your lead system",
    desc: "A low-maintenance system that keeps new clients coming in — so you're never starting from zero when things get quiet.",
    detail: "Lead flow + automation",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative py-32 overflow-hidden">
      {/* Background glass gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E8B852]/10 to-transparent mix-blend-multiply pointer-events-none"></div>
      
      {/* Watercolor texture background */}
      <div className="absolute top-20 left-0 w-full h-[400px] pointer-events-none opacity-50">
        <WatercolorTexture color="#C97D60" className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 right-0 w-full h-[400px] pointer-events-none opacity-40">
        <WatercolorTexture color="#E8B852" className="w-full h-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 border border-[#E8B852]/30 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C97D60] animate-pulse"></span>
            <p className="font-sans text-xs text-[#6B625B] tracking-[0.2em] uppercase font-semibold">
              The Process
            </p>
          </div>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] text-[#3A3632] leading-[1.2] font-medium tracking-tight">
            Four clear steps. A calmer, <span className="italic text-[#C97D60]">more confident business.</span>
          </h2>
        </div>

        {/* Staggered Glass Steps */}
        <div className="relative">
          {/* Connecting line for desktop - now hand-drawn style */}
          <div className="hidden lg:block absolute top-[50%] left-0 w-full h-[1px] -z-10">
            <svg className="w-full h-8 -mt-4" viewBox="0 0 1200 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path
                d="M2 10C200 8 400 12 600 10C800 8 1000 12 1198 10"
                stroke="#C97D60"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.4"
                style={{
                  filter: 'url(#roughenLine)',
                }}
              />
              <defs>
                <filter id="roughenLine">
                  <feTurbulence type="fractalNoise" baseFrequency="0.15" numOctaves="2" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                </filter>
              </defs>
            </svg>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative group p-8 rounded-3xl bg-white/50 backdrop-blur-xl border border-[#C97D60]/15 shadow-[0_8px_32px_0_rgba(201,125,96,0.08)] hover:bg-white/60 hover:border-[#E8B852]/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                  i % 2 !== 0 ? "lg:mt-16" : ""
                }`}
                style={{
                  borderRadius: i % 2 === 0 ? '26px 24px 25px 27px' : '24px 27px 26px 25px', // Irregular corners
                }}
              >
                {/* Decorative blob inside card */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#E8B852] to-transparent rounded-full blur-[40px] opacity-30 group-hover:opacity-50 group-hover:scale-125 transition-all duration-700"></div>
                
                {/* Hand-drawn star accent */}
                {i === 0 && (
                  <HandDrawnStar color="#E8B852" className="absolute top-4 right-4 w-8 h-8 opacity-40" />
                )}

                <div className="relative z-10">
                  <div className="font-serif text-[4rem] text-[#C97D60]/20 leading-none mb-6 font-medium group-hover:text-[#C97D60]/40 transition-colors duration-500">
                    {step.number}
                  </div>

                  <h3 className="font-serif text-[1.3rem] text-[#3A3632] mb-4 font-medium leading-[1.3] group-hover:text-[#C97D60] transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="font-sans text-[0.95rem] text-[#5A504A] leading-[1.7] mb-8 font-light min-h-[100px]">
                    {step.desc}
                  </p>

                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 border border-[#E8B852]/30 shadow-sm backdrop-blur-md"
                    style={{
                      borderRadius: '18px 16px 17px 19px',
                    }}
                  >
                    <p className="font-sans text-xs text-[#C97D60] tracking-wide font-medium">
                      {step.detail}
                    </p>
                  </div>
                </div>
                
                {/* Hand-drawn arrow connector for desktop between cards */}
                {i < 3 && (
                  <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 w-24 h-12 pointer-events-none">
                    <HandDrawnArrow color="#C97D60" className="w-full h-full opacity-50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}