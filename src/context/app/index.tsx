import { createContext, useReducer, ReactNode, Dispatch } from "react"

import { GlobalStateType } from "@/types"

import {  
    globalState, 
    reducer,
} from "./data"


interface AppContextType {
    state: GlobalStateType
    dispatch: Dispatch<any>
}

export const AppContext = createContext<AppContextType>({
    state: globalState,
    dispatch: () => null
})


interface AppContextProviderProps {
    children?: ReactNode
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [state, dispatch] = useReducer(reducer, globalState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            { children }
        </AppContext.Provider>
    );
}
