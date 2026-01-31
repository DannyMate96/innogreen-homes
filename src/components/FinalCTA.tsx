"use client";

import AnimatedSection from "./AnimatedSection";
import { Check, Phone, Mail } from "lucide-react";

export default function FinalCTA({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section id="final-cta" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl lg:text-5xl">
            Ready to Experience Professional Property Management?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-gray">
            Join 100+ Perth landlords who chose excellence
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <div className="text-center">
              <p className="mb-2 text-sm text-brand-gray">
                Just bought a property?
              </p>
              <button
                onClick={onOpenForm}
                className="rounded bg-brand-green px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-brand-green-dark"
              >
                Get Free Market Appraisal
              </button>
            </div>
            <div className="text-center">
              <p className="mb-2 text-sm text-brand-gray">
                Have a current manager?
              </p>
              <button
                onClick={onOpenForm}
                className="rounded border-2 border-brand-black bg-transparent px-8 py-3 text-base font-bold text-brand-black transition-colors hover:bg-brand-black hover:text-white"
              >
                Schedule Comparison Call
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-brand-gray">
            {[
              "Free consultation, no obligations",
              "Typically 15\u201330 minutes",
              "Available 7 days a week",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-brand-green" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-brand-light-gray pt-8 text-brand-gray">
            <a
              href="tel:+61400000000"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-brand-black"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
            <a
              href="mailto:info@innogreenhomes.com.au"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-brand-black"
            >
              <Mail className="h-4 w-4" />
              info@innogreenhomes.com.au
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
