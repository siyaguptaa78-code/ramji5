import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "VIP Sports Trading & High-Liquidity Exchange",
  description: "High-limit sports exchange trading with institutional depth and priority WhatsApp settlement for VIP players.",
  keywords: ["vip sports exchange","high limit cricket id","vip betting desk"],
  alternates: {
    canonical: "https://ramji247online.com/sports",
  },
  openGraph: {
    title: "VIP Sports Trading & High-Liquidity Exchange | RAMJI247",
    description: "High-limit sports exchange trading with institutional depth and priority WhatsApp settlement for VIP players.",
    url: "https://ramji247online.com/sports",
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
    title: "VIP Sports Trading & High-Liquidity Exchange | RAMJI247",
    description: "High-limit sports exchange trading with institutional depth and priority WhatsApp settlement for VIP players.",
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
