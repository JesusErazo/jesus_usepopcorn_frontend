import MovieItemStats from "./MovieItemStats";
import styles from "./MovieItem.module.css";

interface MovieItemProps {
  movieId: string;
  posterUrl?: string;
  title: string;
  releaseYear: string | number;
  userRating?: number;
  imdbRating?: number;
  runtime?: number;
  includeDeleteBtn?: boolean;
  onSelectMovie: (id: string) => void;
  onDeleteMovie?: (movieId: string) => void;
}

export default function MovieItem({
  movieId,
  posterUrl,
  title,
  releaseYear,
  userRating,
  imdbRating,
  runtime,
  includeDeleteBtn = false,
  onSelectMovie,
  onDeleteMovie = () => {},
}: MovieItemProps) {
  return (
    <li className={styles.item} onClick={() => onSelectMovie(movieId)}>
      <img
        className={styles.poster}
        src={posterUrl}
        alt="poster of the movie"
      />
      <div className={styles.details}>
        <span className={styles.title}>{title}</span>
        {userRating !== undefined &&
        imdbRating !== undefined &&
        runtime !== undefined ? (
          <MovieItemStats
            userRating={userRating}
            imdbRating={imdbRating}
            runtime={runtime}
          />
        ) : (
          <p>📆 {releaseYear}</p>
        )}
      </div>
      {includeDeleteBtn && (
        <button
          className={styles.deleteBtn}
          onClick={() => onDeleteMovie(movieId)}
        >
          X
        </button>
      )}
    </li>
  );
}
