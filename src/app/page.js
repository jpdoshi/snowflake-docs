import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src="/icon.png"
        alt="logo"
        width={200}
        height={200}
        loading="lazy"
      />
    </main>
  );
}
