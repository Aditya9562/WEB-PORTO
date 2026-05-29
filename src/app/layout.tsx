import type { Metadata } from "next";
import "./globals.css";
import { BackgroundGlow } from "@/components/ui/BackgroundGlow";

export const metadata: Metadata = {
  metadataBase: new URL("https://adityaputraafendi.com"),
  title: {
    default: "Aditya Putra Afendi | Project Coordinator & System Analyst",
    template: "%s | Aditya Putra Afendi"
  },
  description:
    "Portfolio of Aditya Putra Afendi, a Computer Engineering graduate focused on project coordination, system analysis, business process improvement, and technology operations.",
  keywords: [
    "Aditya Putra Afendi",
    "Project Coordinator",
    "System Analyst",
    "Computer Engineering",
    "Business Analyst",
    "Portfolio",
    "Bekasi Indonesia"
  ],
  authors: [{ name: "Aditya Putra Afendi" }],
  creator: "Aditya Putra Afendi",
  openGraph: {
    title: "Aditya Putra Afendi | Portfolio",
    description:
      "Modern portfolio for project coordination, system analysis, and technology operations.",
    url: "https://adityaputraafendi.com",
    siteName: "Aditya Putra Afendi",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Putra Afendi | Portfolio",
    description:
      "Project coordination, system analysis, business process improvement, and technology operations."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative overflow-x-hidden">
        <BackgroundGlow />
        {children}
      </body>
    </html>
  );
}
