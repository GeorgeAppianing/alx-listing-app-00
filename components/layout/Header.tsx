import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-gray-800">ALXListing</a>
        </Link>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <Link href="/"><a>Home</a></Link>
          <a href="#listings">Listings</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-3 py-1">
            <input
              aria-label="Search properties"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search (city, villa, pool...)"
              className="bg-transparent outline-none text-sm px-2 w-40"
            />
            <button className="text-sm font-medium">Search</button>
          </div>

          <div className="flex gap-2">
            <button className="text-sm px-3 py-1 rounded-md hover:bg-gray-100">Sign in</button>
            <button className="text-sm px-3 py-1 rounded-md bg-green-600 text-white">Sign up</button>
          </div>

          <button className="md:hidden ml-2">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
