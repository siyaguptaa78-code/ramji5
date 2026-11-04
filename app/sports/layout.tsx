import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sports Exchange Markets & Live Cricket Odds",
  description: "View live cricket, football, and tennis exchange markets on RAMJI247 with real-time odds depth, fixture schedules, and WhatsApp support.",
  keywords: ["ramji247 sports exchange","live cricket odds","in-play sports markets"],
  alternates: {
    canonical: "https://ramji247online.com/sports",
  },
  openGraph: {
    title: "Sports Exchange Markets & Live Cricket Odds | RAMJI247",
    description: "View live cricket, football, and tennis exchange markets on RAMJI247 with real-time odds depth, fixture schedules, and WhatsApp support.",
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
    title: "Sports Exchange Markets & Live Cricket Odds | RAMJI247",
    description: "View live cricket, football, and tennis exchange markets on RAMJI247 with real-time odds depth, fixture schedules, and WhatsApp support.",
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
