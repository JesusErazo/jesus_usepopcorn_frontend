import styles from "./MovieItemStats.module.css";

interface MovieItemStatsProps {
  userRating: number;
  imdbRating: number;
  runtime: number;
}

export default function MovieItemStats({
  userRating,
  imdbRating,
  runtime,
}: MovieItemStatsProps) {
  return (
    <div className={styles.stats}>
      <span>⭐ {userRating}</span>
      <span>🌟 {imdbRating}</span>
      <span>⌛ {runtime} min</span>
    </div>
  );
}
