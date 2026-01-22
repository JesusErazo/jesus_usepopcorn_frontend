import { useState } from "react";
import styles from "./MovieDetails.module.css";
import { useMovieDetails } from "../hooks/useMovieDetails";
import Loader from "../../../components/Loader";
import ErrorMessage from "../../../components/ErrorMessage";
import StarRating from "../../../components/StarRating";
import type { MovieData } from "../types/MovieData";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle";

interface MovieDetailsProps {
  selectedId: string;
  onCloseMovie: () => void;
  onAddWatchedMovie: (movie: MovieData) => void;
  onDeleteWatchedMovie: (movieId: string) => void;
  watchedMovies: MovieData[];
}

export default function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatchedMovie,
  onDeleteWatchedMovie,
  watchedMovies,
}: MovieDetailsProps) {
  const { movie, isLoading, error } = useMovieDetails(selectedId);
  const [showContent, setShowContent] = useState(true);
  const [userRating, setUserRating] = useState(0);
  const movieAdded = watchedMovies?.find(
    (m) => m.imdbID === selectedId && m.userRating,
  );

  useDocumentTitle(`Movie | ${movie?.Title}`);

  function handleAddWatchedMovie() {
    if (!movie) return;

    if (movieAdded) {
      handleDeleteWatchedMovie();
      return;
    }

    const watchedMovie: MovieData = {
      imdbID: selectedId,
      Title: movie.Title,
      Year: movie.Year,
      Poster: movie.Poster,
      imdbRating: Number(movie.imdbRating),
      runtime: Number(movie.Runtime.split(" ")[0]),
      userRating: userRating,
    };

    onAddWatchedMovie(watchedMovie);
  }

  function handleDeleteWatchedMovie() {
    if (!movieAdded) return;
    onDeleteWatchedMovie(selectedId);
  }

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
            <div className={styles.ratingContainer}>
              <div className={styles.rating}>
                <StarRating
                  maxRating={10}
                  size={26}
                  onSetRating={setUserRating}
                  defaultRating={movieAdded ? movieAdded.userRating : 0}
                />
              </div>

              {(userRating > 0 || movieAdded) && (
                <button
                  className={styles.btnAddToList}
                  onClick={handleAddWatchedMovie}
                >
                  {movieAdded ? "✓ Added" : "+ Add to list"}
                </button>
              )}
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
