"use client";
import { useThemeStore } from "@/hooks/use-theme-store";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const { mode: md, update } = useThemeStore((state) => state);
  const [mode, setMode] = useState<"dark" | "light">("dark");

  useEffect(() => {
    if (md === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setMode(md);
  }, [md]);

  const toggleMode = () => {
    const nextMode = mode === "light" ? "dark" : "light";
    setMode(nextMode);
    update(nextMode);
  };

  return (
    <button
      onClick={toggleMode}
      className="boder-[#343A40] relative h-[26px] w-12 rounded-full border bg-[#222426]"
    >
      <span
        className={`absolute left-0 top-0 m-1 h-4 w-4 rounded-full bg-[#888686] transition-all duration-300 ${mode === "light" ? "translate-x-5" : ""}`}
      />
      <span
        className={`absolute left-0 top-0 m-0.5 flex h-5 w-5 items-center justify-center rounded-full transition-all duration-300 ${mode === "dark" ? "translate-x-5" : ""}`}
      >
        <Image
          src={
            mode === "dark" ? "/icons/light-mode.png" : "/icons/dark-mode.png"
          }
          height={18}
          width={18}
          className="object-contain object-center"
          alt="mode"
        />
      </span>
    </button>
  );
}
