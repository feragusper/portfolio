import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Fernando Pérez — Software Engineer",
  description: "Software Engineer with 20+ years building products across mobile, fintech, e-commerce, aviation, IoT and retail. Currently at REWE digital.",
  keywords: ["Software Engineer", "Android", "Kotlin", "Mobile", "Jetpack Compose", "Clean Architecture", "Tech Lead"],
  metadataBase: new URL("https://feragusper.vercel.app"),
  openGraph: {
    title: "Fernando Pérez — Software Engineer",
    description: "Software Engineer with 20+ years building products across mobile, fintech, e-commerce, aviation, IoT and retail.",
    url: "https://feragusper.vercel.app",
    siteName: "Fernando Pérez",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Fernando Pérez — Software Engineer",
    description: "Software Engineer with 20+ years building products across mobile, fintech, e-commerce, aviation, IoT and retail.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
