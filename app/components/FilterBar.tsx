"use client";

export type FilterType = "All" | "Active" | "Inactive";

interface FilterBarProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export default function FilterBar({
  currentFilter,
  onFilterChange,
}: FilterBarProps) {
  const filters: FilterType[] = ["All", "Active", "Inactive"];

  return (
    <div className="flex gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`rounded-full !px-5 !py-1.5 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--red-500)]/40 ${currentFilter === filter
            ? "bg-[var(--red-500)] text-white"
            : "border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground)] hover:border-[var(--red-500)]"
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
