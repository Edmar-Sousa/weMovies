export interface ResponseAPIType {
    id: number
    title: string 
    price: number 
    image: string
}


export interface MovieType {
    id: number
    title: string
    price: number
    image: string
    inCart: boolean
    quantidade: number,
}


export interface GlobalStateType {
    movies: Array<MovieType>
    cartCountMovies: number
    total: number
}
