import styles from "./NumResults.module.css";

interface NumResultsProps {
  num: number;
}
export default function NumResults({ num }: NumResultsProps) {
  return (
    <p className={styles.numResults}>
      Found <span>{num}</span> results
    </p>
  );
}
