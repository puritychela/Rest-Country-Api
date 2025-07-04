import { useEffect, useState } from 'react';
import type { Country } from '../types/types';
import CountryCard from '../components/CountryCard';
import SearchBar from '../components/SearchBar';
import FilterRegion from '../components/Filter';
import data from '../data/data.json'; // Local import ✅

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filtered, setFiltered] = useState<Country[]>([]);

  useEffect(() => {
    setCountries(data);
    setFiltered(data);
  }, []);

  const handleSearch = (text: string) => {
    const lower = text.toLowerCase();
    setFiltered(
      countries.filter((c) =>
        c.name.toLowerCase().includes(lower) // ✅ correct usage
      )
    );
  };

  const handleFilter = (region: string) => {
    if (!region) return setFiltered(countries);
    setFiltered(countries.filter((c) => c.region === region));
  };

  return (
    <main className="p-6 space-y-4">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <SearchBar onSearch={handleSearch} />
        <FilterRegion onFilter={handleFilter} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filtered.map((c) => (
          <CountryCard key={c.alpha3Code || c.name} country={c} />
        ))}
      </div>
    </main>
  );
}

