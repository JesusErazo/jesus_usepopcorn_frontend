import { useState } from "react";
import styles from "./App.module.css";

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Logo from "./components/Logo";
import Search from "./components/Search";
import NumResults from "./components/NumResults";

import MovieList from "./features/movies/components/MovieList";
import MovieStats from "./features/movies/components/MovieStats";
import { useMovies } from "./features/movies/hooks/useMovies";
import MovieDetails from "./features/movies/components/MovieDetails";
import type { MovieData } from "./features/movies/types/MovieData";

function App() {
  const [watchedMovies, setWatchedMovies] = useState<MovieData[]>([]);
  const [query, setQuery] = useState<string>("");
  const { movies, isLoading, error } = useMovies(query);
  const [selectedId, setSelectedId] = useState<string>("");

  function handleSelectMovie(id: string) {
    setSelectedId(id === selectedId ? "" : id);
  }

  function handleCloseMovie() {
    setSelectedId("");
  }

  function handleAddWatchedMovie(movie: MovieData) {
    setWatchedMovies((watchedMovies) => [...watchedMovies, movie]);
  }

  function handleDeleteWatchedMovie(movieId: string) {
    setWatchedMovies((watchedMovies) =>
      watchedMovies.filter((movie) => movie.imdbID !== movieId),
    );
  }

  return (
    <div className={styles.app}>
      <NavBar>
        <Logo>🍿usePopcorn</Logo>
        <Search
          placeholder="Search movies..."
          htmlName="Search movies"
          query={query}
          setQuery={(query: string) => setQuery(query)}
        />
        <NumResults num={movies.length} />
      </NavBar>
      <Main>
        <MovieList
          moviesData={movies}
          addOpenListBtn={true}
          isLoading={isLoading}
          error={error}
          onSelectMovie={handleSelectMovie}
        />

        {selectedId ? (
          <MovieDetails
            key={selectedId}
            selectedId={selectedId}
            onCloseMovie={handleCloseMovie}
            onAddWatchedMovie={handleAddWatchedMovie}
            onDeleteWatchedMovie={handleDeleteWatchedMovie}
            watchedMovies={watchedMovies}
          />
        ) : (
          <div className={styles.boxStats}>
            <MovieStats
              moviesData={watchedMovies}
              onDeleteMovie={handleDeleteWatchedMovie}
            />
          </div>
        )}
      </Main>
    </div>
  );
}

export default App;
