import React from "react"

/// @ts-ignore -- VScode does resolve module imports, with absolute path --
import { ShoppingCart } from "@/icons/ShoppingCartIcon"

import {
    Button,
    IconContainer
} from "./styles"

export const BannerButton = () => {
    return (
        <Button aria-label="Botão para adicionar produto ao carrinho">
            <IconContainer>
                <ShoppingCart color="#fff" /> 0
            </IconContainer>
            
            adicionar ao carrinho
        </Button>
    )
}
