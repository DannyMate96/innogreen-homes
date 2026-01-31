"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export default function Header({
  onOpenForm,
}: {
  onOpenForm: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Our Approach", href: "#our-approach" },
    { label: "How It Works", href: "#how-we-work" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faq" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/favicon.png"
            alt="Innogreen Homes"
            width={36}
            height={36}
            className="h-9 w-9"
          />
          <Image
            src="/logo.png"
            alt="Innogreen Homes"
            width={160}
            height={34}
            className="h-8 w-auto"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-gray transition-colors hover:text-brand-black"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+61400000000"
            className="flex items-center gap-1.5 text-sm font-medium text-brand-gray transition-colors hover:text-brand-black"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>
          <button
            onClick={onOpenForm}
            className="rounded bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
          >
            Free Appraisal
          </button>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-brand-black" />
          ) : (
            <Menu className="h-6 w-6 text-brand-black" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-brand-light-gray bg-white md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded px-3 py-2.5 text-sm font-medium text-brand-gray transition-colors hover:bg-brand-off-white hover:text-brand-black"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+61400000000"
                className="flex items-center gap-2 rounded px-3 py-2.5 text-sm font-medium text-brand-gray transition-colors hover:bg-brand-off-white hover:text-brand-black"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenForm();
                }}
                className="mt-2 w-full rounded bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
              >
                Get Free Appraisal
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
