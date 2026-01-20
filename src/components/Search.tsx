import styles from "./Search.module.css";

interface SearchProps {
  placeholder: string;
  htmlName: string;
  query?: string;
  setQuery: (query: string) => void;
}

export default function Search({
  placeholder = "Search...",
  htmlName = "search",
  query = "",
  setQuery,
}: SearchProps) {
  return (
    <input
      className={styles.search}
      type="text"
      value={query}
      placeholder={placeholder}
      name={htmlName}
      onChange={(e) => setQuery(e.target.value)}
    ></input>
  );
}
