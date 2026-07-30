import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#050816',
};

export const metadata: Metadata = {
  title: 'Fluxora Studio | Landing Pages That Convert. Not Just Look Good.',
  description:
    'Fluxora Studio is an award-winning digital agency crafting ultra-high-converting landing pages for AI startups, SaaS companies, & luxury brands. Engineered with 3D WebGL, GSAP, & sub-second performance.',
  keywords: [
    'Fluxora Studio',
    'Landing Page Agency',
    'High Converting Landing Pages',
    'Next.js 15 Web Agency',
    '3D Web Design Agency',
    'SaaS Landing Page Design',
    'AI Startup Landing Page',
    'Luxury Web Design',
    'Awwwards Winning Website',
  ],
  authors: [{ name: 'Fluxora Studio Team' }],
  creator: 'Fluxora Studio',
  publisher: 'Fluxora Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fluxora-studio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Fluxora Studio | Landing Pages That Convert. Not Just Look Good.',
    description:
      'We craft bespoke, ultra-high-converting digital experiences for SaaS, AI startups, & luxury brands. 7-Day guaranteed delivery.',
    url: 'https://fluxora-studio.com',
    siteName: 'Fluxora Studio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Fluxora Studio Luxury Digital Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fluxora Studio | High-Converting Landing Pages',
    description: 'Bespoke 3D & GSAP Landing Pages for AI Startups, SaaS & Luxury Brands.',
    images: ['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Fluxora Studio',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    '@id': 'https://fluxora-studio.com',
    url: 'https://fluxora-studio.com',
    telephone: '+919999999999',
    priceRange: '₹20000 - ₹50000+',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Fluxora Innovation Tower',
      addressLocality: 'Cyber City',
      addressRegion: 'DL',
      postalCode: '110001',
      addressCountry: 'IN',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '20:00',
    },
    sameAs: [
      'https://instagram.com/fluxorastudio',
      'https://linkedin.com/company/fluxorastudio',
      'https://github.com/fluxorastudio',
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050816] text-[#F8FAFC] antialiased selection:bg-purple-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
