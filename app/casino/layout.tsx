import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Dealer Teen Patti, Andar Bahar & VIP Casino Tables",
  description: "Experience real human dealers on private tables for Teen Patti, Andar Bahar, Blackjack, and Roulette.",
  keywords: ["live dealer teen patti","andar bahar live tables","vip roulette suite"],
  alternates: {
    canonical: "https://ramji247online.com/casino",
  },
  openGraph: {
    title: "Live Dealer Teen Patti, Andar Bahar & VIP Casino Tables | RAMJI247",
    description: "Experience real human dealers on private tables for Teen Patti, Andar Bahar, Blackjack, and Roulette.",
    url: "https://ramji247online.com/casino",
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
    title: "Live Dealer Teen Patti, Andar Bahar & VIP Casino Tables | RAMJI247",
    description: "Experience real human dealers on private tables for Teen Patti, Andar Bahar, Blackjack, and Roulette.",
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
