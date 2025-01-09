import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BaseHeader } from "@/components/BaseHeader/BaseHeader";
import { CartProvider } from "@/providers/CartProvider/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Burger",
  description: "Next generation Burger Ordering System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-wrap p-10 max-w-screen-lg justify-center mx-auto`}
      >
        <CartProvider>
          <BaseHeader />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
