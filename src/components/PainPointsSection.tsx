import React from "react";
import { cn } from "@/lib/utils";
import { 
  Clock, 
  Database, 
  Calendar, 
  AlertCircle 
} from "lucide-react";

interface PainPointProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PainPoint = ({ title, description, icon }: PainPointProps) => {
  return (
    <div className="relative group bg-white/5 rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="mb-4 text-blue-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-neutral-100">
          {title}
        </h3>
        
        <p className="text-sm text-neutral-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export function PainPointsSection() {
  const painPoints: PainPointProps[] = [
    {
      title: "Limited Support Hours",
      description: "Customers need help 24/7, but your team can't work around the clock.",
      icon: <Clock className="w-8 h-8" />,
    },
    {
      title: "Disjointed Systems",
      description: "Multiple tools and platforms creating inefficiencies and data silos.",
      icon: <Database className="w-8 h-8" />,
    },
    {
      title: "Scheduling Chaos",
      description: "Manual booking processes leading to errors and missed opportunities.",
      icon: <Calendar className="w-8 h-8" />,
    },
    {
      title: "Inconsistent Responses",
      description: "Different agents providing varying answers to the same customer questions.",
      icon: <AlertCircle className="w-8 h-8" />,
    },
  ];

  return (
    <div className="w-full bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Is Your Customer Support <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Falling Short?</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Don't let these common challenges hold your business back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {painPoints.map((point) => (
            <PainPoint
              key={point.title}
              title={point.title}
              description={point.description}
              icon={point.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}