import React from "react"

import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom"

import { ProductsList } from "./childrens/ProductsList"
import { CompletePurchase } from "./childrens/CompletedPurchase"

import {
    CartContainer,
} from "./styles"

export const CartScreen = () => {
    const { url } = useRouteMatch()

    return (
        <CartContainer>
            <Switch>
                <Route path={url} exact>
                    <ProductsList />
                </Route>

                <Route path={`${url}/confirm`}>
                    <CompletePurchase />
                </Route>
            </Switch>
        </CartContainer>
    )
}

