interface NumResultsProps {
  num: number;
}
export default function NumResults({ num }: NumResultsProps) {
  return (
    <p className="found-results">
      Found <span>{num}</span> results
    </p>
  );
}
