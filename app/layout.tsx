import type { Metadata } from 'next';
import './globals.css';
import { 
  Navbar, 
  Footer, 
  WhatsAppFloatingButton, 
  LiveTicker, 
  JsonLd,
  SITE_CONFIGS,
  GENERAL_FAQS
} from '@ramji/shared';

const config = SITE_CONFIGS.ramji5;

export const metadata: Metadata = {
  metadataBase: new URL('https://ramji247online.com'),
  title: {
    default: "RAMJI247 | Online Casino, Live Dealer & Sports Exchange",
    template: "%s | RAMJI247",
  },
  description: config.description,
  keywords: [
    "RAMJI247",
    "RAMJI247 Online",
    "Online Casino Information",
    "Live Teen Patti Guide",
    "Andar Bahar Live Dealer",
    "Live Casino Games India",
    "Sports Exchange Information",
    "RAMJI247 Support"
  ],
  authors: [{ name: config.name }],
  creator: config.name,
  publisher: config.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: config.domain,
  },
  verification: {
    google: 'QHfR0g1bulS-I8tEsyDo-oLU7Sm60PUXb3_HhMhSbvQ',
  },
  openGraph: {
    title: "RAMJI247 | Online Casino, Live Dealer & Sports Exchange",
    description: config.description,
    url: config.domain,
    siteName: config.name,
    images: [
      {
        url: '/images/logo.png',
        width: 1000,
        height: 216,
        alt: `${config.name} Official Logo`,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "RAMJI247 | Online Casino, Live Dealer & Sports Exchange",
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
        'publisher': {
          '@id': `${config.domain}/#organization`
        }
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
          'contactType': 'customer support',
          'availableLanguage': ['English', 'Hindi']
        }
      },
      {
        '@type': 'FAQPage',
        '@id': `${config.domain}/#faq`,
        'mainEntity': GENERAL_FAQS.map((faq) => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer,
          },
        })),
      }
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GHWFZJD0ZX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GHWFZJD0ZX');
            `,
          }}
        />
        <JsonLd data={jsonLdData} />
      </head>
      <body className="bg-[#0f0307] text-neutral-100 flex flex-col min-h-screen antialiased selection:bg-rose-600 selection:text-white">
        <LiveTicker badgeText="RAMJI247 VIP CLUB" />
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

