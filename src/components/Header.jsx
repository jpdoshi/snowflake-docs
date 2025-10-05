"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavMenu from "./NavMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const bodyElement = document.body;

    if (bodyElement && isMenuOpen) {
      bodyElement.style.overflowY = "hidden";
    } else {
      bodyElement.style.overflowY = "auto";
    }
  }, [isMenuOpen]);

  return (
    <header className="container mx-auto h-[72px] mb-12 flex justify-between items-center">
      <Image src="/icon.png" alt="logo" width={36} height={36} loading="lazy" />
      <button
        className="hover:text-[var(--primary)] hover:bg-neutral-800 p-1.5 rounded-md duration-300"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {isMenuOpen && <NavMenu setIsMenuOpen={setIsMenuOpen} />}
    </header>
  );
};

export default Header;
