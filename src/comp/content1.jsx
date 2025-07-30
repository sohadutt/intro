import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookText,
  GraduationCap,
  Brain,
  Users,
  Laptop2,
} from "lucide-react";

const features = [
  {
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    title: "Smart Learning",
    description: "Interactive tools and smart content delivery for better engagement.",
  },
  {
    icon: <BookText className="h-10 w-10 text-primary" />,
    title: "Curriculum Planner",
    description: "Plan lessons, track progress, and manage materials efficiently.",
  },
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "AI-Based Insights",
    description: "Identify learning gaps and boost student performance with analytics.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Collaboration",
    description: "Connect teachers, students, and parents through a unified platform.",
  },
  {
    icon: <Laptop2 className="h-10 w-10 text-primary" />,
    title: "Digital Classrooms",
    description: "Virtual learning environments optimized for modern education.",
  },
];

export function FeatureCarousel() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Key Features</h2>
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {features.map((feature, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
              <div className="p-4">
                <Card className="aspect-[16/9] flex items-center justify-center">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="flex justify-center">{feature.icon}</div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
