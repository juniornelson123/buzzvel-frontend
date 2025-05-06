import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teach",
  description: "Custom Software Development | Software Design Company - Teach",
  keywords: ["carousel", "nextjs", "tailwind", "galeria", "react"],
  authors: [{ name: "Teach", url: "https://teach.com" }],
  icons: {
    icon: "/favicon/favicon.ico",
  },
  openGraph: {
    title: "Teach",
    description: "Custom Software Development | Software Design Company - Teach",
    url: "https://teach.com",
    siteName: "Teach",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-sans`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
