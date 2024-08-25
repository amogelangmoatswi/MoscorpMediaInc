"use client";

// React and Next.js imports
import React from "react";

// Third-party library imports
import { ArrowUpRight } from "lucide-react";

// UI component imports
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Custom components
import { Section, Container } from "@/components/craft";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "What services does Moscorp Media Inc. offer?",
    answer:
      "We provide a wide range of services including web development, mobile app development, software development, UX/UI design, and graphic design.",
  },
  {
    question: "How can I get started with a project?",
    answer:
      "To begin, you can contact us through our Contact page or request a consultation. We’ll discuss your needs, objectives, and develop a plan tailored to your project.",
  },
  {
    question: "What is your approach to project management?",
    answer:
      "We follow a client-centric, agile approach, ensuring flexibility and adaptability throughout the project. Our process involves regular updates, collaboration, and feedback to achieve the best results.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The timeline for a project varies based on its complexity and scope. We provide a detailed timeline and milestones during the project planning phase.",
  },
];


const FAQ = () => {
  return (
    <Section id="faq" >
      <Container>
        <h3 className="!mt-0">Frequently Asked Questions</h3>
        <h4 className="text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Reach out to our
          customer support team.
        </h4>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={item.question}
                className="rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
