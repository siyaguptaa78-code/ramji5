import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service & Platform Guidelines",
  description: "Read the RAMJI247 Terms of Service, 18+ age eligibility requirements, informational platform scope, and fair play user guidelines.",
  keywords: ["ramji247 terms of service","platform guidelines","RAMJI247 user terms"],
  alternates: {
    canonical: "https://ramji247online.com/terms",
  },
  openGraph: {
    title: "Terms of Service & Platform Guidelines | RAMJI247",
    description: "Read the RAMJI247 Terms of Service, 18+ age eligibility requirements, informational platform scope, and fair play user guidelines.",
    url: "https://ramji247online.com/terms",
    siteName: "RAMJI247",
    images: [
      {
        url: '/images/logo.png',
        width: 1000,
        height: 216,
        alt: "RAMJI247 Official Logo",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Terms of Service & Platform Guidelines | RAMJI247",
    description: "Read the RAMJI247 Terms of Service, 18+ age eligibility requirements, informational platform scope, and fair play user guidelines.",
    images: ['/images/logo.png'],
  },
};

export default function SubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
