import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const words = [
  {
    text: "automated",
    className: "text-[#0EA5E9]"
  },
  {
    text: "scalable",
    className: "text-[#0EA5E9]"
  },
  {
    text: "efficient",
    className: "text-[#0EA5E9]"
  },
  {
    text: "profitable",
    className: "text-[#0EA5E9]"
  },
  {
    text: "stress-free",
    className: "text-[#0EA5E9]"
  }
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[90vh] w-full flex items-center justify-center pt-20">
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
          <span className="block text-neutral-900 dark:text-white mb-4">
            Your Business, But Faster, Smarter & Unstoppable
          </span>
          <span className="relative inline-block">
            <span className="absolute inset-0 flex items-center justify-center">
              {words.map((word, index) => (
                <motion.span
                  key={word.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: currentIndex === index ? 1 : 0,
                    y: currentIndex === index ? 0 : 20,
                  }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    "absolute",
                    word.className
                  )}
                >
                  {word.text}
                </motion.span>
              ))}
            </span>
            <span className="invisible">Placeholder</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto px-4">
          Transform your business with AI-powered automation that works 24/7 to engage customers, close deals & boost revenue.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
            Free AI Consultation
          </button>
          <button className="px-8 py-3 bg-white text-neutral-900 rounded-lg font-medium border border-neutral-200 hover:border-blue-500 transition-colors">
            Talk to AI Assistant
          </button>
        </div>
      </div>
    </div>
  );
}