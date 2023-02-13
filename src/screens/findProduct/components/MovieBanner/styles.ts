import styled from "styled-components"


export const BannerContainer = styled.div`
    max-width: 343px;
    width: 100%;

    margin: auto;
    padding: 10px 16px;

    border-radius: 4px;
    background: #fff;
`


export const ImageBanner = styled.img`
    display: block;

    width: 147px;
    height: 188px;

    margin: auto;
`


export const Figcaption = styled.figcaption`
    margin-top: 7px;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;

    font-size: 1.2rem;
    line-height: 16px;
    text-align: center;

    color: #333333;
`


export const MoviePrice = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;

    font-size: 1.6rem;
    line-height: 22px;

    text-align: center;

    color: #2F2E41;
`


interface ButtonProps {
    productInCart?: boolean
}

export const Button = styled.button`
    width: 100%;
    height: 40px;

    background: ${ (props: ButtonProps) => props.productInCart ? '#039B00' : '#009EDD' };
    border-radius: 4px;

    margin-top: 8px;

    border: none;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 16px;
    text-align: center;

    text-transform: uppercase;

    color: #FFFFFF;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: scale(0.98);
    }
`


export const IconContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.4px;

    margin-right: 12px;
`

