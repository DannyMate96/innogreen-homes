"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section id="hero" className="relative bg-white pt-20 sm:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-11 lg:py-24">
          {/* Left: Copy */}
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
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-brand-gray sm:text-xl"
            >
              Expert management for new investors and landlords ready for
              better service. Effortless ownership, maximum returns.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
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
              transition={{ delay: 0.5 }}
              className="mt-4 text-sm text-brand-gray"
            >
              No obligations. Free market appraisal included.
            </motion.p>
          </div>

          {/* Right: Image */}
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
          ].map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-2 text-xs font-medium text-brand-gray sm:text-sm"
            >
              <svg className="h-4 w-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
