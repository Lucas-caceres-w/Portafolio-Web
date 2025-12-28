import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
   variable: '--font-geist-sans',
   subsets: ['latin'],
});

const geistMono = Geist_Mono({
   variable: '--font-geist-mono',
   subsets: ['latin'],
});

export const metadata: Metadata = {
   title: {
      default: 'EMZ Multimedia Design | Desarrollo Web, Diseño y Video',
      template: '%s | EMZ Multimedia Design',
   },
   icons: {
      icon: { url: '/assets/logo.png' },
   },
   description:
      'Agencia digital especializada en desarrollo web, diseño visual, motion graphics y productos digitales. Creamos experiencias que convierten.',
   keywords: [
      'desarrollo web',
      'diseño gráfico',
      'motion graphics',
      'video',
      'agencia digital',
      'next.js',
      'react',
      'laravel',
      'adobe after effets',
      'adobe illustrator',
      'adobe premiere',
      'branding',
   ],
   authors: [{ name: 'EMZ Multimedia Design' }],
   creator: 'EMZ Multimedia Design',
   publisher: 'EMZ Multimedia Design',
   robots: {
      index: true,
      follow: true,
   },
   openGraph: {
      type: 'website',
      locale: 'es_AR',
      url: 'https://emzmultimedia.com',
      siteName: 'EMZ Multimedia Design',
      title: 'EMZ Multimedia Design | Agencia Digital',
      description:
         'Desarrollo web, diseño y motion graphics para marcas que buscan destacar.',
      images: [
         {
            url: '/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'EMZ Multimedia Design',
         },
      ],
   },
   twitter: {
      card: 'summary_large_image',
      title: 'EMZ Multimedia Design',
      description: 'Agencia digital especializada en web, diseño y video.',
      images: ['/og-image.jpg'],
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="es">
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
            {children}
         </body>
         <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
               __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'Organization',
                  name: 'EMZ Multimedia Design',
                  url: 'https://emzmultimedia.com',
                  logo: 'https://emzmultimedia.com/logo.png',
                  sameAs: [
                     'https://www.instagram.com/...',
                     'https://www.behance.net/...',
                  ],
                  description:
                     'Agencia digital especializada en desarrollo web, diseño y video.',
               }),
            }}
         />
      </html>
   );
}
