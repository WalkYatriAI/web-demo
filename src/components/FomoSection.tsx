import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { 
  TrendingUp, 
  Clock, 
  BarChart3, 
  Zap 
} from "lucide-react";

interface StatisticProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const Statistic = ({ value, label, icon }: StatisticProps) => {
  return (
    <motion.div 
      className="flex items-center gap-3 px-6 py-3 bg-neutral-50 dark:bg-white/5 rounded-lg border border-neutral-200 dark:border-transparent shadow-sm"
      whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-blue-500">
        {icon}
      </div>
      <div>
        <p className="font-bold text-neutral-900 dark:text-white">{value}</p>
        <p className="text-xs text-neutral-700 dark:text-neutral-300">{label}</p>
      </div>
    </motion.div>
  );
};

const CounterAnimation = ({ targetValue }: { targetValue: number }) => {
  const [count, setCount] = useState(10000);
  
  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 20; // Update every 20ms for smooth animation
    const steps = duration / interval;
    const increment = (targetValue - 10000) / steps;
    let currentCount = 10000;
    
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetValue) {
        clearInterval(timer);
        setCount(targetValue);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [targetValue]);
  
  return (
    <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
      {count.toLocaleString()}
    </span>
  );
};

const StatisticsTicker = () => {
  const statistics = [
    "85% of businesses will adopt AI by 2025",
    "AI-powered businesses see a 30% revenue increase",
    "75% of SMBs save time & costs with AI automation"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % statistics.length);
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, [statistics.length]);
  
  return (
    <div className="h-10 overflow-hidden relative">
      {statistics.map((stat, index) => (
        <motion.div
          key={index}
          className={cn(
            "absolute w-full text-center",
            "transition-all duration-500"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: currentIndex === index ? 1 : 0,
            y: currentIndex === index ? 0 : -20
          }}
          transition={{ duration: 0.5 }}
          aria-hidden={currentIndex !== index}
        >
          <p className="text-neutral-700 dark:text-neutral-200 font-medium">{stat}</p>
        </motion.div>
      ))}
    </div>
  );
};

export function FomoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const statistics: StatisticProps[] = [
    {
      value: "85%",
      label: "Adoption by 2025",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      value: "30%",
      label: "Revenue Increase",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      value: "75%",
      label: "Cost Reduction",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      value: "24/7",
      label: "Customer Support",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-gradient-to-b dark:from-black dark:to-neutral-900 py-12 overflow-hidden">
      <div 
        ref={ref}
        className="container mx-auto px-4"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-7xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
              AI Adoption Is <span className="relative">
                <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Exploding
                </span>
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span> – Are You Keeping Up?
            </h2>
            
            <motion.div 
              variants={itemVariants}
              className="mb-6"
            >
              <p className="text-xl text-neutral-700 dark:text-neutral-300">
                <CounterAnimation targetValue={25000} /> businesses adopted AI this month
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mb-10"
            >
              <StatisticsTicker />
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {statistics.map((stat) => (
              <Statistic
                key={stat.label}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
