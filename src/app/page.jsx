"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";

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
            className="rounded lg:rounded-lg border border-stone-800"
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
        <p className="text-center text-lg mb-8">
          Check out dedicated features of Snowflake browser as shown below
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          <FeatureCard>
            <div className="flex justify-center my-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center text-[var(--green)]">
              Private by default
            </h3>
            <p className="mt-2">
              Provides solid default settings for privacy protection.
            </p>
          </FeatureCard>
          <FeatureCard>
            <div className="flex justify-center my-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center text-[var(--green)]">
              Solid Security
            </h3>
            <p className="mt-2">
              Blocks Ads, trackers and unsafe requests with filter lists
              support.
            </p>
          </FeatureCard>
          <FeatureCard>
            <div className="flex justify-center my-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center text-[var(--green)]">
              Blazing Fast
            </h3>
            <p className="mt-2">
              Uses stripped out chromium out of the box. No Google services. No
              bloat.
            </p>
          </FeatureCard>
          <FeatureCard>
            <div className="flex justify-center my-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center text-[var(--green)]">
              Telemetry OFF
            </h3>
            <p className="mt-2">
              Doesn't collect users' data or history. nowhere. not at all.
            </p>
          </FeatureCard>
        </div>
      </section>
    </main>
  );
}
