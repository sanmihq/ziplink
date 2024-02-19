import type { Metadata } from "next";
import { Lexend, Poppins, Space_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./components/Header";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "Ziplink - Your Custom URL Shortener",
  title: "Ziplink - Your Custom URL Shortener",
  description: "Create concise and shareable links effortlessly with Ziplink.",
  keywords: ["Ziplink", "URL Shortener", "Link Shortener"],
  authors: [{ name: "Sanmihq", url: "https://github.com/sanmihq" }],
  creator: "Sanmi Akinwunmi, Sanmihq",
  publisher: "Sanmihq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${spaceMono.className} mx-auto max-w-[100rem]`}>
        <Providers>
          <Header />
          <main className="mx-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
