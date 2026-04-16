import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { ReframeSection } from "./components/ReframeSection";
import { ProcessSection } from "./components/ProcessSection";
import { WhySection } from "./components/WhySection";
import { ServicesSection } from "./components/ServicesSection";
import { TrustSection } from "./components/TrustSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-[#E8B852] selection:text-[#3A3632] text-[#3A3632]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Global Warm Animated/Blob Background - Version 4: More Organic & Imperfect */}
      <div className="fixed inset-0 -z-10 bg-[#F5EBE0] overflow-hidden">
        {/* Warm terracotta and gold blobs with organic, imperfect movements */}
        <div 
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#C97D60] opacity-30" 
          style={{ 
            borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
            filter: 'blur(120px)',
            animation: 'organicFloat1 8s ease-in-out infinite alternate',
          }} 
        />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#E8B852] opacity-25" 
          style={{ 
            borderRadius: '47% 53% 42% 58% / 49% 55% 45% 51%',
            filter: 'blur(140px)',
            animation: 'organicFloat2 12s ease-in-out infinite alternate',
          }} 
        />
        <div 
          className="absolute top-[30%] right-[10%] w-[40%] h-[40%] bg-[#D4AF37] opacity-35" 
          style={{ 
            borderRadius: '52% 48% 61% 39% / 43% 57% 43% 57%',
            filter: 'blur(100px)',
            animation: 'organicFloat3 10s ease-in-out infinite alternate',
          }} 
        />
        <div 
          className="absolute bottom-[20%] left-[20%] w-[45%] h-[45%] bg-[#BC6C4D] opacity-20" 
          style={{ 
            borderRadius: '38% 62% 51% 49% / 58% 44% 56% 42%',
            filter: 'blur(130px)',
            animation: 'organicFloat4 14s ease-in-out infinite alternate',
          }} 
        />
        
        {/* Noise overlay for organic texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      {/* Add organic keyframe animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes organicFloat1 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-20px, 30px) scale(1.05) rotate(2deg); }
          66% { transform: translate(15px, -25px) scale(0.98) rotate(-1deg); }
          100% { transform: translate(-5px, 10px) scale(1.02) rotate(1deg); }
        }
        @keyframes organicFloat2 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(25px, -20px) scale(0.97) rotate(-2deg); }
          66% { transform: translate(-18px, 28px) scale(1.04) rotate(1deg); }
          100% { transform: translate(8px, -12px) scale(1.01) rotate(-1deg); }
        }
        @keyframes organicFloat3 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-15px, -22px) scale(1.03) rotate(1deg); }
          66% { transform: translate(20px, 18px) scale(0.99) rotate(-2deg); }
          100% { transform: translate(-10px, -8px) scale(1.01) rotate(1deg); }
        }
        @keyframes organicFloat4 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(18px, 25px) scale(0.96) rotate(-1deg); }
          66% { transform: translate(-22px, -15px) scale(1.05) rotate(2deg); }
          100% { transform: translate(12px, 5px) scale(0.98) rotate(-1deg); }
        }
      `}} />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <ProblemSection />
          <ReframeSection />
          <ProcessSection />
          <WhySection />
          <ServicesSection />
          <TrustSection />
          <FinalCTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}