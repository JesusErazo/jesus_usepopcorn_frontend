import { useState } from "react";
import MovieList from "./MovieList";
import type { MovieData } from "../types/MovieData";
import styles from "./MovieStats.module.css";

interface MovieStatsProps {
  moviesData: MovieData[];
}

export default function MovieStats({ moviesData }: MovieStatsProps) {
  const [openStats, setOpenStats] = useState(true);
  const moviesAmount = moviesData?.length ?? 0;
  const avgUserRating = average(moviesData.map((movie) => movie.userRating));
  const avgImdbRating = average(moviesData.map((movie) => movie.imdbRating));
  const avgRuntime = average(moviesData.map((movie) => movie.runtime));

  function average(valuesList: (number | undefined)[]) {
    if (!valuesList) return;

    const validValues = valuesList.filter(
      (v): v is number => typeof v === "number",
    );

    if (validValues.length === 0) return 0;

    const sumValues = validValues.reduce((acc, item) => acc + item, 0);
    return sumValues / moviesAmount;
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.btnToggle}
        onClick={() => setOpenStats(!openStats)}
      >
        {openStats ? <>&minus;</> : <>&#43;</>}
      </button>
      {openStats && (
        <>
          <div className={styles.summary}>
            <p className={styles.title}>movies you watched</p>
            <div className={styles.details}>
              <span>#️⃣ {moviesAmount} movies</span>
              <span>⭐ {avgUserRating}</span>
              <span>🌟 {avgImdbRating}</span>
              <span>⌛ {avgRuntime} min</span>
            </div>
          </div>

          <MovieList
            moviesData={moviesData}
            addOpenListBtn={false}
            isLoading={false}
            error=""
            onSelectMovie={() => "NOT IMPLEMENTED YET"}
          />
        </>
      )}
    </div>
  );
}
