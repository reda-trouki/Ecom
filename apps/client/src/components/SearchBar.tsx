"use client";

import { Search, X } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = (value: string) => {
    if (value.trim()) {
      const params = new URLSearchParams(searchParams);
      params.set("search", value.trim());
      router.push(`/products?${params.toString()}`, { scroll: false });
    }
  }

  const clearSearch = () => {
    setValue("");
  }

  return (
    <div className={`relative flex items-center w-full max-w-md transition-all duration-200 ${isFocused
        ? 'ring-2 ring-indigo-500 ring-offset-2 shadow-lg'
        : 'ring-1 ring-gray-200 shadow-sm hover:shadow-md'
      }`}>
      <div className="relative flex items-center w-full bg-white rounded-lg overflow-hidden">
        {/* Search Icon */}
        <div className="flex items-center justify-center pl-4 pr-2">
          <Search className={`w-5 h-5 transition-colors duration-200 ${isFocused ? 'text-indigo-500' : 'text-gray-400'
            }`} />
        </div>

        {/* Input Field */}
        <input
          id="search"
          type="text"
          placeholder="Search products..."
          value={value}
          className="flex-1 py-3 pr-12 text-sm text-gray-900 placeholder-gray-500 bg-transparent outline-none"
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(value);
            }
            if (e.key === "Escape") {
              clearSearch();
            }
          }}
        />

        {/* Clear Button */}
        {value && (
          <button
            onClick={clearSearch}
            className="absolute right-3 p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200 rounded-full hover:bg-gray-100"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Search Button for mobile */}
        {!value && (
          <button
            onClick={() => handleSearch(value)}
            className="absolute right-3 p-1 text-gray-400 hover:text-indigo-500 transition-colors duration-200 rounded-full hover:bg-indigo-50"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Focus ring glow effect */}
      <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-200 -z-10 blur-xl ${isFocused ? 'opacity-20' : ''
        }`} />
    </div>
  )
}

export default SearchBar