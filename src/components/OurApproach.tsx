"use client";

import AnimatedSection from "./AnimatedSection";
import {
  ShieldCheck,
  Users,
  FileText,
  TrendingUp,
  BadgeCheck,
  Gem,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Proactive, Not Reactive",
    text: "Regular inspections, preventive maintenance, and open communication mean fewer surprises and better property conditions. We protect your asset like it\u2019s our own.",
  },
  {
    icon: Users,
    title: "Premium Tenant Placement",
    text: "Rigorous screening process attracts quality, long-term tenants. Professional photography and strategic marketing fill vacancies fast\u2014average 18 days, 40% faster than industry standard.",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    text: "Detailed monthly financial statements and property updates delivered to your inbox. Online portal access 24/7. Always know exactly how your investment is performing.",
  },
  {
    icon: TrendingUp,
    title: "Maximized Returns",
    text: "Strategic rent reviews, expense optimization, and market analysis ensure you\u2019re getting top dollar. Our clients consistently achieve higher returns than self-managed properties.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed & Local",
    text: "Fully licensed (RA82486), REIWA member, and Perth-based. We know the local market inside out and comply with all WA tenancy regulations.",
  },
  {
    icon: Gem,
    title: "White-Glove Service",
    text: "You\u2019re not just a client number. Dedicated property manager, direct phone line, same-day response to inquiries. Service that actually feels premium.",
  },
];

export default function OurApproach() {
  return (
    <section id="our-approach" className="bg-brand-off-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            Property Management Done Right
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray">
            We&apos;re not your typical property manager. Here&apos;s what sets
            us apart.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded border border-brand-light-gray bg-white p-7 transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <div className="mb-5">
                  <feature.icon
                    className="h-6 w-6 text-brand-black"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-black">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-brand-gray">
                  {feature.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
