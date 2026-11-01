import type { Metadata } from 'next';
import './globals.css';
import { 
  Navbar, 
  Footer, 
  WhatsAppFloatingButton, 
  LiveTicker, 
  JsonLd,
  SITE_CONFIGS 
} from '@ramji/shared';

const config = SITE_CONFIGS.ramji5;

export const metadata: Metadata = {
  metadataBase: new URL('https://ramji247online.com'),
  title: {
    default: "RAMJI247 | Exclusive High-Roller VIP Lounge & Live Dealer Casino Suite",
    template: "%s | RAMJI247",
  },
  description: config.description,
  keywords:   [
      "RAMJI247 Online",
      "Online Casino ID India",
      "Live Teen Patti Real Cash ID",
      "Andar Bahar Live Dealer",
      "Aviator Game Online ID",
      "Lightning Roulette Live India",
      "VIP Casino Lounge",
      "Casino ID WhatsApp Number",
      "Evolution Live Casino ID"
  ],
  authors: [{ name: config.name }],
  creator: config.name,
  publisher: config.name,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: config.domain,
  },
  verification: {
    google: 'QHfR0g1bulS-I8tEsyDo-oLU7Sm60PUXb3_HhMhSbvQ',
  },
  openGraph: {
    title: `${config.name} | Elite VIP Betting Lounge & Casino`,
    description: config.description,
    url: config.domain,
    siteName: config.name,
    images: [
      {
        url: '/images/logo.png',
        width: 1000,
        height: 216,
        alt: `${config.name} VIP Brand Logo`,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${config.name} | Exclusive VIP Sports ID on WhatsApp`,
    description: config.description,
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${config.domain}/#website`,
        'url': config.domain,
        'name': config.name,
        'description': config.description,
      },
      {
        '@type': 'Organization',
        '@id': `${config.domain}/#organization`,
        'name': config.name,
        'url': config.domain,
        'logo': `${config.domain}/images/logo.png`,
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': `+91-${config.whatsappNumber}`,
          'contactType': 'vip concierge',
        }
      }
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd data={jsonLdData} />
      </head>
      <body className="bg-[#0f0307] text-neutral-100 flex flex-col min-h-screen antialiased selection:bg-rose-600 selection:text-white">
        <LiveTicker badgeText="RAMJI5 VIP CLUB" />
        <Navbar 
          siteName={config.name} 
          brandNumber={config.brandNumber}
          accentColor="text-rose-400 border-rose-500/30"
          badgeStyle="bg-rose-500/10 text-rose-400"
        />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer 
          siteName={config.name} 
          brandNumber={config.brandNumber} 
          tagline={config.tagline} 
        />
        <WhatsAppFloatingButton 
          siteName={config.name} 
          customMessage={config.defaultWhatsAppMessage} 
        />
      </body>
    </html>
  );
}

