import { useMovies } from "../hooks/useMovies"
import { MovieCard } from "../components/MovieCard"

export const HomePage = () => {
    const { movies, loadMore } = useMovies()

    return (
        <div className="wrapper">
            <h1 className="title">Фильмы</h1>
            <div className="container">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <button className="button" onClick={loadMore}>Загрузить ещё</button>
        </div>
    )
}