import { useCallback } from "react"
import { useHistory } from "react-router-dom"

import { TextButton } from "@/components/TextButton"
import WormanImage from "@/assets/no-products.svg"

import {
    EmptyCartContainer,
    Title,
    TopMessage,
    BottomMessage,
    ImageMessage,
} from "./styles"

export const EmptyCartMessage = () => {
    const navigation = useHistory()

    const handleBackPage = useCallback(() => navigation.goBack(), [])

    return (
        <EmptyCartContainer>
            <TopMessage>
                <Title>
                    Parece que não há nada por aqui :(
                </Title>

                <ImageMessage src={WormanImage} alt="imagem de uma mulher" />
            </TopMessage>

            <BottomMessage>
                <TextButton 
                    arialLabel="Botão para voltar para pagina anterior" 
                    maxWidth={180}
                    onClick={ handleBackPage }>
                        voltar
                </TextButton>
            </BottomMessage>
        </EmptyCartContainer>
    )
}

