"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

const valueProps = [
  "Expert management from day one for new property owners",
  "Seamless transition if you're switching managers",
  "Higher returns through strategic pricing and premium service",
  "Complete transparency with monthly reporting",
  "Licensed, local Perth experts you can trust",
];

export default function Hero({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section id="hero" className="relative bg-white pt-20 sm:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-11 lg:py-24">
          {/* Left: Copy (55%) */}
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-green"
            >
              Perth&apos;s Premium Property Management
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-black sm:text-5xl lg:text-6xl"
            >
              Your Investment Property,
              <br />
              Professionally Managed.
              <br />
              <span className="text-brand-gray">
                Maximum Returns, Zero Hassle.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-brand-gray sm:text-xl"
            >
              Whether you&apos;ve just bought your first investment property or
              you&apos;re looking for a property manager who actually cares,
              we&apos;re here to make ownership effortless and profitable.
            </motion.p>

            {/* Value Props */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 space-y-3"
            >
              {valueProps.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-brand-charcoal"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <button
                onClick={onOpenForm}
                className="rounded bg-brand-green px-8 py-4 text-base font-bold text-white transition-colors hover:bg-brand-green-dark sm:text-lg"
              >
                Get Your Free Property Appraisal
              </button>
              <a
                href="#our-approach"
                className="group inline-flex items-center gap-1.5 text-base font-semibold text-brand-black transition-colors hover:text-brand-green"
              >
                See Our Approach
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-sm text-brand-gray"
            >
              No obligations. Free market appraisal included.
            </motion.p>
          </div>

          {/* Right: Image (45%) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative hidden lg:col-span-5 lg:block"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Perth investment property"
                fill
                priority
                className="object-cover"
              />
            </div>
            {/* NDIS redirect */}
            <div className="mt-4 text-right">
              <a
                href="https://innogreen.net.au"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-brand-gray transition-colors hover:text-brand-green"
              >
                NDIS customers? Visit Innogreen
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="border-t border-brand-light-gray bg-brand-off-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5 sm:px-6 lg:px-8">
          {[
            "Licensed Real Estate Agency RA82486",
            "REIWA Member",
            "Trusted by 100+ Perth Landlords",
            "4.9\u2605 Average Rating",
          ].map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-2 text-xs font-medium text-brand-gray sm:text-sm"
            >
              <Check className="h-4 w-4 text-brand-green" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
