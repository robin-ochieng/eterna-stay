import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageWrapper } from "@/components/page-wrapper";
import { SEOJsonLd } from "../components/seo-jsonld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "EternaStay",
    template: "%s · EternaStay",
  },
  description: "Boutique stays in Mombasa, Kenya.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://example.com/",
    siteName: "EternaStay",
    title: "EternaStay",
    description: "Boutique stays in Mombasa, Kenya.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EternaStay",
    description: "Boutique stays in Mombasa, Kenya.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SEOJsonLd />
      </head>
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <SiteHeader />
          <main id="main-content" role="main" className="min-h-[60vh]">
            <PageWrapper>{children}</PageWrapper>
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
