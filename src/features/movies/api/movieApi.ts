import { type MovieData } from "../types/MovieData";

const KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "http://www.omdbapi.com";

interface OmdbResponse {
  Search?: MovieData[];
  Response: "True" | "False";
  Error?: string;
}

export async function searchMovies(
  query: string,
  signal?: AbortSignal,
): Promise<MovieData[]> {
  if (!query) return [];

  const res = await fetch(`${BASE_URL}/?apiKey=${KEY}&s=${query}`, { signal });

  if (!res.ok) {
    throw new Error("Something went wrong with fetching movies");
  }

  const data: OmdbResponse = await res.json();

  if (data.Response === "False") {
    throw new Error(data.Error || "Movie not found.");
  }

  return data.Search || [];
}
