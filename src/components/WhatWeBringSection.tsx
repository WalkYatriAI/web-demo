import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Zap, 
  BarChart2, 
  MessageSquareText, 
  Users 
} from "lucide-react";

interface FeatureProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  isInView: boolean;
  delay: number;
}

const Feature = ({ number, title, subtitle, description, icon, isInView, delay }: FeatureProps) => {
  return (
    <motion.div 
      className="flex gap-6 md:gap-10"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: delay * 0.2, ease: "easeOut" }}
    >
      <div className="relative">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
          {icon}
        </div>
        {/* Vertical line connecting features */}
        <div className="absolute top-12 left-1/2 w-0.5 h-full -translate-x-1/2 bg-gradient-to-b from-blue-200 to-transparent dark:from-blue-800 dark:to-transparent"></div>
      </div>
      
      <div className="flex-1 pb-16">
        <div className="flex items-center mb-2">
          <span className="text-5xl font-bold text-neutral-200 dark:text-neutral-800 mr-4">{number}</span>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">{title}</h3>
            <p className="text-sm text-blue-500 font-medium">{subtitle}</p>
          </div>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mt-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export function WhatWeBringSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const features = [
    {
      number: "01",
      title: "Automate & Accelerate",
      subtitle: "Less Manual Work, More Growth",
      description: "Ditch the repetitive tasks—let AI handle the grind while you focus on strategy, innovation, and expansion. More productivity, fewer headaches.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "Smarter Decisions, Instantly",
      subtitle: "Your Data, Your Power",
      description: "No more guesswork—real-time insights, predictive analytics, and automated reports give you the clarity to make winning decisions before your competitors do.",
      icon: <BarChart2 className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "AI That Talks, Sells & Supports",
      subtitle: "Customer Service That Never Sleeps",
      description: "Offer instant, AI-powered assistance that engages customers, solves problems, and even closes sales 24/7—no burnout, no delays, just results.",
      icon: <MessageSquareText className="w-6 h-6" />,
    },
    {
      number: "04",
      title: "More Personalization, More Revenue",
      subtitle: "Every Interaction Feels Made for Them",
      description: "AI understands, adapts, and customizes each interaction—so customers buy more, stay longer, and keep coming back. It's like having a personal assistant for every client.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-black py-16 md:py-24">
      <div 
        ref={ref}
        className="container mx-auto px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-blue-500 font-medium">Benefits</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-[#00B2FF] dark:text-[#00B2FF]">
              What We Bring to You?
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Forget about working harder—work smarter, scale faster, and dominate your industry with intelligent automation designed for real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {features.slice(0, 2).map((feature, index) => (
                <Feature
                  key={feature.number}
                  number={feature.number}
                  title={feature.title}
                  subtitle={feature.subtitle}
                  description={feature.description}
                  icon={feature.icon}
                  isInView={isInView}
                  delay={index}
                />
              ))}
            </div>
            
            <div className="space-y-6 lg:mt-16">
              {features.slice(2, 4).map((feature, index) => (
                <Feature
                  key={feature.number}
                  number={feature.number}
                  title={feature.title}
                  subtitle={feature.subtitle}
                  description={feature.description}
                  icon={feature.icon}
                  isInView={isInView}
                  delay={index + 2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}