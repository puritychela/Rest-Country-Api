import type { Country } from '../types/types';
import { Link } from 'react-router-dom';

export default function CountryCard({ country }: { country: Country }) {
  return (
    <Link to={`/country/${country.name}`}>
      <div className="bg-white dark:bg-gray-700 shadow rounded overflow-hidden">
        <img src={country.flags?.png || country.flag} alt={country.name} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h2 className="font-bold">{country.name}</h2>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Capital:</strong> {country.capital}</p>
        </div>
      </div>
    </Link>
  );
}

