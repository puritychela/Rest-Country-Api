
interface Props {
  onFilter: (region: string) => void;
}
export default function FilterRegion({ onFilter }: Props) {
  return (
    <select onChange={(e) => onFilter(e.target.value)} className="p-2 rounded shadow">
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
