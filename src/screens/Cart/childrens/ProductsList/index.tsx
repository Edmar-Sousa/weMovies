import { useCallback, useContext } from "react"
import { useHistory } from "react-router-dom"

import { AppContext } from "@/context/app"
import { TextButton } from "@/components/TextButton"
import { useWindowDimensions } from "@/hooks/window"

import { EmptyCartMessage } from "./components/EmptyCartMessage"
import { ProductsItems } from "./components/ProductsItems"

import { GlobalStateType, MovieType } from "@/types"

import {
    ProductContainer,
    Information,
    Row,
    Price,
    LittleTitle,
    AreaList,
} from "./styles"



const filterByProductsInCart = (state: GlobalStateType) => {
    return state.movies.filter((movie) => movie.inCart)
}


type ChangeMovieType = 'ADD_ONE_MOVIE' | 'REMOVE_ONE_MOVIE'

const RenderMessageProducts = () => {
    const navigation = useHistory()
    const { state, dispatch } = useContext(AppContext)

    const cartMovies = filterByProductsInCart(state)
    const windowDimensions = useWindowDimensions()

    const handleNavigationCart = useCallback(() => navigation.push("/cart/confirm"), [])
    const handleRemoveMovie = useCallback((data: MovieType) => dispatch({ type: 'REMOVE_MOVIE', data }), [])

    const handleChangeMovie = useCallback((type: ChangeMovieType, data: MovieType) => {
        if (type == 'ADD_ONE_MOVIE')
            dispatch({ type: 'ADD_MOVIE', data })

        else
            dispatch({ type: 'REMOVE_ONE_MOVIE', data })
    }, [])

    if (state.cartCountMovies == 0)
        return <EmptyCartMessage />
    
    return (
        <>
            <AreaList>
                <ProductsItems 
                    movies={ cartMovies } 
                    windowWidth={ windowDimensions.width }
                    handleRemoveMovie={ handleRemoveMovie }
                    handleChangeMovie={ handleChangeMovie } />
            </AreaList>

            <Information>
                <Row>
                    <LittleTitle>total</LittleTitle>
                    <Price>R$ { state.total }</Price>
                </Row>

                <TextButton 
                    arialLabel="Butão para finalizar o pedido" 
                    onClick={ handleNavigationCart }
                    maxWidth={ windowDimensions.width >= 1024 ? 235 : 1024 }>
                        finalizar pedido
                </TextButton>
            </Information>
        </>
    )
}

export const ProductsList = () => {
    return (
        <ProductContainer>
            <RenderMessageProducts />
        </ProductContainer>
    )
}

