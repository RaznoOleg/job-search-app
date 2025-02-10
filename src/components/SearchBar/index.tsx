"use client";
import { useState, useEffect } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export default function SearchBar({ onSearch, searchQuery }: SearchBarProps) {
  const [input, setInput] = useState<string>(searchQuery);

  useEffect(() => {
    setInput(searchQuery);
  }, [searchQuery]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4 bg-white rounded-lg shadow-md p-4 hover:shadow-2xl transition-shadow mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 rounded-lg w-full focus:outline-none bg-transparent"
        placeholder="Search for jobs..."
      />
      <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-bold">
        Search
      </button>
    </form>
  );
}
