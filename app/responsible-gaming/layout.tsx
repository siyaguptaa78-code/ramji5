import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Responsible Gaming & 18+ Player Protection",
  description: "Learn about RAMJI247 18+ responsible gaming policies, session discipline guidelines, bankroll limits, and WhatsApp self-exclusion tools.",
  keywords: ["ramji247 responsible gaming","18+ player protection","self exclusion tools"],
  alternates: {
    canonical: "https://ramji247online.com/responsible-gaming",
  },
  openGraph: {
    title: "Responsible Gaming & 18+ Player Protection | RAMJI247",
    description: "Learn about RAMJI247 18+ responsible gaming policies, session discipline guidelines, bankroll limits, and WhatsApp self-exclusion tools.",
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
    title: "Responsible Gaming & 18+ Player Protection | RAMJI247",
    description: "Learn about RAMJI247 18+ responsible gaming policies, session discipline guidelines, bankroll limits, and WhatsApp self-exclusion tools.",
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
