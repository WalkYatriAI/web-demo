import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  MessageSquare,
  Inbox,
  Clock,
  DollarSign,
  Zap,
  Users
} from "lucide-react";

interface PainPointProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PainPoint = ({ title, description, icon }: PainPointProps) => {
  return (
    <motion.div 
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative p-6 rounded-xl backdrop-blur-sm bg-white/5 dark:bg-black/5 hover:transform hover:scale-105 transition-all duration-300 overflow-hidden group border border-white/10 dark:border-white/5">
        <div className="relative z-10">
          <div className="mb-4 text-blue-500 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-400 dark:group-hover:text-blue-300">
            {icon}
          </div>
          
          <h3 className="text-xl font-bold mb-2 text-neutral-800 dark:text-white">
            {title}
          </h3>
          
          <p className="text-neutral-600 dark:text-neutral-300 text-sm">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export function ProblemSection() {
  const painPoints: PainPointProps[] = [
    {
      title: "Leads Slipping Through",
      description: "Unanswered inquiries, abandoned carts, and untracked follow-ups leading to lost opportunities.",
      icon: <Inbox className="w-8 h-8" />,
    },
    {
      title: "Communication Overload",
      description: "Juggling emails, messages, and phone calls with no streamlined process to manage them effectively.",
      icon: <MessageSquare className="w-8 h-8" />,
    },
    {
      title: "Inconsistent Engagement",
      description: "Customers expect instant responses, but manual systems fall short of meeting these expectations.",
      icon: <Clock className="w-8 h-8" />,
    },
    {
      title: "Rising Costs",
      description: "Soaring support and acquisition costs due to inefficient processes and manual operations.",
      icon: <DollarSign className="w-8 h-8" />,
    },
    {
      title: "Productivity Drain",
      description: "Time wasted on repetitive tasks instead of focusing on strategic business growth initiatives.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Lack of Personalization",
      description: "Generic, one-size-fits-all communications fail to connect with individual customer needs, decreasing engagement and loyalty.",
      icon: <Users className="w-8 h-8" />,
    }
  ];

  return (
    <div className="w-full py-20 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-[#00B2FF] dark:text-[#00B2FF]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Are Your Customer Interactions Costing You Opportunities?
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Transforming Communication Chaos into Conversion Machines
          </motion.p>
        </div>

        <motion.p 
          className="text-center text-lg text-neutral-700 dark:text-neutral-300 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Every business struggles with the same critical challenges:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
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