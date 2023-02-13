import React from "react"


import { DesktopItemView } from "../MovieView/DesktopItemView"
import { MobileItemView } from "../MovieView/MobileItemView"

import { MovieType } from "@/types"


interface ProductsItemsProps {
    windowWidth: number
    movies: Array<MovieType>
    handleRemoveMovie: Function
    handleChangeMovie: Function
}

export const ProductsItems = ({ movies, windowWidth, handleRemoveMovie, handleChangeMovie }: ProductsItemsProps) => {
    if (windowWidth >= 768)
        return (
            <DesktopItemView 
                movies={ movies } 
                handleRemoveMovie={ handleRemoveMovie } 
                handleChangeMovie={ handleChangeMovie } />
        )
    
    return (
        <>
            { movies.map(movie => (
                <MobileItemView 
                    key={ movie.title } 
                    movie={movie} 
                    handleRemoveMovie={ handleRemoveMovie }
                    handleChangeMovie={ handleChangeMovie } />)
            )}
        </>
    )
}

