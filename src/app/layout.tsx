import "@/styles/globals.css";
import { fontSans } from "@/config/font";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import { ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["Point Of Sale", "Pos", "Aplikasi Kasir"],
  icons: {
    icon: [
      // {
      //   media: "(prefers-color-scheme: light)",
      //   url: "/img/brand/smalllogo.png",
      //   href: "/img/brand/smalllogo.png",
      // },
      // {
      //   media: "(prefers-color-scheme: dark)",
      //   url: "/img/brand/smalllogo.png",
      //   href: "/img/brand/smalllogo.png",
      // },
    ],
  },
};

type Props = {
  children: ReactNode;
  // params: { locale: string; session: any };
};

export default async function RootLayout({ children }: Props) {
  return (
    <html className="">
      <head className="">
        <link rel="stylesheet" href="/assets/iconfonts/icons.css" />
      </head>
      <body className={`${fontSans.className}`}>
        <NextTopLoader
          color="#F5AD0D"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        {children}
      </body>
    </html>
  );
}
