import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Casino Tables, Teen Patti & Andar Bahar",
  description: "Explore RAMJI247 live dealer casino guides for Teen Patti, Andar Bahar, Roulette, Blackjack, and crash games with 24/7 WhatsApp assistance.",
  keywords: ["live dealer teen patti","andar bahar live tables","ramji247 online casino"],
  alternates: {
    canonical: "https://ramji247online.com/casino",
  },
  openGraph: {
    title: "Live Casino Tables, Teen Patti & Andar Bahar | RAMJI247",
    description: "Explore RAMJI247 live dealer casino guides for Teen Patti, Andar Bahar, Roulette, Blackjack, and crash games with 24/7 WhatsApp assistance.",
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
    title: "Live Casino Tables, Teen Patti & Andar Bahar | RAMJI247",
    description: "Explore RAMJI247 live dealer casino guides for Teen Patti, Andar Bahar, Roulette, Blackjack, and crash games with 24/7 WhatsApp assistance.",
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
