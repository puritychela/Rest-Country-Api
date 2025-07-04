interface Props {
  onSearch: (text: string) => void;
}
export default function SearchBar({ onSearch }: Props) {
  return (
    <input
      type="text"
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search for a country..."
      className="p-2 rounded shadow w-full md:w-1/2"
    />
  );
}
