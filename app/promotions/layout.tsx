import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Promotions, Welcome Offers & VIP Rewards",
  description: "Review current RAMJI247 promotional offers, welcome bonus terms, weekly cashback structures, and VIP concierge rewards via WhatsApp.",
  keywords: ["ramji247 promotions","welcome bonus offers","weekly vip rewards"],
  alternates: {
    canonical: "https://ramji247online.com/promotions",
  },
  openGraph: {
    title: "Promotions, Welcome Offers & VIP Rewards | RAMJI247",
    description: "Review current RAMJI247 promotional offers, welcome bonus terms, weekly cashback structures, and VIP concierge rewards via WhatsApp.",
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
    title: "Promotions, Welcome Offers & VIP Rewards | RAMJI247",
    description: "Review current RAMJI247 promotional offers, welcome bonus terms, weekly cashback structures, and VIP concierge rewards via WhatsApp.",
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
