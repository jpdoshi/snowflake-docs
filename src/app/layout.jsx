import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { version } from "./utils/version";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Welcome - Snowflake browser by jpdoshi",
  description:
    "Snowflake: Minimal, Privacy focused web browser for anonymous web browsing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased px-5`}>
        <head>
          <link rel="icon" href="/icon.png" type="image/png" sizes="auto" />
        </head>
        <Header />
        {children}
        <Link
          href="https://github.com/jpdoshi/snowflake-browser"
          target="_blank"
          className="fixed right-0 bottom-0 m-5 bg-stone-800 text-lg text-[var(--yellow)]"
        >
          v{version}
        </Link>
        <Footer />
      </body>
    </html>
  );
}
