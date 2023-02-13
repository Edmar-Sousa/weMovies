import { useState, useEffect, useContext } from "react"

import { AppContext } from "@/context/app"
import { fetchMovies } from "@/services/movies"

import { ResponseAPIType, MovieType } from "@/types"

import LoaderIconSVG from "@/assets/loader.png"

import {
    LoaddingBackground,
    CircleLoadding,
    LoaderImage
} from "./styles"



function convertResponseInArrayMovies(movies: Array<ResponseAPIType>) : Array<MovieType> {
    return movies.map(movie => ({ 
        ...movie, 
        inCart: false,
        quantidade: 0
    }))
}


function useFetchMovies(callback: Function) {
    const fetchMoviesData = async () => {
        const data = await fetchMovies()
        const moviesList = convertResponseInArrayMovies(data)

        callback(moviesList)
    }

    useEffect(() => {
        fetchMoviesData()
    }, [])
}


export const Loadding = () => {
    const [hiddenLoadding, setHiddenLoadding] = useState(false)
    const { dispatch } = useContext(AppContext)

    useFetchMovies((data: Array<MovieType>) => { 
        dispatch({ type: 'SET_MOVIES', data })
        setHiddenLoadding(true)
    })

    return (
        <LoaddingBackground hidden={ hiddenLoadding }>
            <CircleLoadding>
                <LoaderImage src={ LoaderIconSVG } alt="Loadding" />
            </CircleLoadding>
        </LoaddingBackground>
    )
}
