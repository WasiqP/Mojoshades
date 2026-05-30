import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mojoshades.com"),
  title: {
    default: "Mojoshades — Lips, in their boldest form",
    template: "%s — Mojoshades",
  },
  description:
    "A lipstick house for those who refuse to blend in. Molten reds, liquid chrome, midnight plums. Editorial color, made to be worn loud.",
  openGraph: {
    title: "Mojoshades — Lips, in their boldest form",
    description:
      "A lipstick house for those who refuse to blend in. Editorial color, made to be worn loud.",
    type: "website",
    siteName: "Mojoshades",
    images: ["/images/hero-lips.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body className="font-body antialiased">
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
