import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Workshop SUI - Frontend",
    template: "%s | Workshop SUI",
  },
  description:
    "Interactive workshop for building decentralized applications on the SUI blockchain. Learn to create modern Web3 frontends with Next.js and SUI dApp Kit.",
  keywords: [
    "SUI",
    "blockchain",
    "Web3",
    "dApp",
    "workshop",
    "frontend",
    "Next.js",
    "React",
    "cryptocurrency",
    "decentralized",
    "SUI dApp Kit",
    "smart contracts",
  ],

  authors: [
    {
      name: "Workshop SUI Team",
    },
  ],
  creator: "Workshop SUI Team",
  publisher: "Workshop SUI",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://workshop-sui.vercel.app",
    title: "Workshop SUI - Frontend",
    description:
      "Interactive workshop for building decentralized applications on the SUI blockchain. Learn to create modern Web3 frontends with Next.js and SUI dApp Kit.",
    siteName: "Workshop SUI",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Workshop SUI Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Workshop SUI - Frontend",
    description:
      "Interactive workshop for building decentralized applications on the SUI blockchain. Learn to create modern Web3 frontends with Next.js and SUI dApp Kit.",
    images: ["/android-chrome-512x512.png"],
    creator: "@suinetwork",
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },

  manifest: "/site.webmanifest",

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground bg-grid min-h-screen">
        <main className="mx-2 sm:mx-8 md:mx-16 lg:mx-28 xl:mx-28 my-32">
          {children}
        </main>
      </body>
    </html>
  );
}
