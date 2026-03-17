"use client";

import { useState, useMemo } from "react";
import Header from "./components/Header";
import FilterBar, { FilterType } from "./components/FilterBar";
import ExtensionCard from "./components/ExtensionCard";
import { initialExtensions, Extension } from "./data/extensions";

export default function Home() {
  const [extensions, setExtensions] = useState<Extension[]>(initialExtensions);
  const [filter, setFilter] = useState<FilterType>("All");

  const filteredExtensions = useMemo(() => {
    switch (filter) {
      case "Active":
        return extensions.filter((ext) => ext.isActive);
      case "Inactive":
        return extensions.filter((ext) => !ext.isActive);
      default:
        return extensions;
    }
  }, [extensions, filter]);

  const handleToggle = (id: string) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const handleRemove = (id: string) => {
    setExtensions((prev) => prev.filter((ext) => ext.id !== id));
  };

  return (
    <main className="flex min-h-screen flex-col items-center !p-6 md:!p-8">
      <div className="flex w-full max-w-7xl flex-col gap-12">
        <Header />

        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] ">
              Extensions List
            </h2>
            <FilterBar currentFilter={filter} onFilterChange={setFilter} />
          </div>

          {filteredExtensions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {filteredExtensions.map((extension) => (
                <ExtensionCard
                  key={extension.id}
                  extension={extension}
                  onToggle={handleToggle}
                  onRemove={handleRemove}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                No extensions found for this filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

