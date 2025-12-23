import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins", 
});

export const metadata: Metadata = {

  title: 'BetterMontessori – Track Your Child’s Growth',
  description: 'The all-in-one app for parents to track moods, meals, and milestones in their child’s Montessori journey.',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
      {children}
      </body>
    </html>
  );
}
