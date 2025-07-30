import { Lightbulb, School } from "lucide-react";

export function IntroSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16 text-center">
      <div className="flex flex-col items-center gap-4">
        <School className="w-12 h-12 text-primary" />
        <h1 className="text-4xl font-bold">Welcome to BoardBenchers</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Revolutionizing education with digital tools. Streamline your classroom,
          enhance learning, and connect educators, students, and parents—all in one place.
        </p>
      </div>
    </section>
  );
}
