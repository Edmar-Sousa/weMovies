import React from "react"

import { MovieType } from "@/types"

import { TrashIcon } from "@/icons/TrashIcon"
import { MinusIcon } from "@/icons/MinusIcon"
import { PlusIcon } from "@/icons/PlusIcon"

import {
    Row,
    Column,
    Image,
    DetailProduct,
    TitleMovie,
    PriceMovie,
    ButtonIcon,
    ViewAmount,
    LittleTitle,
} from "./styles"

interface MobileItemViewProps {
    movie: MovieType
    handleRemoveMovie: Function
    handleChangeMovie: Function
}

export const MobileItemView = ({ movie, handleRemoveMovie, handleChangeMovie }: MobileItemViewProps) => {
    return (
        <Row>
            <Image src={ movie.image } alt={ movie.title } />

            <DetailProduct>
                <Row>
                    <TitleMovie>{ movie.title }</TitleMovie>

                    <Row>
                        <PriceMovie>R$ { movie.price.toFixed(2) }</PriceMovie>
                        
                        <ButtonIcon 
                            aria-label="Remover produto do carrinho"
                            onClick={ () => handleRemoveMovie(movie) }>
                                <TrashIcon color="#009EDD" />
                        </ButtonIcon>
                    </Row>
                </Row>

                <Row>
                    <Row width="min-content">
                        <ButtonIcon 
                            aria-label="Butão para remover uma unidade do produto"
                            onClick={() => handleChangeMovie('REMOVE_ONE_MOVIE', movie) }>
                                <MinusIcon color="#009EDD" />
                        </ButtonIcon>

                        <ViewAmount 
                            type="number" 
                            value={ movie.quantidade } 
                            disabled />

                        <ButtonIcon 
                            aria-label="Butão para adicionar uma unidade do produto"
                            onClick={() => handleChangeMovie('ADD_ONE_MOVIE', movie) }>
                                <PlusIcon color="#009EDD" />
                        </ButtonIcon>
                    </Row>

                    <Column>
                        <LittleTitle>subtotal</LittleTitle>
                        <PriceMovie>R$ { (movie.quantidade * movie.price).toFixed(2) }</PriceMovie>
                    </Column>
                </Row>
            </DetailProduct>
        </Row>
    )
}