import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const accordionData = [
  {
    title: "Is Snowflake browser safe to use?",
    content:
      "<span class='text-[var(--green)]'>Yes.</span> Snowflake browser is an open-source software made with Electron. You might wonder how can a web browser made with React+TS be secure? It ships with bare-bones chromium and node binaries, <span class='text-[var(--yellow)]'>BUT</span> the architecture is tweaked such that the renderer process and node integration are set to work in separate processes than that of the browser. Therefore, compiled javascript code used for the UI will not expose vulnerability to websites that you visit. <br/><br/>You can check out other Native open-source web browsers like: <a href='https://github.com/ungoogled-software/ungoogled-chromium' class='underline underline-offset-2' target='_blank'>Ungoogled Chromium</a> and FF derivatives for more features and customization.",
  },
  {
    title: "Why should I use it?",
    content:
      "😅 You don't have to. While Snowflake browser provides features and settings to keep your private data and identity safe on the internet, It doesn't provide all the basic features that other browsers do, for reducing fingerprinting. <br/><br/> It is meant to be used by following necessary measures according to personal use case, For Eg: <ul class='mt-4 ml-6 list-disc'><li>prevent third-party login (Google, microsoft, apple, facebook, etc)</li> <li>Using extra filter lists</li> <li>Handle website permissions</li> <li>Using proxy/VPN/TOR (optional)</li> <li>Harden browser settings</li></ul>",
  },
  {
    title: "Should I use it as my primary web browser?",
    content:
      "<span class='text-[var(--red)]'>No.</span> This browser is not meant to be used as your main browser. It does not provide some features that normal browsers provide in order to keep users' data private and secure. Chrome/FF extensions cannot to be installed for privacy protection. You should use it where and when needed like <a href='https://www.torproject.org/' class='underline underline-offset-2' target='_blank'>TOR</a>.<br/><br/>If you still need to use it as daily driver for it's features, I'd recommend to use third-party open-source password manager, download manager, proxy/VPN (optional), etc for daily use case.",
  },
  {
    title: "Can I be tracked by websites?",
    content:
      "Filter lists are set by default to block trackers and personalized ads. DuckDuckGo is set as default search engine to keep your searches secret. Resist Fingerprinting option injects script (if javascript is enabled) to spoof fingerprintable properties and randomization for WebRTC, Canvas, WebGL, etc to protect users from being tracked. <br/><br/> Though it swaps most common properties to make user blend-in with traffic, It should score 8/10 for fingerprint resistance by default. You can turn off persistent session to make browser <span class='italic'>'forget'</span> everything once the window is closed.",
  },
  {
    title: "How Anonymous is it?",
    content:
      "Snowflake browser is meant for protecting users' privacy & security. It must <span class='text-[var(--red)]'>NOT</span> be used for any kind of illegal activity or mal-practices. Your ISP and legal systems <span class='text-[var(--orange)]'>CAN</span> still detect your identity. I strongly recommend to not visit shady websites and not to disclose your information on unknown domains. <br/><br/> In case you need complete anonymity and privacy, I'd recommend you to use FF derivatives or <a href='https://www.torproject.org/' class='underline underline-offset-2' target='_blank'>TOR browser</a>.",
  },
  {
    title: "How to open Onion websites? OR How to use TOR?",
    content:
      "Snowflake browser supports HTTP and SOCKS proxy to add security layer. Follow given steps to use onion TOR in the browser:<ul class='mt-4 ml-6 list-disc'> <li>Download <a href='https://www.torproject.org/download/tor/' class='underline underline-offset-2' target='_blank'>TOR expert bundle</a> and extract archive. Open executable file in terminal and wait till bootstraping is 100% done.</li> <li>Open Settings->Security and tick Use Proxy. Make sure Proxy URL is set to <span class='bg-stone-900 p-1 rounded border border-stone-800 font-mono'>socks5:127.0.0.1:9050</span>.</li> <li>Restart browser and <a href='https://check.torproject.org/' class='underline underline-offset-2' target='_blank'>Check TOR</a> connection.</li></ul>",
  },
];

const AccordionItem = ({ title, content, onClick, expanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  useEffect(() => {
    setIsExpanded(expanded);
  }, [expanded]);

  return (
    <div className="px-2 py-6 border-b border-stone-700">
      <div
        onClick={onClick}
        className="font-bold text-xl text-[var(--yellow)] flex gap-4 items-center justify-between cursor-pointer"
      >
        <h3 className="leading-normal">{title}</h3>
        <span>
          {isExpanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 opacity-50"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          ) : (
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          )}
        </span>
      </div>
      <motion.div
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
          scaleY: isExpanded ? 1 : 0,
          marginTop: isExpanded ? 20 : 0,
        }}
        dangerouslySetInnerHTML={{ __html: content }}
        className="origin-top"
      ></motion.div>
    </div>
  );
};

const FAQAccordion = () => {
  const [openItemIndex, setOpenItemIndex] = useState(0);
  return (
    <div className="flex flex-col">
      {accordionData.map((data, index) => (
        <AccordionItem
          key={index}
          expanded={openItemIndex == index}
          onClick={() => setOpenItemIndex(index)}
          title={data.title}
          content={data.content}
        />
      ))}
    </div>
  );
};

export default FAQAccordion;
