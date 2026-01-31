"use client";

import AnimatedSection from "./AnimatedSection";
import { Check, X, ShieldCheck } from "lucide-react";

const includedCol1 = [
  "Free market appraisal",
  "Professional photography",
  "Multi-platform marketing",
  "Rigorous tenant screening",
  "Lease preparation & signing",
];

const includedCol2 = [
  "Rent collection & arrears management",
  "Regular property inspections",
  "Maintenance coordination",
  "24/7 tenant support",
  "Monthly financial reporting",
];

const notCharged = [
  "No setup fees",
  "No letting fees",
  "No exit fees",
  "No hidden charges",
];

export default function Pricing({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray">
            No hidden fees. No surprises. Just straightforward, honest pricing.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mx-auto mt-14 max-w-2xl rounded border border-brand-light-gray bg-white">
            {/* Header */}
            <div className="border-b border-brand-light-gray p-8 text-center sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-gray">
                Management Fee
              </p>
              <div className="mt-3 flex items-baseline justify-center gap-1">
                <span className="font-heading text-5xl font-extrabold text-brand-black sm:text-6xl">
                  8%
                </span>
                <span className="text-xl text-brand-gray">+ GST</span>
              </div>
              <p className="mt-2 text-sm text-brand-gray">
                of monthly rental income
              </p>
            </div>

            {/* Included */}
            <div className="p-8 sm:p-10">
              <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-brand-gray">
                What&apos;s Included
              </p>
              <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                <ul className="space-y-3">
                  {includedCol1.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-brand-charcoal"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3">
                  {includedCol2.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-brand-charcoal"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not charged */}
              <div className="mt-8 border-t border-brand-light-gray pt-6">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gray">
                  What We Don&apos;t Charge
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {notCharged.map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-2 text-sm text-brand-gray"
                    >
                      <X className="h-4 w-4 text-brand-gray" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Guarantee */}
              <div className="mt-8 rounded bg-brand-green-light p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-dark" />
                  <div>
                    <p className="text-sm font-bold text-brand-green-dark">
                      30-Day Satisfaction Promise
                    </p>
                    <p className="mt-1 text-sm text-brand-gray">
                      Not happy after your first month? We&apos;ll refund your
                      management fee&mdash;no questions asked.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-brand-gray">
                No lock-in contracts. Cancel anytime with 30 days notice.
              </p>

              {/* CTA */}
              <button
                onClick={onOpenForm}
                className="mt-6 w-full rounded bg-brand-green py-4 text-base font-bold text-white transition-colors hover:bg-brand-green-dark"
              >
                Get Your Custom Quote
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
