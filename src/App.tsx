import React from "react"

import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom"

import { AppContextProvider } from "@/context/app"
import { Loadding } from "@/components/Loadding"
import { HeaderComponent } from "@/components/Header"

import {
    AppContainer,
    Padding,
} from "./styles"


import { FindProductScreen } from "@/screens/findProduct"
import { CartScreen } from "@/screens/Cart"

const App = () => {
    return (
        <BrowserRouter>
            <AppContainer>
                <AppContextProvider>
                    <Loadding />

                    <HeaderComponent />

                    <Padding>
                        <Switch>
                            <Route path="/" exact>
                                <FindProductScreen />
                            </Route>
                            
                            <Route path="/cart">
                                <CartScreen />
                            </Route>
                        </Switch>
                    </Padding>
                </AppContextProvider>
            </AppContainer>
        </BrowserRouter>
    )
}

export default App;
