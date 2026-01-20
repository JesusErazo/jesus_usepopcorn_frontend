import MovieItem from "./MovieItem";
import { useState } from "react";
import { type MovieData } from "../types/MovieData";
import Loader from "../../../components/Loader";
import ErrorMessage from "../../../components/ErrorMessage";
import styles from "./MovieList.module.css";

interface MovieListProps {
  moviesData: MovieData[];
  addOpenListBtn?: boolean;
  isLoading: boolean;
  error: string;
}

export default function MovieList({
  moviesData,
  addOpenListBtn,
  isLoading,
  error,
}: MovieListProps) {
  const [openList, setOpenList] = useState(true);

  return (
    <ul className={styles.list}>
      {!error &&
        openList &&
        !isLoading &&
        moviesData.map((item) => (
          <MovieItem
            key={item.imdbID}
            posterUrl={item.Poster}
            title={item.Title}
            releaseYear={item.Year}
            userRating={item.userRating}
            imdbRating={item.imdbRating}
            runtime={item.runtime}
          />
        ))}

      {!error && isLoading && <Loader />}

      {error && <ErrorMessage error={error} />}

      {addOpenListBtn && (
        <button
          className={styles.btnToggle}
          onClick={() => setOpenList(!openList)}
        >
          {openList ? <>&minus;</> : <>&#43;</>}
        </button>
      )}
    </ul>
  );
}
