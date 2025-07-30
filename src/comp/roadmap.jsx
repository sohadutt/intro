import React from "react";
import { Rocket, Target, MessageCircle, Settings } from "lucide-react";

const roadmapSteps = [
  {
    title: "MVP Launch",
    icon: <Rocket className="w-6 h-6 text-primary" />,
    description: "Core modules like student records, attendance, and dashboard.",
  },
  {
    title: "Analytics & AI",
    icon: <Target className="w-6 h-6 text-primary" />,
    description: "Insightful reports and AI recommendations for better decision-making.",
  },
  {
    title: "Collaboration",
    icon: <MessageCircle className="w-6 h-6 text-primary" />,
    description: "Real-time chat, homework tracking, and parent-teacher communication.",
  },
  {
    title: "Customization",
    icon: <Settings className="w-6 h-6 text-primary" />,
    description: "Customizable dashboards and user preferences.",
  },
];

export function RoadmapSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 bg-background dark:bg-background-dark rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
        Roadmap
      </h2>
      <div className="flex flex-wrap justify-between gap-8">
        {roadmapSteps.map(({ title, icon, description }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center flex-1 min-w-[180px]"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 mb-4">
              {icon}
            </div>
            <h3 className="font-semibold text-lg text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground max-w-xs">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
