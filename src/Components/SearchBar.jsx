import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search for a Pokemon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-400 md:w-1/2 px-4 py-2 border border-teal-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-900 focus:border-transparent"
      />
    </div>
  );
}

export default SearchBar;
