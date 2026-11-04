import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "24/7 Official WhatsApp Support & Concierge Desk",
  description: "Contact the official RAMJI247 24/7 WhatsApp concierge desk (+91 8360750829) for account queries, platform guidance, and user support.",
  keywords: ["ramji247 contact","ramji247 whatsapp support","RAMJI247 vip desk"],
  alternates: {
    canonical: "https://ramji247online.com/contact",
  },
  openGraph: {
    title: "24/7 Official WhatsApp Support & Concierge Desk | RAMJI247",
    description: "Contact the official RAMJI247 24/7 WhatsApp concierge desk (+91 8360750829) for account queries, platform guidance, and user support.",
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
    title: "24/7 Official WhatsApp Support & Concierge Desk | RAMJI247",
    description: "Contact the official RAMJI247 24/7 WhatsApp concierge desk (+91 8360750829) for account queries, platform guidance, and user support.",
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
