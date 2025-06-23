"use client";

import Link from "next/link";
import { useState } from "react";
import { Playfair_Display } from "next/font/google";
import { M_PLUS_Rounded_1c } from "next/font/google";

const rounded = M_PLUS_Rounded_1c({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`${playfair.className} text-xl p-4 flex justify-between items-center relative`}
    >
      <Link href="/">
        <img
          src="images/フグのアイコン.png"
          className="h-24 w-auto cursor-pointer"
          alt="Header Logo"
        />
      </Link>
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="w-6 h-0.5 bg-white mb-1" />
        <div className="w-6 h-0.5 bg-white mb-1" />
        <div className="w-6 h-0.5 bg-white" />
      </div>
<nav className={`hidden md:block ${rounded.className}`}>
  <ul className="flex gap-4 mr-6">
    {["ホーム", "ニュース", "ポイント", "お問い合わせ"].map((name) => {
      const path = name === "Home" ? "/" : `/${name.toLowerCase()}`;
      return (
        <li key={name}>
          <Link href={path} className="hover:underline">
            {name}
          </Link>
        </li>
      );
    })}
  </ul>
</nav>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full text-black md:hidden z-10">
          <ul className="flex flex-col p-4 space-y-2">
            {["Home", "Profile", "Skills", "Works", "Contact"].map((name) => {
              const path = name === "Home" ? "/" : `/${name.toLowerCase()}`;
              return (
                <li key={name}>
                  <Link href={path} className="hover:underline">
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
