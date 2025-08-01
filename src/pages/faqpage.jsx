import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Board and Benchers?",
    answer:
      "It is a student management web app to help schools manage attendance, syllabus, ebooks, notices, and forms all in one place.",
  },
  {
    question: "Who can use the platform?",
    answer:
      "Teachers, students, administrators, and parents will all have access to relevant features.",
  },
  {
    question: "What technologies are used?",
    answer:
      "We use React.js for the frontend, Django for the backend, and AWS for deployment and hosting.",
  },
  {
    question: "Is this service free?",
    answer:
      "Board and Benchers will offer both free and premium plans with additional features.",
  },
];

export default function FAQPage() {
  return (
    <section className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map(({ question, answer }, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>
              <p>{answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
