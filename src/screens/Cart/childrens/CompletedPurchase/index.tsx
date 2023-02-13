import { useCallback } from "react"

import { useHistory } from "react-router-dom"

import { TextButton } from "@/components/TextButton"
import completedPurchase from "@/assets/completed-purchase.svg"

import {
    Container,
    Title,
    Image,
    Padding,
} from "./styles"

export const CompletePurchase = () => {
    const navigation = useHistory()

    const handleBackPage = useCallback(() => navigation.goBack(), [])

    return (
        <Container>
            <Title>Compra realizada com sucesso!</Title>
            <Image 
                src={ completedPurchase } 
                alt="imagem de um homem comfirmando a compra" />
            
            <Padding>
                <TextButton 
                    arialLabel="butão para voltar" 
                    maxWidth={180}
                    onClick={ handleBackPage }>
                        voltar
                </TextButton>
            </Padding>
        </Container>
    )
}
