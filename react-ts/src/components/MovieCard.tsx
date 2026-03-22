import { useNavigate } from "react-router-dom"
import type { Movie } from "../types/movie"

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const navigate = useNavigate()

  const rating = movie.rating?.kp || movie.rating?.imdb || null

  return (
    <div className="card" onClick={() => navigate(`/movie/${movie.id}`)}>
      <img className="image" src={movie.poster?.url} alt={movie.name} />
      
      <div className="info">
        <h3>{movie.name}</h3>
        <p>{movie.year}</p>
        <p>⭐ {rating ? rating.toFixed(1) : "Нет рейтинга"}</p>
      </div>
    </div>
  )
}