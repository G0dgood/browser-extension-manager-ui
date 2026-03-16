"use client";

import Image from "next/image";
import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--btn-secondary-bg)] border border-[var(--border-card)] border-opacity-50 transition-all duration-300 hover:bg-[var(--neutral-200)] dark:hover:bg-[var(--neutral-700)] focus:outline-none focus:ring-2 focus:ring-red-500/50"
      aria-label="Toggle theme"
    >
      <div className="transition-all duration-500 transform group-hover:rotate-[360deg] group-active:scale-90">
        {theme === "light" ? (
          <Image
            src="/assets/images/icon-moon.svg"
            alt="Dark mode"
            width={20}
            height={20}
          />
        ) : (
          <Image
            src="/assets/images/icon-sun.svg"
            alt="Light mode"
            width={20}
            height={20}
          />
        )}
      </div>
    </button>
  );
}
