export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Foca POS Asia",
  description: "Point of sale business",
  ogImage: "https://nextui.org/twitter-cards/nextui.jpeg",
  author: "aditya septama",
  email: "rfadityahalim18@gmail.com",
  siteUrl: "https://nextui.org",
  creator: "@adityamo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextui.org",
    siteName: "NextUI",
    description: "Beautiful, fast and modern React UI Library",
    images: [
      {
        url: "https://nextui.org/twitter-cards/nextui.jpeg",
        width: 1200,
        height: 630,
        alt: "NextUI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextUI - Beautiful, fast and modern React UI Library",
    description:
      "Make beautiful websites regardless of your design experience.",
    image: "https://nextui.org/twitter-cards/nextui.jpeg",
    creator: "@getnextui",
  },
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    portfolio: "https://jrgarciadev.com",
  },
  navItems: [
    { label: "Beranda", href: "/", haveChild: false },
    { label: "Fitur", href: "#fiture", haveChild: false },
    { label: "Layanan", href: "#services", haveChild: false },
    { label: "Hubungi Kami", href: "#contact", haveChild: false },
  ],
};
