import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "VIP Responsible Gaming & Self-Exclusion Lounge",
  description: "Discreet and comprehensive tools for high-roller bankroll safeguarding, cooling off, and self-exclusion.",
  keywords: ["vip responsible gaming","high limit cooling off","safe gaming concierge"],
  alternates: {
    canonical: "https://ramji247online.com/responsible-gaming",
  },
  openGraph: {
    title: "VIP Responsible Gaming & Self-Exclusion Lounge | RAMJI247",
    description: "Discreet and comprehensive tools for high-roller bankroll safeguarding, cooling off, and self-exclusion.",
    url: "https://ramji247online.com/responsible-gaming",
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
    title: "VIP Responsible Gaming & Self-Exclusion Lounge | RAMJI247",
    description: "Discreet and comprehensive tools for high-roller bankroll safeguarding, cooling off, and self-exclusion.",
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
