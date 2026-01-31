import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Innogreen Homes | Premium Property Management in Perth",
  description:
    "Perth's premium property management service. Expert management for new investors and landlords switching managers. Licensed agency RA82486. Get a free property appraisal today.",
  keywords: [
    "property management Perth",
    "rental management Perth",
    "investment property Perth",
    "property manager Western Australia",
    "Innogreen Homes",
    "premium property management",
    "tenant management Perth",
    "switch property manager Perth",
    "new property investor Perth",
  ],
  openGraph: {
    title: "Innogreen Homes | Premium Property Management in Perth",
    description:
      "Your investment property, professionally managed. Maximum returns, zero hassle. Expert management for new investors and those switching managers.",
    type: "website",
    locale: "en_AU",
    siteName: "Innogreen Homes",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Innogreen Homes",
              description:
                "Premium property management service in Perth, Western Australia.",
              url: "https://innogreenhomes.com.au",
              telephone: "+61400000000",
              email: "info@innogreenhomes.com.au",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Perth",
                addressRegion: "WA",
                addressCountry: "AU",
              },
              areaServed: {
                "@type": "City",
                name: "Perth",
              },
              priceRange: "8% + GST",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "100",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
