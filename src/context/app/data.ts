import { GlobalStateType, MovieType } from "@/types"


export const globalState : GlobalStateType = {
    movies: [],
    cartCountMovies: 0,
    total: 0,
}


const addMovie = (state: any, movie: MovieType) => {
    const newstate = { ...state }

    const index = newstate.movies.indexOf(movie)
    
    newstate.movies[index].inCart = true
    newstate.movies[index].quantidade += 1
    newstate.cartCountMovies += 1
    
    newstate.total += newstate.movies[index].price

    return { ...newstate }
}


const removeMovie = (state: any, movie: MovieType) => {
    const newstate = { ...state }
    const index = newstate.movies.indexOf(movie)

    newstate.total -= newstate.movies[index].quantidade * newstate.movies[index].price

    newstate.cartCountMovies -= newstate.movies[index].quantidade
    newstate.movies[index].inCart = false
    newstate.movies[index].quantidade = 0

    return { ...newstate }
}


const removeOneMovie = (state: any, movie: MovieType) => {
    const newstate = { ...state }

    const index = newstate.movies.indexOf(movie)
    newstate.total -= newstate.movies[index].price
    newstate.movies[index].quantidade -= 1
    newstate.cartCountMovies -= 1

    if (newstate.movies[index].quantidade == 0) newstate.movies[index].inCart = false

    return { ...newstate }
}

type ActionType = {
    type: 'ADD_MOVIE' | 'SET_MOVIES' | 'REMOVE_MOVIE' | 'REMOVE_ONE_MOVIE'
    data: any
}

export const reducer = (state: any, action: ActionType) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return addMovie(state, action.data)

        case 'REMOVE_MOVIE':
            return removeMovie(state, action.data)

        case 'REMOVE_ONE_MOVIE':
            return removeOneMovie(state, action.data)

        case 'SET_MOVIES':
            return { ...state, movies: action.data }

        default:
            return { ...state }
    }
}
