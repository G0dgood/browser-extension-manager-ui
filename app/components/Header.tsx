"use client";

import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex w-full max-w-7xl items-center justify-between rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] !px-2 !py-2 shadow-sm transition-all duration-300">
      <div className="flex items-center gap-3">
        <Logo className="h-10 w-40 text-[var(--foreground)] hover:rotate-12 transition-all duration-300" />
      </div>
      <ThemeToggle />
    </header>
  );
}
