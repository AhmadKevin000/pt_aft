import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT AFT — Spesialis Cold Storage & Pendingin Industri",
  description:
    "Solusi cold storage & mesin pendingin industri terpercaya sejak 2010. Melayani penyimpanan daging, pangan, dan logistik berskala besar di seluruh Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#101012] text-neutral-100`}
      >
        {children}
      </body>
    </html>
  );
}
