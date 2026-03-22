import axios from "axios"

const API_KEY = import.meta.env.VITE_API_KEY

export const fetchMovies = async (page: number) => {
    const res = await axios.get("/api/v1.4/movie", {
        headers: {
            "X-API-KEY": API_KEY
        },
        params: {
            page,
            limit: 50
        }
    })

    return res.data
}