import { useState } from "react";

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Logo from "./components/Logo";
import Search from "./components/Search";
import NumResults from "./components/NumResults";

import MovieList from "./features/movies/components/MovieList";
import MovieStats from "./features/movies/components/MovieStats";
import { useMovies } from "./features/movies/hooks/useMovies";

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

function App() {
  const [watchedMovies, setWatchedMovies] = useState(tempWatchedData);
  const [query, setQuery] = useState<string>("shrek");
  const { movies, isLoading, error } = useMovies(query);

  return (
    <div className="App">
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
        />

        <div className="box-stats">
          <MovieStats moviesData={watchedMovies} />
        </div>
      </Main>
    </div>
  );
}

export default App;
