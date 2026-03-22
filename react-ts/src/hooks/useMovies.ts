import { useEffect, useState } from "react"
import { fetchMovies } from "../api/moviesApi"
import type { Movie } from "../types/movie"

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const load = async () => {
      const data = await fetchMovies(page)
      setMovies(prev => [
  ...prev,
  ...data.docs.filter((movie: Movie) => movie.poster?.url)
])
    }

    load()
  }, [page])

  const loadMore = () => {
    setPage(prev => prev + 1)
  }

  return { movies, loadMore }
}