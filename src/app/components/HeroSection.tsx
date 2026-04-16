import { HandDrawnUnderline, WatercolorBlob, HandDrawnCircle, BrushStroke } from "./HandDrawnElements";

const heroImage = "https://images.unsplash.com/photo-1775480393107-666e3cd44ab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdvcmtpbmclMjBsYXB0b3AlMjBuYXR1cmFsJTIwbGlnaHQlMjB3YXJtJTIwY296eXxlbnwxfHx8fDE3NzYwNjk3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Watercolor background texture */}
      <div className="absolute top-20 left-0 w-[600px] h-[500px] pointer-events-none z-0">
        <WatercolorBlob color="#E8B852" className="w-full h-full opacity-40" />
      </div>
      <div className="absolute bottom-40 right-0 w-[500px] h-[400px] pointer-events-none z-0">
        <WatercolorBlob color="#C97D60" className="w-full h-full opacity-30" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left – Text */}
          <div className="lg:col-span-7 relative">
            <div className="p-8 sm:p-12 md:p-14 lg:p-16 rounded-[40px] bg-white/50 backdrop-blur-xl border border-[#C97D60]/20 shadow-[0_8px_32px_0_rgba(201,125,96,0.12)] relative z-20"
              style={{
                borderRadius: '42px 38px 40px 39px', // Slightly irregular corners
              }}
            >
              
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#FBF6F0]/80 border border-[#E8B852]/30 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-[#C97D60] animate-pulse"></span>
                <p className="font-sans text-[0.7rem] text-[#6B625B] tracking-widest uppercase font-semibold">
                  Freelance Brand & Marketing
                </p>
              </div>

              <h1 className="font-serif text-[clamp(2.5rem,5vw,4.2rem)] text-[#3A3632] leading-[1.1] font-medium mb-6 tracking-tight">
                You don't need more marketing.{" "}
                <span className="relative inline-block">
                  <em className="font-serif italic text-[#C97D60] block mt-2">
                    You need clients.
                  </em>
                  {/* Hand-drawn underline */}
                  <HandDrawnUnderline 
                    color="#C97D60" 
                    className="absolute -bottom-2 left-0 w-full h-4 opacity-60"
                  />
                </span>
              </h1>

              <p className="font-sans text-lg text-[#5A504A] leading-relaxed mb-10 max-w-lg font-light">
                I help busy solopreneurs get qualified leads consistently, without spending hours figuring out complex funnels or shouting into the void.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center font-sans text-[0.9rem] font-medium bg-[#C97D60] text-white px-8 py-4 rounded-full tracking-wide shadow-[0_8px_20px_0_rgba(201,125,96,0.3)] hover:-translate-y-1 hover:bg-[#B36B51] transition-all duration-300"
                  style={{
                    borderRadius: '24px 26px 25px 24px', // Hand-drawn feel
                  }}
                >
                  Get a simple strategy
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center font-sans text-[0.9rem] font-medium bg-white/50 text-[#3A3632] px-8 py-4 rounded-full tracking-wide border border-[#E8B852]/40 backdrop-blur-md hover:bg-[#FBF6F0]/80 hover:border-[#E8B852]/60 hover:-translate-y-1 transition-all duration-300"
                  style={{
                    borderRadius: '25px 24px 26px 24px',
                  }}
                >
                  See how it works
                </a>
              </div>
              
              {/* Stats / Social Proof (Glass integrated) */}
              <div className="mt-14 pt-8 relative">
                {/* Hand-drawn divider instead of straight line */}
                <div className="absolute top-0 left-0 w-full h-[2px]">
                  <BrushStroke color="#C97D60" className="w-full h-8 -mt-4" />
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="relative">
                    <p className="font-serif text-3xl text-[#3A3632] font-medium">50+</p>
                    <p className="font-sans text-xs text-[#6B625B] mt-1 tracking-wider uppercase">Clients helped</p>
                    {/* Small hand-drawn circle accent */}
                    <HandDrawnCircle color="#E8B852" className="absolute -top-2 -right-2 w-12 h-12 opacity-40" />
                  </div>
                  <div>
                    <p className="font-serif text-3xl text-[#3A3632] font-medium">3-in-1</p>
                    <p className="font-sans text-xs text-[#6B625B] mt-1 tracking-wider uppercase">Brand & Web</p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl text-[#3A3632] font-medium">Calm</p>
                    <p className="font-sans text-xs text-[#6B625B] mt-1 tracking-wider uppercase">Approach</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative background element behind text */}
            <div className="absolute top-10 -left-10 w-40 h-40 bg-[#E8B852] rounded-full blur-[70px] opacity-40 z-10"></div>
          </div>

          {/* Right – Image */}
          <div className="lg:col-span-5 relative z-20 mt-10 lg:mt-0">
            <div className="relative rounded-[32px] p-2 bg-white/40 backdrop-blur-sm border border-[#C97D60]/20 shadow-[0_20px_60px_-15px_rgba(201,125,96,0.25)] transform lg:-translate-x-12 rotate-2 hover:rotate-0 transition-transform duration-700"
              style={{
                borderRadius: '34px 30px 33px 31px', // Irregular, hand-drawn feel
              }}
            >
              <div className="rounded-[24px] overflow-hidden aspect-[4/5] relative"
                style={{
                  borderRadius: '26px 23px 25px 24px',
                }}
              >
                <img
                  src={heroImage}
                  alt="Designer working in natural light"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#C97D60]/20 to-transparent mix-blend-overlay"></div>
              </div>
            </div>
            
            {/* Floating Glass tag */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white/70 backdrop-blur-2xl border border-[#E8B852]/30 rounded-2xl p-6 shadow-[0_16px_40px_-10px_rgba(232,184,82,0.3)] max-w-[240px] z-30 transform -rotate-3"
              style={{
                borderRadius: '18px 16px 17px 19px',
              }}
            >
              <p className="font-serif text-base text-[#3A3632] font-medium italic leading-relaxed">
                "Less noise. More qualified clients."
              </p>
              <div className="flex items-center gap-3 mt-3">
                <div className="w-8 h-[2px] bg-[#C97D60]" style={{ 
                  transform: 'rotate(-1deg)',
                  transformOrigin: 'left'
                }}></div>
                <p className="font-sans text-xs text-[#6B625B] tracking-widest uppercase font-semibold">
                  The Soh Method
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}