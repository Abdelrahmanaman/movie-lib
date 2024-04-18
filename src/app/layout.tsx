import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the options",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-8 sm:px-4 sm:py-2 md:p-2">
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
