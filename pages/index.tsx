
// pages/index.tsx
import { useMemo, useState } from "react";
import Image from "next/image";
import { PROPERTYLISTINGSAMPLE, HERO_BG } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Pill from "@/components/ui/Pill";
import PropertyCard from "@/components/property/PropertyCard";

const FILTER_LABELS = [
  "All",
  "Luxury Villa",
  "Pool",
  "Self Checkin",
  "Beachfront",
  "Mountain View",
  "City Center",
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROPERTYLISTINGSAMPLE.filter((p) => {
      const matchesFilter = activeFilter === "All" || p.category.includes(activeFilter);
      const matchesQuery =
        q === "" ||
        p.name.toLowerCase().includes(q) ||
        p.address.city.toLowerCase().includes(q) ||
        p.address.country.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <>
      <section className="relative">
        <div className="h-64 sm:h-96 relative">
          <Image
            src={HERO_BG}
            alt="hero background"
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/35 flex items-center">
            <div className="max-w-6xl mx-auto px-4 text-white">
              <h1 className="text-2xl sm:text-4xl font-bold">Find your favorite place here!</h1>
              <p className="mt-2 text-sm sm:text-base">
                The best prices for over 2 million properties worldwide.
              </p>

              <div className="mt-4 w-full sm:w-2/3 max-w-2xl bg-white rounded-md p-2 text-black flex gap-2 items-center">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 outline-none px-2 text-sm"
                  placeholder="Search by city, property name..."
                  aria-label="Search properties"
                />
                <button className="px-3 py-1 bg-green-600 text-white rounded">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex gap-2 flex-wrap">
            {FILTER_LABELS.map((label) => (
              <Pill
                key={label}
                label={label}
                active={label === activeFilter}
                onClick={() => setActiveFilter(label)}
              />
            ))}
          </div>

          <div className="text-sm text-gray-600">
            Showing <strong>{filtered.length}</strong> results
          </div>
        </div>

        <div id="listings" className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p: PropertyProps, idx) => (
            <PropertyCard key={p.name + idx} property={p} />
          ))}
        </div>
      </section>
    </>
  );
}
