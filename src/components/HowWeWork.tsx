"use client";

import AnimatedSection from "./AnimatedSection";
import { Calendar, FileText, Camera, KeyRound } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Free Consultation & Appraisal",
    text: "15-minute call or property visit. We\u2019ll assess your property, discuss your goals, and provide a free market rental appraisal\u2014no strings attached.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Transparent Agreement",
    text: "Clear, straightforward management agreement. No hidden fees, no lock-in contracts. You\u2019re free to leave with 30 days notice anytime.",
  },
  {
    number: "03",
    icon: Camera,
    title: "Professional Marketing",
    text: "High-quality photography, strategic pricing, multi-platform advertising. We present your property in the best light to attract premium tenants.",
  },
  {
    number: "04",
    icon: KeyRound,
    title: "Tenant Placement & Management",
    text: "Rigorous tenant screening, lease preparation, and ongoing management. You\u2019ll receive your first rent payment within 4 weeks and monthly reports thereafter.",
  },
];

export default function HowWeWork({
  onOpenForm,
}: {
  onOpenForm: () => void;
}) {
  return (
    <section id="how-we-work" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            Getting Started is Simple
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray">
            Whether you&apos;re a first-time investor or switching from another
            manager, we make it effortless
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.12}>
              <div className="relative">
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-6 hidden h-px w-full translate-x-1/2 bg-brand-light-gray lg:block" />
                )}

                <p className="relative z-10 font-heading text-4xl font-extrabold text-brand-light-gray">
                  {step.number}
                </p>

                <div className="mt-4">
                  <step.icon
                    className="h-6 w-6 text-brand-black"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="mt-4 font-heading text-lg font-bold text-brand-black">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-brand-gray">
                  {step.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="mt-14 text-center">
          <p className="mb-6 text-sm font-medium text-brand-gray">
            Average timeline: 3&ndash;4 weeks from consultation to first rent
            payment
          </p>
          <button
            onClick={onOpenForm}
            className="rounded bg-brand-green px-8 py-4 text-base font-bold text-white transition-colors hover:bg-brand-green-dark"
          >
            Start Your Free Appraisal
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
