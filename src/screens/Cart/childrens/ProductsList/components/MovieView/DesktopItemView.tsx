import React from "react"

import tempImage from "@/assets/viuva-negra.png"

import { TrashIcon } from "@/icons/TrashIcon"
import { MinusIcon } from "@/icons/MinusIcon"
import { PlusIcon } from "@/icons/PlusIcon"

import { MovieType } from "@/types"

import {
    Row,
    Image,
    TitleMovie,
    PriceMovie,
    ButtonIcon,
    ViewAmount,
    Table,
    TableTH,
} from "./styles"


interface LineTableProps {
    movie: MovieType
    handleRemoveMovie: Function
    handleChangeMovie: Function
}
const LineTable = ({ movie, handleRemoveMovie, handleChangeMovie }: LineTableProps) => {
    return (
        <tr>
            <td width={140}>
                <Image src={ movie.image } alt={ movie.title } />
            </td>

            <td>
                <TitleMovie>{ movie.title }</TitleMovie>
                <PriceMovie>R$ { movie.price.toFixed(2) }</PriceMovie>
            </td>

            <td width={170}>
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
            </td>

            <td>
                <PriceMovie>R$ { (movie.quantidade * movie.price).toFixed(2) }</PriceMovie>
            </td>

            <td width={16}>
                <ButtonIcon 
                    aria-label="Remover produto do carrinho"
                    onClick={() => handleRemoveMovie(movie) }>
                        <TrashIcon color="#009EDD" />
                </ButtonIcon>
            </td>
        </tr>
    )
}


interface DesktopItemViewProps {
    movies: Array<MovieType>
    handleRemoveMovie: Function
    handleChangeMovie: Function
}

export const DesktopItemView = ({ movies, handleRemoveMovie, handleChangeMovie }: DesktopItemViewProps) => {
    return (
        <Table>
            <thead>
                <tr>
                    <TableTH colSpan={2}>Produto</TableTH>
                    <TableTH>QTD</TableTH>
                    <TableTH>Subtotal</TableTH>
                </tr>
            </thead>

            <tbody>
                { movies.map(movie => (
                    <LineTable 
                        key={movie.title} 
                        movie={ movie } 
                        handleRemoveMovie={ handleRemoveMovie }
                        handleChangeMovie={ handleChangeMovie } />)
                )}
            </tbody>
        </Table>
    )
}