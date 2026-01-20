import { useState } from "react";
import styles from "./MovieDetails.module.css";
import { useMovieDetails } from "../hooks/useMovieDetails";
import Loader from "../../../components/Loader";
import ErrorMessage from "../../../components/ErrorMessage";
import StarRating from "../../../components/StarRating";

interface MovieDetailsProps {
  selectedId: string;
  onCloseMovie: () => void;
}

export default function MovieDetails({
  selectedId,
  onCloseMovie,
}: MovieDetailsProps) {
  const { movie, isLoading, error } = useMovieDetails(selectedId);
  const [showContent, setShowContent] = useState(true);

  return (
    <div className={styles.container}>
      {isLoading && !error && <Loader />}

      {error && <ErrorMessage error={error} />}

      {movie && !isLoading && !error && showContent && (
        <>
          <header className={styles.header}>
            <img
              className={styles.poster}
              src={movie.Poster}
              alt={`poster of ${movie.Title}`}
            ></img>
            <div className={styles.info}>
              <h2>{movie.Title}</h2>
              <p>
                {movie.Released} &bull; {movie.Runtime}
              </p>
              <p>{movie.Genre}</p>
              <p>
                <span>⭐ </span>
                {movie.imdbRating} IMDb rating
              </p>
            </div>
          </header>

          <section className={styles.summary}>
            <div className={styles.rating}>
              <StarRating maxRating={10} size={26} />
            </div>
            <p>
              <em>{movie.Plot}</em>
            </p>
            <p>Starring {movie.Actors}</p>
            <p>Directed by {movie.Director}</p>
          </section>

          <button className={styles.btnBack} onClick={onCloseMovie}>
            &larr;
          </button>
        </>
      )}

      <button
        className={styles.btnToggle}
        onClick={() => setShowContent(!showContent)}
      >
        {showContent ? <>&minus;</> : <>&#43;</>}
      </button>
    </div>
  );
}
