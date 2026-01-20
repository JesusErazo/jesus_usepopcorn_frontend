import { useState, useEffect } from "react";
import { getMovieDetails } from "../api/movieApi";
import type { MovieDataDetails } from "../types/MovieDataDetails";
export function useMovieDetails(movieId: string) {
  const [movie, setMovie] = useState<MovieDataDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function getDetails() {
      if (!movieId) return;

      try {
        setIsLoading(true);
        setError("");

        const data = await getMovieDetails(movieId, controller.signal);
        setMovie(data);
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

    getDetails();

    return () => controller.abort();
  }, [movieId]);

  return { movie, isLoading, error };
}
