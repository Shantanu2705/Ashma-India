import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AshmaIndia | Premium Water Purification & Industrial Solutions",
  description: "Providing advanced water purification, commercial RO systems, industrial water treatment solutions, chimney services, and maintenance support across India.",
  keywords: ["Water Purifier Services", "RO Installation", "Industrial RO Plant", "Water Treatment Solutions", "Chimney Services", "AMC Services"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans bg-ashma-grey dark:bg-background text-ashma-text dark:text-foreground">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
