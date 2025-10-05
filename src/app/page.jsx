"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="container mx-auto">
      <motion.h1
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-2xl lg:text-4xl xl:text-5xl leading-snug text-center text-[var(--primary)] font-bold mb-10"
      >
        Snowflake: Minimal, Privacy focused web browser for anonymous web
        browsing
      </motion.h1>
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full mx-auto aspect-video mb-12 rounded-md lg:rounded-lg shadow-xl lg:shadow-2xl shadow-stone-900"
      >
        <Image
          src="/images/screenshot.png"
          alt="logo"
          fill
          loading="lazy"
          className="rounded-md lg:rounded-lg border border-stone-800"
        />
      </motion.div>
      <Button>Download Now!</Button>
    </main>
  );
}
