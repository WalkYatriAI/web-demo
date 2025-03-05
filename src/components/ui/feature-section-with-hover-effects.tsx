import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  MessageSquare,
  Phone,
  Share2,
  Zap,
  Clock,
  LineChart,
  ShieldCheck
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface FeatureCardProps extends Feature {
  icon: React.ReactNode;
  index: number;
}

const FeatureCard = ({ title, description, icon, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className={cn(
        "relative p-6 rounded-xl",
        "bg-white dark:bg-black",
        "border border-neutral-200 dark:border-neutral-800",
        "transition-all duration-300",
        "hover:shadow-xl hover:scale-105",
        "dark:hover:shadow-blue-500/5"
      )}>
        <div className="mb-4 text-blue-500">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
          {title}
        </h3>
        
        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

interface FeaturesSectionProps {
  features: Feature[];
}

const getIconForFeature = (index: number) => {
  const icons = [
    <Share2 className="w-6 h-6" />,
    <MessageSquare className="w-6 h-6" />,
    <Phone className="w-6 h-6" />,
    <Zap className="w-6 h-6" />,
    <Clock className="w-6 h-6" />,
    <LineChart className="w-6 h-6" />,
    <ShieldCheck className="w-6 h-6" />
  ];
  return icons[index % icons.length];
};

export function FeaturesSectionWithHoverEffects({ features }: FeaturesSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
          icon={getIconForFeature(index)}
          index={index}
        />
      ))}
    </div>
  );
}