import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
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
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="mt-3 text-sm text-white/50">
              Premium property management in Perth
            </p>
            <p className="mt-1 text-sm text-white/50">
              Part of the{" "}
              <a
                href="https://innogreen.net.au"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-white/70"
              >
                Innogreen
              </a>{" "}
              family
            </p>
            <p className="mt-2 text-xs text-white/30">
              NDIS services:{" "}
              <a
                href="https://innogreen.net.au"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-white/50"
              >
                Innogreen.net.au
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "Home", href: "#" },
                { label: "Our Approach", href: "#our-approach" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQs", href: "#faq" },
                { label: "Contact", href: "#final-cta" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white/80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                "New Property Owners",
                "Switching Managers",
                "Tenant Placement",
                "Property Inspections",
                "Maintenance Management",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/50">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Credentials */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Contact & Credentials
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+61400000000"
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white/80"
                >
                  <Phone className="h-4 w-4" />
                  Call Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@innogreenhomes.com.au"
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white/80"
                >
                  <Mail className="h-4 w-4" />
                  info@innogreenhomes.com.au
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <MapPin className="h-4 w-4" />
                Perth, WA
              </li>
              <li className="mt-4 text-xs text-white/40">License: RA82486</li>
              <li className="text-xs text-white/40">REIWA Member</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Innogreen Homes. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-white/30 transition-colors hover:text-white/50"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-white/30 transition-colors hover:text-white/50"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
