"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto">
      {/* Hero */}
      <section>
        <motion.h1
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl lg:text-4xl xl:text-5xl leading-snug text-center text-[var(--primary)] font-bold mb-10"
        >
          Snowflake: Minimal, Privacy-focused web browser for{" "}
          <span className="text-[var(--orange)]">anonymous</span> web browsing.
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
        <div className="text-lg mb-8">
          &quot;Snowflake is an open-source web browser tailored for advanced
          users who demand uncompromising internet privacy and control, who
          refuse to be tracked.&quot;
          <br />
          <br />
          Please note this software is{" "}
          <span className="text-[var(--red)]">NOT</span> for everyone. Read{" "}
          <Link href="/privacy-policy" className="underline underline-offset-2">
            Privacy policy
          </Link>{" "}
          and{" "}
          <Link href="/terms-of-use" className="underline underline-offset-2">
            Terms of Use
          </Link>{" "}
          before installing it.
        </div>
        <Button>Download Now!</Button>
      </section>

      {/* Features */}
      <section>
        <Heading>Features</Heading>
      </section>
    </main>
  );
}
