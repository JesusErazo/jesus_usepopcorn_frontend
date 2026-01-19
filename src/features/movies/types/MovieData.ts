export interface MovieData {
  imdbID: string;
  Title: string;
  Year: string | number;
  Poster?: string;
  runtime?: number;
  imdbRating?: number;
  userRating?: number;
}
