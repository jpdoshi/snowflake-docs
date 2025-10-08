"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import FAQAccordion from "@/components/FAQAccordion";

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
          <span className="text-[var(--orange)]">Anonymous</span> web browsing.
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
        <Button>
          <Link
            href="https://github.com/jpdoshi/snowflake-browser/releases"
            target="_blank"
          >
            Download Now!
          </Link>
        </Button>
      </section>

      {/* Features */}
      <section>
        <Heading>Features</Heading>
        <p className="text-center text-lg mb-8">
          Check out dedicated features of Snowflake browser as shown below:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
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
              Doesn't collect users' data or history. nowhere. at all.
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
                  d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center text-[var(--green)]">
              Programmer Themes
            </h3>
            <p className="mt-2">
              Gives out unique look & vibe with popular high-contrast programmer
              themes.
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
                  d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center text-[var(--green)]">
              Anti-Fingerprint
            </h3>
            <p className="mt-2">
              Resists fingerprinting to prevent websites trying to track users.
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
                <polyline points="0.5 11.04 12 11.04 23.5 11.04" />
                <path d="M19.67,11H4.33L5,4.68A2.54,2.54,0,0,1,7.57,2.42h0a2.47,2.47,0,0,1,1.13.27h0a7.43,7.43,0,0,0,6.6,0h0a2.47,2.47,0,0,1,1.13-.27h0A2.54,2.54,0,0,1,19,4.68Z" />
                <circle cx="6.73" cy="18.23" r="3.35" />
                <circle cx="17.27" cy="18.23" r="3.35" />
                <path d="M10.08,18.71a1.92,1.92,0,1,1,3.84,0" />
                <line x1="1.46" y1="15.83" x2="4.33" y2="15.83" />
                <line x1="19.67" y1="15.83" x2="22.54" y2="15.83" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center text-[var(--green)]">
              Anonymous browsing
            </h3>
            <p className="mt-2">
              Supports Proxy and TOR for additional security layer to prevent
              trail.
            </p>
          </FeatureCard>
          <FeatureCard>
            <div className="flex justify-center my-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 32 32"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12"
              >
                <path d="M23.438 16.266c-1.016-0.922-2.297-1.667-3.604-2.411-0.594-0.328-2.417-1.755-1.786-3.781l-1.135-0.479c1.786-2.771 4.115-5.51 6.969-8.073-2.292 0.771-4.318 1.964-5.839 4.078 0.896-1.875 2.354-3.724 3.964-5.599-2.203 1.578-4.109 3.365-5.302 5.75l0.833-3.339c-1.193 2.146-2.026 4.323-2.354 6.495l-1.755-0.714-0.297 0.24c1.547 2.771 0.745 4.229-0.031 4.74-1.547 1.042-3.781 2.38-4.917 3.542-2.146 2.208-2.771 4.292-2.563 7.063 0.208 3.547 2.802 6.495 6.229 7.656 1.521 0.51 2.917 0.568 4.469 0.568 2.5 0 5.063-0.656 6.943-2.234 1.995-1.656 3.151-4.109 3.156-6.703 0.010-2.583-1.073-5.052-2.979-6.797zM18.698 28.099c-0.12 0.536-0.505 1.193-0.979 1.786 0.177-0.328 0.328-0.656 0.417-1.016 0.745-2.651 1.073-3.87 0.714-6.792-0.057-0.297-0.177-1.25-0.625-2.292-0.625-1.583-1.578-3.073-1.698-3.401-0.208-0.505-0.505-2.651-0.536-4.109 0.031 1.25 0.12 3.542 0.448 4.438 0.089 0.302 0.953 1.641 1.578 3.276 0.417 1.135 0.505 2.177 0.594 2.474 0.302 1.344-0.057 3.609-0.531 5.75-0.151 0.776-0.568 1.672-1.104 2.354 0.297-0.417 0.536-0.953 0.714-1.578 0.359-1.25 0.505-2.859 0.474-3.875-0.026-0.594-0.297-1.875-0.745-3.036-0.266-0.625-0.656-1.281-0.922-1.729-0.297-0.448-0.297-1.427-0.417-2.563 0.026 1.224-0.089 1.849 0.208 2.714 0.177 0.505 0.833 1.219 1.010 1.906 0.271 0.922 0.536 1.938 0.51 2.563 0 0.714-0.031 2.026-0.359 3.458-0.208 1.068-0.688 1.995-1.458 2.589 0.328-0.417 0.505-0.833 0.594-1.25 0.12-0.625 0.151-1.224 0.208-1.969 0.063-0.766 0.010-1.542-0.146-2.292-0.24-1.073-0.625-2.146-0.807-2.891 0.031 0.833 0.359 1.875 0.51 2.979 0.115 0.807 0.057 1.609 0.026 2.323-0.026 0.833-0.297 2.297-0.656 3.010-0.359-0.151-0.474-0.359-0.714-0.656-0.302-0.385-0.479-0.802-0.656-1.281-0.167-0.396-0.297-0.802-0.391-1.219-0.141-1.047 0.13-2.099 0.745-2.953 0.625-0.896 0.75-0.953 0.953-1.995-0.297 0.922-0.505 1.010-1.161 1.786-0.745 0.865-0.859 2.115-0.859 3.13 0 0.417 0.177 0.896 0.328 1.344 0.177 0.474 0.354 0.948 0.594 1.307 0.177 0.297 0.417 0.505 0.625 0.656-0.776-0.208-1.578-0.505-2.083-0.922-1.25-1.078-2.354-2.891-2.505-4.5-0.12-1.313 1.073-3.219 2.771-4.172 1.432-0.833 1.76-1.76 2.057-3.281-0.417 1.313-0.833 2.448-2.208 3.13-1.964 1.073-2.979 2.802-2.885 4.469 0.146 2.115 0.979 3.578 2.682 4.74 0.385 0.271 0.922 0.536 1.49 0.745-2.12-0.505-2.385-0.802-3.099-1.635 0-0.063-0.182-0.182-0.182-0.208-0.953-1.073-2.141-2.922-2.563-4.62-0.146-0.594-0.297-1.219-0.115-1.818 0.771-2.802 2.469-3.875 4.167-5.031 0.422-0.302 0.839-0.568 1.224-0.865 0.953-0.75 1.193-2.682 1.401-3.786-0.385 1.344-0.807 3.010-1.552 3.547-0.385 0.297-0.865 0.536-1.25 0.802-1.755 1.193-3.516 2.328-4.318 5.214-0.182 0.75-0.063 1.286 0.115 2 0.448 1.755 1.641 3.661 2.656 4.797l0.177 0.177c0.448 0.51 1.016 0.896 1.698 1.161-0.599-0.141-1.177-0.349-1.729-0.625-2.771-1.339-4.615-4.229-4.734-6.583-0.24-4.797 2.057-6.198 4.198-7.958 1.193-0.979 2.865-1.458 3.818-3.214 0.177-0.391 0.297-1.224 0.057-2.12-0.089-0.297-0.536-1.37-0.714-1.609l2.651 1.167c-0.057 1.25-0.089 2.26 0.146 3.188 0.271 1.010 1.583 2.469 2.12 4.172 1.042 3.214 0.776 7.411 0.026 10.693z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center text-[var(--green)]">
              Onion Support
            </h3>
            <p className="mt-2">
              Supports TOR socks proxy to visit onion websites.
            </p>
          </FeatureCard>
        </div>
      </section>

      {/* FAQs */}
      <section>
        <Heading>FAQs</Heading>
        <p className="text-center text-lg mb-8">
          Check out Frequently Asked Questions for basic understanding of the
          software:
        </p>
        <FAQAccordion />
      </section>
    </main>
  );
}
