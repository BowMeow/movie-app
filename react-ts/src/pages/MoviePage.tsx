import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import type { Movie } from "../types/movie"

export const MoviePage = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState<Movie | null>(null)

    useEffect(() => {
        const load = async () => {
            try {
                const res = await axios.get(`/api/v1.4/movie/${id}`, {
                    headers: {
                        "X-API-KEY": import.meta.env.VITE_API_KEY
                    }
                })

                console.log(res.data) // 👈 добавь это
                setMovie(res.data)

            } catch (error) {
                console.error("Ошибка загрузки фильма:", error)
            }
        }

        load()
    }, [id])

    if (!movie) return <p>Загрузка...</p>

    const rating = movie.rating?.kp || movie.rating?.imdb || null

    return (
        <div className="wrapper" style={{ padding: 20 }}>
            <h1 className="title">{movie.name}</h1>

            <img className="card-image" src={movie.poster?.url} width={300} />
            <div className="film-info">
                <p><b>Год:</b> {movie.year}</p>
                <p><b>Рейтинг:</b> ⭐ {rating ? rating.toFixed(1) : "Нет"}</p>
                <p><b>Описание:</b> {movie.description || "Нет описания"}</p>

                <p>
                    <b>Жанры:</b>{" "}
                    {movie.genres.map(g => g.name).join(", ")}
                </p>
            </div>
        </div>
    )
}