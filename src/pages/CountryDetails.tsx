import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Country } from '../types/types';
import data from '../data/data.json';

export default function CountryDetail() {
  const { name } = useParams();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    const found = data.find((c) => c.name.toLowerCase() === name?.toLowerCase());
    setCountry(found || null);
  }, [name]);

  if (!country) return <p className="p-4">Country not found.</p>;

  return (
    <div className="p-6">
      <Link to="/" className="underline mb-4 inline-block">← Back</Link>
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={country.flags?.png || country.flag || '/fallback-flag.png'}
          alt={`${country.name} flag`}
          className="w-full md:w-1/2 object-cover"
        />
        <div className="space-y-2">
          <h2 className="text-2xl font-bold mb-4">{country.name}</h2>
          <p><strong>Native Name:</strong> {country.nativeName ?? 'N/A'}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Sub Region:</strong> {country.subregion ?? 'N/A'}</p>
          <p><strong>Capital:</strong> {country.capital ?? 'N/A'}</p>
          <p><strong>Top Level Domain:</strong> {country.topLevelDomain?.join(', ') ?? 'N/A'}</p>
          <p><strong>Currencies:</strong> {country.currencies?.map(c => c.name).join(', ') || 'N/A'}</p>
          <p><strong>Languages:</strong> {country.languages?.map(l => l.name).join(', ') || 'N/A'}</p>
          <p><strong>Border Countries:</strong> {country.borders?.join(', ') || 'None'}</p>
        </div>
      </div>
    </div>
  );
}



