import type { Metadata, Viewport } from "next";
import { Dancing_Script, Manrope } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eshuis.vercel.app"),
  title: {
    default: "Gebr. Eshuis Transport — Vriezenveen",
    template: "%s · Gebr. Eshuis Transport",
  },
  description:
    "Gebroeders Eshuis Transport uit Vriezenveen: containertransport en internationaal wegvervoer met karakter. Neem contact met ons op.",
  keywords: [
    "Eshuis Transport",
    "Gebroeders Eshuis",
    "containertransport",
    "internationaal wegvervoer",
    "transport Vriezenveen",
    "transport Twente",
  ],
  applicationName: "Gebr. Eshuis Transport",
  authors: [{ name: "Gebr. Eshuis Transport" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gebr. Eshuis Transport — Vriezenveen",
    description:
      "Containertransport en internationaal wegvervoer met karakter, vanuit Vriezenveen.",
    url: "/",
    siteName: "Gebr. Eshuis Transport",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/fotos/hero.jpg",
        width: 1920,
        height: 1259,
        alt: "Vrachtwagen van Gebr. Eshuis Transport uit Vriezenveen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gebr. Eshuis Transport — Vriezenveen",
    description:
      "Containertransport en internationaal wegvervoer met karakter, vanuit Vriezenveen.",
    images: ["/fotos/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1d1610",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      suppressHydrationWarning
      className={`${dancingScript.variable} ${manrope.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
