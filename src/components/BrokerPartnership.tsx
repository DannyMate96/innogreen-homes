"use client";

import AnimatedSection from "./AnimatedSection";
import { Check, ArrowRight } from "lucide-react";

const clientBenefits = [
  "Priority onboarding service",
  "Streamlined communication with your broker",
  "Exclusive market insights",
  "Fast-track tenant placement",
];

const brokerBenefits = [
  "Dedicated broker relationship manager",
  "Client progress updates",
  "Referral tracking and reporting",
  "Co-branded marketing materials",
];

export default function BrokerPartnership({
  onOpenForm,
}: {
  onOpenForm: (referral?: boolean) => void;
}) {
  return (
    <section id="broker" className="bg-brand-black py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Partnering with Perth&apos;s Leading Mortgage Brokers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Referred by your broker? You&apos;re in the right hands.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-white/70">
            We work closely with trusted mortgage brokers across Perth to
            provide seamless property management for their clients. If your
            broker recommended us, it&apos;s because they trust us to protect
            your investment and maximize your returns.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <AnimatedSection delay={0.2}>
            <div className="rounded border border-white/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
                For Broker-Referred Clients
              </p>
              <ul className="mt-6 space-y-3">
                {clientBenefits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-white/80"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="rounded border border-white/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
                For Mortgage Brokers
              </p>
              <ul className="mt-6 space-y-3">
                {brokerBenefits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-white/80"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4} className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => onOpenForm(true)}
            className="rounded bg-white px-8 py-3.5 text-base font-bold text-brand-green-dark transition-colors hover:bg-brand-off-white"
          >
            I Was Referred by My Broker
          </button>
          <a
            href="mailto:info@innogreenhomes.com.au?subject=Broker%20Partnership%20Inquiry"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white/60 transition-colors hover:text-white"
          >
            Mortgage Broker? Learn About Our Partnership Program
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
