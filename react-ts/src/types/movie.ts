export interface Movie {
    id: number
    name: string
    year: number
    rating: {
        kp?: number
        imdb?:number
    }
    poster?: {
        url: string
    }
    description?: string
    genres: { name: string }[]
}
