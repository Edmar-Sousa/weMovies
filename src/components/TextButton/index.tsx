import { ReactNode, MouseEventHandler } from "react"

import {
    Button
} from "./styles"


type ButtonProps = {
    arialLabel?: string
    maxWidth?: number
    onClick?: MouseEventHandler<HTMLButtonElement>

    children?: ReactNode
}

export const TextButton = ({ arialLabel, maxWidth, onClick, children }: ButtonProps) => {
    return (
        <Button 
            aria-label={ arialLabel } 
            maxWidth={maxWidth}
            onClick={onClick}>
            { children }
        </Button>
    )
}
