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
    default: "Sarah Mitchell | Buyer's Agent — Austin, TX",
    template: "%s | Sarah Mitchell Real Estate",
  },
  description:
    "Sarah Mitchell is a dedicated real estate buyer's agent in Austin, TX. Helping home buyers find their perfect home with confidence, clarity, and expert negotiation.",
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
