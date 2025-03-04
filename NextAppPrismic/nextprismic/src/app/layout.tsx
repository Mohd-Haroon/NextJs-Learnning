import type { Metadata,ResolvingMetadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { createClient } from "@/prismicio";

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})
const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {

  const client = createClient();

  const page = await client.getSingle("settings");
 
  return {
    title: page.data.site_title || 'Nextjs Something',
    description: page.data.meta_description || 'Nextjs Description',
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  }
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunito_sans.variable)}>
      <body>
        <header>header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
