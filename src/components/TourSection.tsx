"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Zap, FileText, Code, RefreshCw } from "lucide-react";

interface TourStep {
  icon: React.ElementType;
  title: string;
  description: string;
}

const tourSteps: TourStep[] = [
  {
    icon: FileText,
    title: "Tell Us What You Need",
    description:
      "Share your challenges & goals—our AI-powered system will instantly analyze the best automation opportunities for your business.",
  },
  {
    icon: Zap,
    title: "Get Your AI Blueprint",
    description:
      "Based on your business needs, we design a custom AI-powered automation plan using tools like OpenAI, n8n & Make.com.",
  },
  {
    icon: Code,
    title: "We Build & Automate",
    description:
      "Our experts set up, test, and optimize AI workflows tailored to your operations, ensuring seamless integration.",
  },
  {
    icon: RefreshCw,
    title: "AI That Grows With You",
    description:
      "AI never stops improving! We fine-tune automation, add new features, and ensure your business stays ahead.",
  },
];

interface CardProps {
  number: number;
  isActive: boolean;
  onClick: () => void;
}

function Card({ number, isActive, onClick }: CardProps) {
  const content = (
    <div 
      className={`flex size-10 items-center justify-center rounded-lg ${isActive ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'} text-sm font-medium cursor-pointer transition-colors duration-200 hover:bg-primary/80 hover:text-primary-foreground`}
      onClick={onClick}
    >
      {number + 1}
    </div>
  );

  return isActive ? <PopoverAnchor asChild>{content}</PopoverAnchor> : content;
}

function TourComponent() {
  const [currentTip, setCurrentTip] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = () => {
    if (currentTip === tourSteps.length - 1) {
      setCurrentTip(0);
    } else {
      setCurrentTip(currentTip + 1);
    }
  };

  const handleCardClick = (index: number) => {
    setCurrentTip(index);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const CurrentIcon = tourSteps[currentTip].icon;

  return (
    <div className="flex flex-col gap-4 items-center">
      <Popover 
        open={isOpen} 
        onOpenChange={setIsOpen}
      >
        <div className="grid grid-cols-2 place-items-center gap-4 mb-6">
          {tourSteps.map((step, index) => (
            <Card 
              key={step.title} 
              number={index} 
              isActive={currentTip === index} 
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>

        <PopoverTrigger asChild>
          <Button 
            variant="outline" 
            onClick={() => setIsOpen(true)}
            className="relative overflow-hidden group"
          >
            <span className="relative z-10">Take a tour of our process</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="max-w-[280px] py-3 shadow-md border-blue-100 dark:border-blue-900"
          side={currentTip % 2 === 0 ? "left" : "right"}
          showArrow={true}
          align="center"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="text-blue-500">
                <CurrentIcon className="w-5 h-5" />
              </div>
              <p className="text-[15px] font-medium">{tourSteps[currentTip].title}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{tourSteps[currentTip].description}</p>
            </div>
            <div className="flex items-center justify-between gap-2 pt-2 border-t border-border">
              <span className="text-xs text-muted-foreground">
                {currentTip + 1}/{tourSteps.length}
              </span>
              <button 
                className="text-xs font-medium text-blue-500 hover:text-blue-600 hover:underline" 
                onClick={handleNavigation}
              >
                {currentTip === tourSteps.length - 1 ? "Start over" : "Next"}
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export function TourSection() {
  return (
    <div className="w-full bg-white dark:bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-[#00B2FF] dark:text-[#00B2FF]">Start Your AI-Powered Transformation</h2>
        <p className="text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
          From Consultation to Full Automation—Tailored for Your Business.
        </p>
        <div className="flex justify-center">
          <TourComponent />
        </div>
      </div>
    </div>
  );
}