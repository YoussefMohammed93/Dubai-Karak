import "./globals.css";

import type { Metadata } from "next";

import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Geist, Merienda } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const merienda = Merienda({
  variable: "--font-merienda",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dubai Karak - Premium Street-Style Karak Tea",
  description:
    "Experience authentic Dubai street-style Karak tea crafted with finest Indian tea leaves and purified water. The first sip will take you far, leaving you with just one word: Waaaw!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${merienda.variable} font-sans antialiased`}
      >
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
