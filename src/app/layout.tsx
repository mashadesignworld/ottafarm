import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Otta Chicken Farm | Inventory Management System",
  description: "OttaFarm Inventory Management System",
  icons: {
    icon: '/favicon.ico', // PNG format
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <Providers> {/* Wrap children with your Providers component */}
          {children}
        </Providers>
      </body>
        
  
    </html>
  );
}
