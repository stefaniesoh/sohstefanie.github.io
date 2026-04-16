import { WatercolorBlob, HandDrawnUnderline } from "./HandDrawnElements";

const notebookImage = "https://images.unsplash.com/photo-1569360556894-15dca0c6ff1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHdyaXRpbmclMjBub3RlYm9vayUyMGNvZmZlZSUyMGRlc2slMjB3YXJtJTIwdG9uZXN8ZW58MXx8fHwxNzc2MDY5NzczfDA&ixlib=rb-4.1.0&q=80&w=1080";

export function FinalCTASection() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="relative rounded-[2.5rem] bg-[#3A3632]/95 backdrop-blur-xl border border-[#E8B852]/20 shadow-[0_32px_80px_-20px_rgba(58,54,50,0.5)] overflow-hidden"
          style={{
            borderRadius: '44px 40px 42px 41px', // Irregular corners
          }}
        >
          {/* Abstract glows behind dark glass - now watercolor */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-40">
            <WatercolorBlob color="#E8B852" className="w-full h-full" />
          </div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none opacity-30">
            <WatercolorBlob color="#C97D60" className="w-full h-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            {/* Left – Image */}
            <div className="relative aspect-[4/3] lg:aspect-auto hidden lg:block overflow-hidden m-4 rounded-[2rem]"
              style={{
                borderRadius: '34px 30px 32px 31px',
              }}
            >
              <img
                src={notebookImage}
                alt="Writing and planning"
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity transform hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#3A3632]/80"></div>
            </div>

            {/* Right – CTA content */}
            <div className="p-10 sm:p-14 lg:p-16 xl:p-20 flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-[#E8B852]/30 backdrop-blur-md mb-8 w-fit shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#E8B852] animate-pulse"></span>
                <p className="font-sans text-xs text-[#F5EBE0] tracking-[0.2em] uppercase font-semibold">
                  Ready when you are
                </p>
              </div>

              <h2 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] text-[#FBF6F0] leading-[1.1] font-medium tracking-tight mb-6">
                Start simple. <br />
                <span className="relative inline-block">
                  <span className="italic text-[#E8B852]">No overwhelm.</span>
                  {/* Hand-drawn underline */}
                  <HandDrawnUnderline 
                    color="#E8B852" 
                    className="absolute -bottom-1 left-0 w-full h-3 opacity-70"
                  />
                </span>
              </h2>

              <p className="font-sans text-[1.05rem] text-[#E8DDD0] leading-relaxed mb-10 max-w-md font-light">
                One conversation is all it takes. We'll figure out where you are, where you want to be, and what the simplest path forward looks like — together.
              </p>

              {/* Form */}
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-[#FBF6F0] font-sans text-[0.95rem] outline-none focus:border-[#E8B852]/50 focus:bg-white/10 transition-all placeholder:text-white/30 backdrop-blur-sm"
                    style={{
                      borderRadius: '18px 16px 17px 19px',
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-[#FBF6F0] font-sans text-[0.95rem] outline-none focus:border-[#E8B852]/50 focus:bg-white/10 transition-all placeholder:text-white/30 backdrop-blur-sm"
                    style={{
                      borderRadius: '16px 18px 19px 17px',
                    }}
                  />
                </div>
                <textarea
                  placeholder="Tell me a little about your situation (optional)"
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-[#FBF6F0] font-sans text-[0.95rem] outline-none focus:border-[#E8B852]/50 focus:bg-white/10 transition-all placeholder:text-white/30 resize-none backdrop-blur-sm"
                  style={{
                    borderRadius: '19px 17px 18px 16px',
                  }}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center font-sans text-[0.95rem] font-medium bg-[#E8B852] text-[#3A3632] px-8 py-4 rounded-full tracking-wide hover:bg-[#D4AF37] hover:shadow-[0_0_20px_0_rgba(232,184,82,0.4)] hover:-translate-y-1 transition-all duration-300"
                  style={{
                    borderRadius: '24px 26px 25px 24px',
                  }}
                >
                  Get a simple strategy
                </button>
                <button className="inline-flex items-center justify-center font-sans text-[0.95rem] font-medium bg-transparent text-[#FBF6F0] px-8 py-4 rounded-full tracking-wide border border-white/20 hover:border-[#E8B852]/50 hover:bg-white/5 transition-all duration-300"
                  style={{
                    borderRadius: '25px 24px 26px 25px',
                  }}
                >
                  Find out what I need first
                </button>
              </div>

              <p className="font-sans text-[0.85rem] text-[#C97D60] mt-8 leading-[1.6]">
                No commitment needed. No sales pressure. Just an honest conversation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}