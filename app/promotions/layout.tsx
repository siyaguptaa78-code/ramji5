import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "VIP High-Roller Welcome Bonus & Weekly Cashback",
  description: "Bespoke reload incentives, personalized VIP cashbacks, and private tournament invitations on RAMJI247.",
  keywords: ["vip casino bonus","high roller rewards","weekly vip cashback"],
  alternates: {
    canonical: "https://ramji247online.com/promotions",
  },
  openGraph: {
    title: "VIP High-Roller Welcome Bonus & Weekly Cashback | RAMJI247",
    description: "Bespoke reload incentives, personalized VIP cashbacks, and private tournament invitations on RAMJI247.",
    url: "https://ramji247online.com/promotions",
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
    title: "VIP High-Roller Welcome Bonus & Weekly Cashback | RAMJI247",
    description: "Bespoke reload incentives, personalized VIP cashbacks, and private tournament invitations on RAMJI247.",
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
