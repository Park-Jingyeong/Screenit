// TMDB API Movie Lists - Popular

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export async function getPopularMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`,
  );
  if (!res.ok) throw new Error("Failed to fetch popular movies");
  const data = await res.json();
  return data;
}
