import type { Metadata } from "next"
import { Geist_Mono, Roboto, Playfair_Display } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
})

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "The Maine Real Estate Experience | Eve Ali — Buyer's Agent",
    template: "%s | The Maine Real Estate Experience",
  },
  description:
    "Eve Ali is a buyer's agent based in Auburn, Maine. She helps people — especially first-time buyers — navigate the home buying process honestly and without pressure.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        roboto.variable,
        playfairDisplayHeading.variable
      )}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
