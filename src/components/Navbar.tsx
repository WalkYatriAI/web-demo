import { Home, Lightbulb, BarChart2, FileText } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";

export function Navbar() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Services', url: '#', icon: Lightbulb },
    { name: 'Free AI Analysis', url: '#', icon: BarChart2 },
    { name: 'Blog', url: '#', icon: FileText }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-neutral-200/10">
      <div className="flex items-center gap-2">
        <img 
          src="/assets/Walk yatri (1).svg" 
          alt="WalkYatri AI Logo" 
          className="h-8 w-auto"
        />
        <span className="text-2xl font-bold text-neutral-900 dark:text-white">
          WalkYatri AI
        </span>
      </div>
      <NavBar 
        items={navItems} 
        className="relative sm:top-0 sm:pt-0 sm:mb-0 transform-none translate-x-0"
      />
    </div>
  );
}