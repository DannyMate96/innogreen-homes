"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "I just bought an investment property\u2014when should I contact you?",
    a: "Ideally before settlement! We can prepare marketing materials and start advertising even before you get the keys. Most new properties are tenanted within 2\u20133 weeks of settlement when we start early.",
  },
  {
    q: "How do I switch from my current property manager?",
    a: "It\u2019s easier than you think. We handle all the paperwork, tenant communication, and coordination with your current manager. The entire transition typically takes 7\u201310 days and is completely seamless for you and your tenant.",
  },
  {
    q: "What\u2019s your tenant screening process?",
    a: "We use a rigorous 5-step verification: credit check, employment verification, rental history review, reference checks, and income assessment. Only the most qualified applicants (top 10%) are approved.",
  },
  {
    q: "How quickly can you find me a tenant?",
    a: "Our average is 18 days from listing to lease signing\u201440% faster than the Perth average. We use professional photography, strategic pricing, and multi-platform marketing to attract quality tenants quickly.",
  },
  {
    q: "What if my property needs repairs?",
    a: "We have a network of licensed, insured tradespeople. Minor repairs under $500 are approved and coordinated immediately. Larger repairs require your approval first. Emergency repairs (safety/security) are handled 24/7 to protect your asset.",
  },
  {
    q: "How often will I hear from you?",
    a: "You\u2019ll receive detailed monthly statements automatically. We\u2019ll contact you proactively for important matters (lease renewals, maintenance, market updates). Plus, you have 24/7 access to our online portal and can reach us anytime.",
  },
  {
    q: "Can I see how my property is performing?",
    a: "Absolutely. You\u2019ll have access to our online portal 24/7 where you can view financial statements, inspection reports, maintenance history, and tenant communications anytime.",
  },
  {
    q: "What areas of Perth do you cover?",
    a: "We manage properties across all Perth metro areas, with particular expertise in inner-city suburbs, western suburbs, and riverside locations. If you\u2019re unsure, just ask\u2014we\u2019ll let you know if we cover your area.",
  },
  {
    q: "Do you have lock-in contracts?",
    a: "No. We believe in earning your business every month. You can cancel with just 30 days written notice, anytime. Plus, our 30-day satisfaction guarantee means your first month is risk-free.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-brand-light-gray">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="pr-4 text-base font-semibold text-brand-black sm:text-lg">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 shrink-0 text-brand-gray" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-12 text-base leading-relaxed text-brand-gray">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-brand-off-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            Questions? We&apos;ve Got Answers.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-12">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
