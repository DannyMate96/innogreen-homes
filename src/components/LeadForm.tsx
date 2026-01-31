"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Loader2 } from "lucide-react";

const perthSuburbs = [
  "Applecross",
  "Balcatta",
  "Burswood",
  "Canning Vale",
  "Claremont",
  "Como",
  "Cottesloe",
  "East Perth",
  "Fremantle",
  "Inglewood",
  "Joondalup",
  "Leederville",
  "Mandurah",
  "Morley",
  "Mount Lawley",
  "Nedlands",
  "North Perth",
  "Rockingham",
  "Scarborough",
  "South Perth",
  "Stirling",
  "Subiaco",
  "Victoria Park",
  "West Perth",
  "Other",
];

const leadSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number")
    .regex(/^[\d\s+\-()]+$/, "Please enter a valid phone number"),
  suburb: z.string().min(1, "Please select or enter a suburb"),
  situation: z.string().min(1, "Please select your situation"),
  brokerName: z.string().optional(),
  brokerage: z.string().optional(),
  contactTime: z.string().optional(),
  marketUpdates: z.boolean().optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

export default function LeadForm({
  open,
  onClose,
  isBrokerReferral = false,
}: {
  open: boolean;
  onClose: () => void;
  isBrokerReferral?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      situation: isBrokerReferral
        ? "referred-by-broker"
        : "",
      marketUpdates: true,
    },
  });

  const situation = watch("situation");

  async function onSubmit(data: LeadFormData) {
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
      reset();
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  function handleClose() {
    setSubmitted(false);
    onClose();
  }

  const inputClass =
    "w-full rounded border border-brand-light-gray bg-white px-4 py-3 text-base text-brand-black outline-none transition-colors placeholder:text-brand-gray/50 focus:border-brand-black focus:ring-1 focus:ring-brand-black/10";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-black/40 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg rounded bg-white shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded text-brand-gray transition-colors hover:bg-brand-light-gray hover:text-brand-black"
              aria-label="Close form"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="p-8 text-center sm:p-10">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-green-light">
                  <Check className="h-7 w-7 text-brand-green-dark" />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-bold text-brand-black">
                  Thank You!
                </h3>
                <p className="mt-3 text-base text-brand-gray">
                  We&apos;ve received your details and will be in touch within
                  24 hours. We look forward to helping you with your property!
                </p>
                <button
                  onClick={handleClose}
                  className="mt-6 rounded bg-brand-black px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-charcoal"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-h-[85vh] overflow-y-auto p-8 sm:p-10"
              >
                <h3 className="font-heading text-2xl font-bold text-brand-black">
                  Request Free Appraisal
                </h3>
                <p className="mt-2 text-sm text-brand-gray">
                  Fill in your details and we&apos;ll get back to you within 24
                  hours.
                </p>

                <div className="mt-6 space-y-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-1.5 block text-sm font-medium text-brand-black"
                    >
                      Full Name *
                    </label>
                    <input
                      {...register("fullName")}
                      type="text"
                      id="fullName"
                      placeholder="John Smith"
                      className={inputClass}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-brand-black"
                    >
                      Email Address *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-brand-black"
                    >
                      Phone Number *
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      id="phone"
                      placeholder="0400 000 000"
                      className={inputClass}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Suburb */}
                  <div>
                    <label
                      htmlFor="suburb"
                      className="mb-1.5 block text-sm font-medium text-brand-black"
                    >
                      Property Suburb *
                    </label>
                    <select
                      {...register("suburb")}
                      id="suburb"
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="">Select suburb...</option>
                      {perthSuburbs.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.suburb && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.suburb.message}
                      </p>
                    )}
                  </div>

                  {/* Situation */}
                  <div>
                    <p className="mb-2 text-sm font-medium text-brand-black">
                      Which best describes you? *
                    </p>
                    <div className="space-y-2">
                      {[
                        {
                          value: "new-property",
                          label: "I just bought an investment property",
                        },
                        {
                          value: "switching-manager",
                          label:
                            "I'm looking to switch property managers",
                        },
                        {
                          value: "exploring",
                          label:
                            "I'm exploring property management options",
                        },
                        {
                          value: "referred-by-broker",
                          label: "I was referred by a mortgage broker",
                        },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className="flex cursor-pointer items-center gap-3 rounded border border-brand-light-gray px-4 py-3 transition-colors hover:bg-brand-off-white has-[:checked]:border-brand-black has-[:checked]:bg-brand-off-white"
                        >
                          <input
                            {...register("situation")}
                            type="radio"
                            value={option.value}
                            className="accent-brand-black"
                          />
                          <span className="text-sm text-brand-charcoal">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                    {errors.situation && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.situation.message}
                      </p>
                    )}
                  </div>

                  {/* Conditional Broker Fields */}
                  <AnimatePresence>
                    {situation === "referred-by-broker" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 overflow-hidden"
                      >
                        <div>
                          <label
                            htmlFor="brokerName"
                            className="mb-1.5 block text-sm font-medium text-brand-black"
                          >
                            Broker Name
                          </label>
                          <input
                            {...register("brokerName")}
                            type="text"
                            id="brokerName"
                            placeholder="Enter your broker's name"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="brokerage"
                            className="mb-1.5 block text-sm font-medium text-brand-black"
                          >
                            Brokerage
                          </label>
                          <input
                            {...register("brokerage")}
                            type="text"
                            id="brokerage"
                            placeholder="Brokerage name"
                            className={inputClass}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Contact Time */}
                  <div>
                    <label
                      htmlFor="contactTime"
                      className="mb-1.5 block text-sm font-medium text-brand-black"
                    >
                      Best time to contact (optional)
                    </label>
                    <select
                      {...register("contactTime")}
                      id="contactTime"
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="">Any time</option>
                      <option value="morning">Morning (9am&ndash;12pm)</option>
                      <option value="afternoon">
                        Afternoon (12pm&ndash;5pm)
                      </option>
                      <option value="evening">Evening (5pm&ndash;7pm)</option>
                      <option value="weekends">Weekends</option>
                    </select>
                  </div>

                  {/* Newsletter */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      {...register("marketUpdates")}
                      type="checkbox"
                      className="mt-1 accent-brand-black"
                    />
                    <span className="text-sm text-brand-gray">
                      I&apos;d like to receive market updates and property
                      insights
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 w-full rounded bg-brand-green py-4 text-base font-bold text-white transition-all hover:bg-brand-green-dark disabled:opacity-60"
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Request Free Appraisal"
                  )}
                </button>

                <p className="mt-4 text-center text-xs text-brand-gray">
                  Your information is secure and will never be shared.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
