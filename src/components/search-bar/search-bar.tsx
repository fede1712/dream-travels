"use client";
import { useState } from "react";

export const SearchBar = ({ setSearchTerm }: { setSearchTerm: (searchTerm: string) => void }) => {
  const [term, setTerm] = useState("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchTerm(term);
    }
  };

  return (
    <div className="rounded-full bg-white p-2 text-black border border-[#D8D8D8] flex items-center justify-between w-96">
      <input
        className="outline-none"
        placeholder="Search trips"
        type="text"
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        role="search-input"
      />
      <button
        className="bg-black text-white rounded-full py-2 px-4"
        onClick={() => setSearchTerm(term)}
        role="search-button"
      >
        Search
      </button>
    </div>
  );
};
