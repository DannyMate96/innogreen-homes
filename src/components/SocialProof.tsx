"use client";

import AnimatedSection from "./AnimatedSection";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "As a first-time investor, I had no idea where to start. Innogreen Homes guided me through everything\u2014marketing, tenant screening, the whole process. My property was rented within 2 weeks and I\u2019ve had zero issues. Couldn\u2019t have asked for a better experience.",
    name: "James Patterson",
    details: "First-Time Investor, Applecross",
    tag: "New Property Owner",
  },
  {
    quote:
      "I switched from my previous manager and the difference is night and day. Better communication, higher rent, and I actually feel like they care about my property. The transition was seamless\u2014took less than a week. Best decision I made this year.",
    name: "Rebecca Lin",
    details: "Property Investor, Mount Lawley",
    tag: "Switched from Another Manager",
  },
  {
    quote:
      "I\u2019ve been with Innogreen Homes for 18 months now and my rental income has never been better. They keep my property in great condition, handle everything proactively, and I get detailed reports every month. Professional service that actually delivers results.",
    name: "Michael Thornton",
    details: "Property Investor, Subiaco",
    tag: "Long-Term Client",
  },
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray">
            Don&apos;t just take our word for it&mdash;hear from Perth landlords
            who made the switch
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.12}>
              <div className="flex h-full flex-col rounded border border-brand-light-gray bg-white p-8 transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                {/* Tag */}
                <span className="mb-4 inline-block self-start rounded bg-brand-off-white px-3 py-1 text-xs font-semibold text-brand-charcoal">
                  {t.tag}
                </span>

                {/* Stars */}
                <div className="mb-4 flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-brand-green text-brand-green"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="flex-1 text-base leading-relaxed text-brand-gray">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3 border-t border-brand-light-gray pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-black text-sm font-bold text-white">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-black">
                      {t.name}
                    </p>
                    <p className="text-xs text-brand-gray">{t.details}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
