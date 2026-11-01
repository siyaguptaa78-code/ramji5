import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "VIP Casino Gaming Terms & Fair Play Standards",
  description: "Certified RNG standards, high-limit settlement policies, and regulatory compliance disclosures.",
  keywords: ["casino fair play","rng certification online casino","RAMJI247 vip terms"],
  alternates: {
    canonical: "https://ramji247online.com/terms",
  },
  openGraph: {
    title: "VIP Casino Gaming Terms & Fair Play Standards | RAMJI247",
    description: "Certified RNG standards, high-limit settlement policies, and regulatory compliance disclosures.",
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
    title: "VIP Casino Gaming Terms & Fair Play Standards | RAMJI247",
    description: "Certified RNG standards, high-limit settlement policies, and regulatory compliance disclosures.",
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
