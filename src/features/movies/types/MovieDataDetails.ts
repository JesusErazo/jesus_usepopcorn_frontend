export interface MovieDataDetails {
  Title: string;
  Year: string | number;
  Poster: string;
  Runtime: number;
  imdbRating: number;
  Plot: string;
  Released: string;
  Actors: string;
  Director: string;
  Genre: string;
  Response: "True" | "False";
  Error?: string;
}
