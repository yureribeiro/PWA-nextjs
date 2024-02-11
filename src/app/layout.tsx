import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "PWA Next.js",
  description: "testando uma aplicação pwa com next.js 14.1.0",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  manifest: "/manifest.json",
  authors: [{ name: "Yure Ribeiro" }, { name: "Yure Ribeiro", url: "https://github.com/yureribeiro" }],
  viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};