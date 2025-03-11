import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import MaxWidthWrapper from "@/components/max-width-wrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jokosantoso.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Deecodev Docs",
    template: "%s | Deecodev Docs",
  },
  description: "Frontend developer, optimist, community builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased tracking-tight", inter.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="relative flex flex-col min-h-svh">
            <Navbar />
            <MaxWidthWrapper className="space-y-6">{children}</MaxWidthWrapper>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
