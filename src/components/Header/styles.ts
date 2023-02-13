import styled from "styled-components"


export const HeaderContainer = styled.header`
    max-width: 960px;
    width: 100%;
    height: 68px;

    margin: 0 auto 24px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 18px 10px;
`


export const CartButton = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    
    text-decoration: none;
`


export const Column = styled.div`
`


export const Title = styled.h1`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 27px;

    color: #ffffff;
`


const TitleStyle = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
`


export const SmallTitle = styled(TitleStyle)`
    font-size: 1.4rem;
    line-height: 19px;

    display: none;

    color: #fff;

    @media (min-width: 616px) {
        display: block;
    }
`


export const LegendCart = styled(TitleStyle)`
    font-size: 1.2rem;
    line-height: 16px;

    text-align: right;

    color: #999999;
`
