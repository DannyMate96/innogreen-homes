"use client";

import AnimatedSection from "./AnimatedSection";
import { Home, RefreshCw, Check, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: Home,
    badge: "NEW",
    headline: "Just Bought an Investment Property?",
    text: "Congratulations! Now comes the important part\u2014finding the right tenants and setting up for success. We guide new property investors through every step, from market appraisal to placing quality tenants in your first 3 weeks.",
    benefits: [
      "First-time investor guidance",
      "Strategic rental pricing",
      "Fast tenant placement (avg. 18 days)",
      "Complete setup assistance",
    ],
    cta: "Get Started",
  },
  {
    icon: RefreshCw,
    badge: null,
    headline: "Time for a Better Property Manager?",
    text: "If your current manager isn't meeting expectations, switching is easier than you think. We handle the entire transition seamlessly\u2014no disruption to your tenants, no stress for you. Just better service from day one.",
    benefits: [
      "Seamless manager transition (7\u201310 days)",
      "No disruption to existing tenants",
      "Immediate improvement in service",
      "All paperwork handled for you",
    ],
    cta: "Schedule a Comparison Call",
  },
];

export default function WhoWeHelp({
  onOpenForm,
}: {
  onOpenForm: () => void;
}) {
  return (
    <section id="who-we-help" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            We Specialize in Two Things
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {cards.map((card, i) => (
            <AnimatedSection key={card.headline} delay={i * 0.15}>
              <div className="flex h-full flex-col rounded border border-brand-light-gray bg-white p-8 transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] sm:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded bg-brand-off-white">
                    <card.icon className="h-6 w-6 text-brand-black" strokeWidth={1.5} />
                  </div>
                  {card.badge && (
                    <span className="rounded bg-brand-green px-2 py-0.5 text-xs font-bold text-white">
                      {card.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-xl font-bold text-brand-black sm:text-2xl">
                  {card.headline}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-brand-gray">
                  {card.text}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {card.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2.5 text-sm text-brand-charcoal"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <button
                    onClick={onOpenForm}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black transition-colors hover:text-brand-green"
                  >
                    {card.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
