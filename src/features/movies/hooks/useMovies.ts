import { useState, useEffect } from "react";
import type { MovieData } from "../types/MovieData";
import { searchMovies } from "../api/movieApi";

export function useMovies(query: string) {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        if (query.length < 2) {
          setMovies([]);
          setError("");
          return;
        }

        const data = await searchMovies(query, controller.signal);
        setMovies(data);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          return;
        }

        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();

    return () => controller.abort();
  }, [query]);

  return { movies, isLoading, error };
}
