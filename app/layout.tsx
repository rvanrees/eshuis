import type { Metadata } from "next";
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
  title: "Gebr. Eshuis Transport — Vriezenveen",
  description:
    "Gebroeders Eshuis Transport uit Vriezenveen: containertransport en internationaal wegvervoer met karakter. Neem contact met ons op.",
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
