import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theaistrugglebus.com"),
  title: {
    default: "The AI Struggle Bus | AI Workflows for Small Business",
    template: "%s | The AI Struggle Bus",
  },
  description:
    "We help entrepreneurs, startups, and SMBs put AI to work behind the scenes. Embedded AI workflows that deliver measurable ROI in 30 days.",
  keywords: [
    "AI consulting",
    "small business AI",
    "AI automation",
    "SMB AI workflows",
    "AI readiness assessment",
  ],
  authors: [{ name: "The AI Struggle Bus" }],
  icons: {
    icon: "/images/aisb-logo.png",
    apple: "/images/aisb-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theaistrugglebus.com",
    siteName: "The AI Struggle Bus",
    title: "The AI Struggle Bus | AI Workflows for Small Business",
    description:
      "We help entrepreneurs, startups, and SMBs put AI to work behind the scenes. Embedded AI workflows that deliver measurable ROI in 30 days.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "The AI Struggle Bus - Vintage VW bus with AI logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The AI Struggle Bus | AI Workflows for Small Business",
    description:
      "We help entrepreneurs, startups, and SMBs put AI to work behind the scenes.",
    images: ["/images/og-image.png"],
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
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${openSans.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
