"use client";

import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "@/api/getPopularMovies";

export default function PopularMovies() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movie-popular"],
    queryFn: getPopularMovies,
  });

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>데이터를 불러오는 중 오류가 발생했어요.</p>;

  return (
    <ul>
      {data.results.map((movie: any) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
        </li>
      ))}
    </ul>
  );
}
