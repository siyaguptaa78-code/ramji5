import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "24/7 Dedicated VIP WhatsApp Concierge Desk",
  description: "Direct access to your dedicated personal account manager on WhatsApp for immediate priority handling.",
  keywords: ["vip concierge whatsapp","personal account manager casino","RAMJI247 vip desk"],
  alternates: {
    canonical: "https://ramji247online.com/contact",
  },
  openGraph: {
    title: "24/7 Dedicated VIP WhatsApp Concierge Desk | RAMJI247",
    description: "Direct access to your dedicated personal account manager on WhatsApp for immediate priority handling.",
    url: "https://ramji247online.com/contact",
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
    title: "24/7 Dedicated VIP WhatsApp Concierge Desk | RAMJI247",
    description: "Direct access to your dedicated personal account manager on WhatsApp for immediate priority handling.",
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
