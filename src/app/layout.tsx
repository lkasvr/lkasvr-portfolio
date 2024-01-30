import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`https://www.${process.env.WEBSITE_DOMAIN}`),
  title: {
    default: 'Lucas Vieira',
    template: '%s | Desenvolvedor Full-Stack',
  },
  description: process.env.WEBSITE_DESCRIPTION,
  creator: 'Lucas Vieira',
  keywords: ['dev', 'desenvolvedor', 'javascript', 'java', 'SQL', 'front-end', 'frontend', 'back-end', 'backend', 'fullstack', 'full-stack', 'fullstack developer', 'developer'],
  openGraph: {
    title: 'Lucas Vieira | Desenvolvedor Full-Stack',
    description: process.env.WEBSITE_DESCRIPTION,
    images: {
      url: '_next/image?url=%2Fimages%2Fhero-image.png&w=640&q=75',
      width: 400,
      height: 400,
      alt: 'Lucas Vieira',
    },
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    noimageindex: false,
    nocache: false,
    'max-video-preview': 15,
    'max-image-preview': 'large',
    'max-snippet': 55,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      nocache: false,
      'max-video-preview': 15,
      'max-image-preview': 'large',
      'max-snippet': 55,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
