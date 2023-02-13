import { useContext, useCallback, MouseEvent } from "react"
import { NavLink } from "react-router-dom"

import { AppContext } from "@/context/app"
import { BagIcon } from "@/icons/BagIcon"

import {
    HeaderContainer, 
    CartButton, 
    Title,
    SmallTitle,
    LegendCart,
    Column,
} from "./styles"


export const HeaderComponent = () => {
    const { state } = useContext(AppContext)


    return (
        <HeaderContainer>
            <Title>WeMovies</Title>

            <NavLink 
                to="/cart" 
                aria-label="Link para seu carrinho de compras" 
                style={{ textDecoration: 'none' }}>
                    <CartButton>
                        <Column>
                            <SmallTitle>Meu carrinho</SmallTitle>

                            <LegendCart aria-label="0 items adicionados na cesta">
                                { state.cartCountMovies } items
                            </LegendCart>
                        </Column>
                        
                        <BagIcon color="#fff" />
                    </CartButton>
            </NavLink>
        </HeaderContainer>
    )
}

