import React from "react"

import { MovieType } from "@/types"
import { ShoppingCart } from "@/icons/ShoppingCartIcon"

import {
    BannerContainer,
    ImageBanner,
    Figcaption,
    MoviePrice,
    Button,
    IconContainer
} from "./styles"

interface MovieBannerProps {
    movie: MovieType
    onAddMovieCart: Function
}

export const MovieBanner = ({ movie, onAddMovieCart }: MovieBannerProps) => {
    return (
        <BannerContainer>
            <figure>
                <ImageBanner 
                    src={ movie.image } 
                    alt={ movie.title } />
                
                <Figcaption>
                    { movie.title }
                </Figcaption>
            </figure>

            <MoviePrice>
                R$ { movie.price.toFixed(2) }
            </MoviePrice>

            <Button
                aria-label="Botão para adicionar produto ao carrinho"
                onClick={ () => onAddMovieCart(movie) }
                productInCart={ movie.inCart }>
                    <IconContainer>
                        <ShoppingCart color="#fff" /> { movie.quantidade }
                    </IconContainer>
                    
                    adicionar ao carrinho
            </Button>
        </BannerContainer>
    )
}

