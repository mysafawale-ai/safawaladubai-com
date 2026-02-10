import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Premium Wedding Turbans in udubai | Safawala udubai Safa & Pagdi Services",
  description:
    "Safawala udubai - udubai's most trusted wedding turban specialists. Expert safa, pagdi, feta & sehra tying. Master specialists, same-day service. Free consultation. Book now: +91-9725295692",
  keywords:
    "wedding turban udubai, safa udubai, pagdi tying service udubai, groom turban udubai, wedding safa udubai, turban tying udubai, best turban service udubai, safa tying service udubai, pagdi design udubai, feta tying udubai, sehra service udubai",
  authors: [{ name: "Safawala udubai" }],
  creator: "Safawala udubai",
  publisher: "Safawala udubai",
  icons: {
    icon: "/image.png",
    shortcut: "/image.png",
    apple: "/image.png",
  },
  metadataBase: new URL("https://safawaladubai.com"),
  alternates: {
    canonical: "https://safawaladubai.com",
  },
  openGraph: {
    title: "Premium Wedding Turbans in udubai | Safawala udubai",
    description:
      "Expert safa, pagdi, feta & sehra tying for grooms, baraatis & destination weddings. Master specialists, same-day service.",
    url: "https://safawaladubai.com",
    siteName: "Safawala udubai",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safawala udubai - Wedding Turbans | Expert Safa & Pagdi Service",
    description: "40+ years of heritage. Master specialists, same-day service, premium quality.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "Wedding Services",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/image.png?v=1" type="image/png" />
        <link rel="shortcut icon" href="/image.png?v=1" type="image/png" />
        <link rel="apple-touch-icon" href="/image.png?v=1" />
        <meta name="theme-color" content="#8b1a1a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
