import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div>
          <Image
            src="/icon.png"
            alt="logo"
            height={80}
            width={80}
            loading="lazy"
          />
          <div className="mt-3 space-y-1">
            <h2 className="text-2xl font-bold text-[var(--primary)]">
              Snowflake Browser
            </h2>
            <p>
              Made by{" "}
              <Link
                href="https://github.com/jpdoshi"
                className="font-medium underline underline-offset-3"
                target="_blank"
              >
                jpdoshi
              </Link>
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-xl text-[var(--primary)]">
            Resources
          </h3>
          <ul className="mt-4 text-base underline underline-offset-2 space-y-2 text-[#a89984]">
            <li>
              <Link href="https://github.com/jpdoshi/snowflake-browser">
                Github Repo
              </Link>
            </li>
            <li>
              <Link href="https://github.com/jpdoshi/snowflake-browser/blob/main/README.md">
                Setup instructions
              </Link>
            </li>
            <li>
              <Link href="https://github.com/jpdoshi/snowflake-browser/releases">
                Releases
              </Link>
            </li>
            <li>
              <Link href="https://github.com/jpdoshi/snowflake-browser/issues">
                Report an Issue
              </Link>
            </li>
            <li>
              <Link href="mailto:jpdoshi2811@gmail.com">Contact Me</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-xl text-[var(--primary)]">Legal</h3>
          <ul className="mt-4 text-base underline underline-offset-2 space-y-2 text-[#a89984]">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-use">Terms of Use</Link>
            </li>
            <li>
              <Link href="https://github.com/jpdoshi/snowflake-browser/blob/main/LICENSE">
                MIT License
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
