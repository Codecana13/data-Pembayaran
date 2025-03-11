"use client"; // Ensure it runs on the client side

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`); // Redirect to search page
    }
  };

  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center">
      {/* Clickable logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Website Logo"
          width={150}
          height={50}
          className="cursor-pointer hover:opacity-80 transition"
        />
      </Link>

      {/* Search bar */}
      <form onSubmit={handleSearch} className="relative flex">
        <input
          type="text"
          placeholder="Cari Bukti Jackpot ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-3 py-2 rounded bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500"
        />
        <button type="submit" className="absolute right-2 top-2 text-yellow-500">
          🔍
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
