import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body className={`${jetbrainsMono.variable} antialiased px-4`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
