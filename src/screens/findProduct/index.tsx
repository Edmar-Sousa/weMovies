import { useContext, useCallback } from "react"

import { MovieType } from "@/types"
import { AppContext } from "@/context/app"
import { MovieBanner } from "./components/MovieBanner"

import {
    FindProductContainer
} from "./styles"


export const FindProductScreen = () => {
    const { state, dispatch } = useContext(AppContext)

    const handleAddMovieCart = useCallback((movie: MovieType) => {
        dispatch({ type: 'ADD_MOVIE', data: movie })
    }, [])

    return (
        <FindProductContainer>
            {state.movies.map((movie) => (
                <MovieBanner 
                    key={movie.title} 
                    movie={ movie } 
                    onAddMovieCart={ handleAddMovieCart } />)
            )}
        </FindProductContainer>
    )
}
