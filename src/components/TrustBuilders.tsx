"use client";

import AnimatedSection from "./AnimatedSection";
import { Award, Star, Clock } from "lucide-react";

const stats = [
  { icon: Award, value: "100+", label: "Properties Under Management" },
  { icon: Star, value: "4.9\u2605", label: "Average Client Rating" },
  { icon: Clock, value: "18 Days", label: "Average Tenant Placement" },
];

export default function TrustBuilders() {
  return (
    <section id="trust" className="bg-brand-off-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            Trusted, Licensed, and Locally Respected
          </h2>
        </AnimatedSection>

        {/* Credentials */}
        <AnimatedSection delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div className="rounded border border-brand-light-gray bg-white px-6 py-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-gray">
                Real Estate License
              </p>
              <p className="mt-1 font-heading text-lg font-bold text-brand-black">
                RA82486
              </p>
            </div>
            <div className="rounded border border-brand-light-gray bg-white px-6 py-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-gray">
                Member
              </p>
              <p className="mt-1 font-heading text-lg font-bold text-brand-black">
                REIWA
              </p>
            </div>
            <div className="rounded border border-brand-light-gray bg-white px-6 py-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-gray">
                Part of Innogreen
              </p>
              <p className="mt-1 font-heading text-lg font-bold text-brand-black">
                NDIS: 4050064987
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.3}>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon
                  className="mx-auto h-6 w-6 text-brand-green"
                  strokeWidth={1.5}
                />
                <p className="mt-3 font-heading text-4xl font-extrabold text-brand-black">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-brand-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Partnership Statement */}
        <AnimatedSection delay={0.4} className="mt-14 text-center">
          <p className="text-lg font-medium text-brand-charcoal">
            Trusted by Perth&apos;s leading mortgage brokers to manage their
            clients&apos; investment properties
          </p>
          <p className="mt-4 text-sm text-brand-gray">
            For NDIS and Smart Home services, visit our parent company at{" "}
            <a
              href="https://innogreen.net.au"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-brand-green"
            >
              Innogreen.net.au
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
