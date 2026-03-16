"use client";

import Image from "next/image";
import { Extension } from "../data/extensions";

interface ExtensionCardProps {
  extension: Extension;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

export default function ExtensionCard({
  extension,
  onToggle,
  onRemove,
}: ExtensionCardProps) {
  const { id, name, description, icon, isActive, color } = extension;

  return (
    <div className="flex flex-col justify-between gap-6 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] !p-4 transition-all duration-300">
      {/* Top section: icon + name + description */}
      <div className="flex items-start gap-5">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: color }}
        >
          <Image src={icon} alt={name} width={36} height={36} className="h-9 w-9" />
        </div>
        <div className="flex flex-col gap-1.5">
          <h3 className="text-lg font-bold text-[var(--foreground)] transition-colors">
            {name}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-[var(--text-secondary)] transition-colors opacity-80">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between">
        <button
          onClick={() => onRemove(id)}
          className="text-sm font-medium text-[var(--text-secondary)] !px-2.5 !py-[2px] rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)]  transition-all duration-200 hover:text-red-500 focus:outline-none focus:underline"
        >
          Remove
        </button>

        <button
          onClick={() => onToggle(id)}
          className={`relative h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--red-500)]/50 focus:ring-offset-2 ${isActive
            ? "bg-[var(--red-500)]"
            : "bg-[var(--neutral-300)] dark:bg-[var(--neutral-600)]"
            }`}
          role="switch"
          aria-checked={isActive}
        >
          <span
            className={`absolute top-0.5 left-0.5 inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-300 ease-in-out ${isActive ? "translate-x-4" : "translate-x-0"
              }`}
          />
        </button>
      </div>
    </div>
  );
}
