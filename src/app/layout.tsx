import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ashiq.pro.bd"),

  title: {
    default: "Md Shoriful Islam Ashiq",
    template: "%s | Md Shoriful Islam Ashiq",
  },
  description: "Md Shoriful Islam Ashiq - Co-Founder & COO of Midgen. Building AI-powered SaaS products. Expert in operations leadership, content creation tools. Leading operations, scaling teams, team management, and scaling startups. Based in Bangladesh.",
  applicationName: "Ashiq Portfolio",
  authors: [{ name: "Md Shoriful Islam Ashiq", url: "https://ashiq.pro.bd" }],
  generator: "Next.js",
  keywords: [
    "Md Shoriful Islam Ashiq",
    "Ashiq",
    "Ashiq CPCCU",
    "Ashiq CUCC",
    "Ashiq CUPC",
    "Ashiq City",
    "Ashiq University",
    "Mdsiaofficial",
    "mdsiaofficial",
    "Co-Founder",
    "COO",
    "Chief Operating Officer",
    "Midgen",
    "AI",
    "SaaS",
    "Startup Founder",
    "Operations Leader",
    "Tech Entrepreneur",
    "Team Management",
    "Bangladesh Tech",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "AI Products",
    "Business Growth",
    "ashiq.pro.bd",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Md Shoriful Islam Ashiq",
  publisher: "Midgen",
  category: "technology",
  classification: "Personal Portfolio",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://ashiq.pro.bd",
    languages: {
      "en-US": "https://ashiq.pro.bd",
      "bn-BD": "https://ashiq.pro.bd",
    },
    // media: {
    //   "only screen and (max-width: 600px)": "https://ashiq.pro.bd",
    // },
    // types: {
    //   "application/rss+xml": "https://ashiq.pro.bd/rss",
    // },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: ["/shortcut-icon.png"],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#10b981",
      },
    ],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Md Shoriful Islam Ashiq | Co-Founder & COO @ Midgen",
    description: "Md Shoriful Islam Ashiq - Co-Founder & COO of Midgen. Building AI-powered SaaS products. 10K+ users served. Expert in operations and team leadership.",
    url: "https://ashiq.pro.bd",
    siteName: "Ashiq Portfolio - Md Shoriful Islam Ashiq",
    images: [
      {
        url: "https://ashiq.pro.bd/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Md Shoriful Islam Ashiq - Co-Founder & COO of Midgen",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Bangladesh",
    emails: ["ashiq@midgen.ai"],
    phoneNumbers: ["+880123456789"],
    determiner: "",
  },

  twitter: {
    card: "summary_large_image",
    title: "Md Shoriful Islam Ashiq | Co-Founder & COO",
    description: "Co-Founder & COO of Midgen. Building AI-powered products. 10K+ users. Expert in operations & team leadership.",
    site: "@mdsiaofficial",
    creator: "@mdsiaofficial",
    images: ["https://ashiq.pro.bd/twitter-image.jpg"],
  },

  appleWebApp: {
    capable: true,
    title: "Ashiq Portfolio",
    statusBarStyle: "black-translucent",
  },

  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },

  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  //   maximumScale: 1,
  //   userScalable: false,
  //   viewportFit: "cover",
  // },

  verification: {
    google: "google-site-verification-code",
    other: {
      me: ["ashiq@midgen.ai"],
    },
  },

  other: {
    "theme-color": "#0f172a",
    "color-scheme": "dark",
    "mobile-web-app-capable": "yes",
    "og:region": "Bangladesh",
    "og:country-name": "Bangladesh",
    "author": "Md Shoriful Islam Ashiq",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
