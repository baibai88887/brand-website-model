import type { Metadata, Viewport } from "next";
import { Poppins, Lora } from "next/font/google";
import "./globals.css";

// Anthropic Brand Fonts
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const lora = Lora({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "品牌官网 - 极致创新，激发可能",
    template: "%s | 品牌官网"
  },
  description: "一家极致创新的全球化智能硬件科技企业，致力于成为全球消费者热爱的品牌",
  keywords: ["智能硬件", "科技创新", "充电设备", "智能家居", "智能影音", "能源管理"],
  authors: [{ name: "BRAND" }],
  creator: "BRAND",
  publisher: "BRAND",
  metadataBase: new URL('https://www.brand.com'),
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.brand.com",
    title: "品牌官网 - 极致创新，激发可能",
    description: "一家极致创新的全球化智能硬件科技企业，致力于成为全球消费者热爱的品牌",
    siteName: "BRAND",
  },
  twitter: {
    card: "summary_large_image",
    title: "品牌官网 - 极致创新，激发可能",
    description: "一家极致创新的全球化智能硬件科技企业，致力于成为全球消费者热爱的品牌",
    creator: "@brand",
  },
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
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf9f5' },
    { media: '(prefers-color-scheme: dark)', color: '#141413' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${poppins.variable} ${lora.variable}`}>
      <body className="font-sans antialiased text-brand-dark bg-brand-light">
        {children}
      </body>
    </html>
  );
}
