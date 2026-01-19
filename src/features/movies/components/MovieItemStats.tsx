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
    <div className="movie-stats-details">
      <span>⭐ {userRating}</span>
      <span>🌟 {imdbRating}</span>
      <span>⌛ {runtime} min</span>
    </div>
  );
}
