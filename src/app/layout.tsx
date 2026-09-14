import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/tokens.css";
import "./globals.css";

const gt_bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const gt_inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const gt_jetbrainsmono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mitchel Rosado — Full Stack Developer",
  description: "Portfolio y proyects",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${gt_bricolage.variable} ${gt_inter.variable} ${gt_jetbrainsmono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
