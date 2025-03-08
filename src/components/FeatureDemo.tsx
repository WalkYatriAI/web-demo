
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";

function FeatureDemo() {
  return (
    <div className="w-full bg-white dark:bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-blue-500 font-medium">Features</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-[#00B2FF] dark:text-[#00B2FF]">
            What Makes Us Different?
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4">
            At WalkYatri AI, we don't just automate tasks—we transform businesses. Our AI-powered solutions are designed to streamline operations, boost efficiency, and enhance customer engagement without the need for expensive SaaS subscriptions or in-house technical expertise.
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4">
            Whether you're in hospitality, real estate, or customer service, we tailor automation workflows to fit your business needs—helping you save time, reduce costs, and maximize growth.
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            No more missed leads, delayed responses, or operational bottlenecks. With WalkYatri AI, your business runs smarter, not harder.
          </p>
        </div>
        <FeaturesSectionWithHoverEffects 
          features={[
            {
              title: "Comprehensive Channel Integration",
              description: "We build tailored workflows that seamlessly connect across WhatsApp, Social Media, Google Calendar, CRM systems, and website chatbots—creating a unified communication ecosystem."
            },
            {
              title: "Intelligent Omnichannel Virtual Assistants",
              description: "Engage customers effortlessly across multiple platforms—WhatsApp, Messenger, Website, Email, and Voice AI—ensuring no lead or booking opportunity is ever missed."
            },
            {
              title: "Human-Like AI Voice Agents",
              description: "Automate inbound & outbound calls for bookings, reminders, and customer inquiries. Our AI voice agents provide instant, natural conversations—eliminating long hold times and missed calls."
            },
            {
              title: "Scalable AI Solutions, Built for Growth",
              description: "Whether you're a small business or a growing enterprise, our automation adapts seamlessly—handling increasing workloads without breaking efficiency. From startups to high-volume operations, we grow with you."
            },
            {
              title: "Rapid Implementation",
              description: "Get your AI automation up and running within 5-7 days—no complicated setups, no steep learning curves. Experience instant results with minimal disruption."
            },
            {
              title: "Continuous Performance Optimization",
              description: "We don't just build automation; we perfect it. Our data-driven approach analyzes customer interactions and continuously refines workflows to maximize engagement, efficiency, and ROI."
            },
            {
              title: "Zero-Risk Investment",
              description: "Confidence in our solution means a 14-Day Money-Back Guarantee. If you don't see improvements in efficiency, customer engagement, or conversions, you get your money back—no questions asked."
            }
          ]} 
        />
      </div>
    </div>
  );
}

export { FeatureDemo };
