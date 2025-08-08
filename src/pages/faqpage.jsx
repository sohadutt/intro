import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "General Questions",
    items: [
      {
        question: "What types of schools does Board&Benchers cater to?",
        answer:
          "We primarily serve small and mid-level schools across India, though our scalable solutions can be adapted for various sizes.",
      },
      {
        question: "Is Board&Benchers a cloud-based solution?",
        answer:
          "Yes, our platform is entirely cloud-based, ensuring accessibility from anywhere, anytime, with an internet connection.",
      },
      {
        question: "How secure is our school's data on Board&Benchers?",
        answer:
          "Data security is our top priority. We employ robust encryption, regular backups, and adhere to industry best practices to protect all sensitive information.",
      },
    ],
  },
  {
    category: "Implementation & Support",
    items: [
      {
        question: "How long does it take to implement Board&Benchers in a school?",
        answer:
          "Implementation time varies based on school size and specific needs, but our dedicated team works to ensure a smooth and efficient transition, typically within a few weeks.",
      },
      {
        question: "What kind of customer support do you offer?",
        answer:
          "We offer comprehensive customer support via phone, email, and a dedicated helpdesk. Our team is committed to assisting you every step of the way.",
      },
      {
        question: "Is training provided for staff?",
        answer:
          "Absolutely. We provide thorough training sessions for administrators, teachers, and relevant staff to ensure they are comfortable and proficient with all aspects of the platform.",
      },
    ],
  },
  {
    category: "Features & Future Development",
    items: [
      {
        question: "What makes Board&Benchers different from other EdTech solutions?",
        answer:
          "Our unique offering lies in our truly holistic, integrated ecosystem (SMS, LMS, Exam System) combined with our aggressive roadmap for AI, AR/VR, and Hologram integration, providing a future-proof solution.",
      },
      {
        question: "How often are new features and updates rolled out?",
        answer:
          "We are continuously innovating and deploying regular updates and new features to enhance our platform and meet evolving educational needs.",
      },
    ],
  },
  {
    category: "Pricing",
    items: [
      {
        question: "How is Board&Benchers priced?",
        answer:
          "Our primary pricing model is per student per month, with tiered pricing based on the modules and advanced features (like Exam System, AI/AR/VR) your school utilizes. Please contact us for a detailed quote.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <section className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold">Got Questions? We've Got Answers.</h1>
        <p className="text-muted-foreground">
          Find quick answers to common queries about Board&Benchers.
        </p>
      </div>

      {faqs.map((section, secIndex) => (
        <div key={secIndex} className="space-y-4">
          <h2 className="text-2xl font-semibold">{section.category}</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {section.items.map((item, index) => (
              <AccordionItem key={index} value={`item-${secIndex}-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </section>
  );
}
