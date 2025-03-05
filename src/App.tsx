import './App.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { HeroDemo } from '@/components/HeroDemo';
import { FomoSection } from '@/components/FomoSection';
import { ProblemSection } from '@/components/ProblemSection';
import { WhatWeBringSection } from '@/components/WhatWeBringSection';
import { FeatureDemo } from '@/components/FeatureDemo';
import { TourSection } from '@/components/TourSection';
import { ToolsSection } from '@/components/ToolsSection';
import { CTASection } from '@/components/CTASection';
import { Navbar } from '@/components/Navbar';
import { Waves } from '@/components/ui/waves-background';
import { useTheme } from '@/components/ThemeProvider';

function App() {
  const { theme } = useTheme();
  
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen w-full overflow-hidden">
        <div className="relative">
          {/* Full page wave background */}
          <div className="fixed inset-0 z-0">
            <Waves
              lineColor={
                theme === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)"
              }
              backgroundColor="transparent"
              waveSpeedX={0.02}
              waveSpeedY={0.01}
              waveAmpX={40}
              waveAmpY={20}
              friction={0.9}
              tension={0.01}
              maxCursorMove={120}
              xGap={12}
              yGap={36}
            />
          </div>
          
          <div className="relative z-10">
            <Navbar />
            <main className="max-w-[2000px] mx-auto">
              <HeroDemo />
              <FomoSection />
              <ProblemSection />
              <WhatWeBringSection />
              <FeatureDemo />
              <TourSection />
              <ToolsSection />
              <CTASection />
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;