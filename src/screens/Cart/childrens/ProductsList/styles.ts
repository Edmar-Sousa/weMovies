import styled from "styled-components"


export const ProductContainer = styled.div`
    width: 100%;
    min-height: 716px;

    padding: 16px;

    display: flex;
    flex-direction: column;

    background: #fff;
    border-radius: 4px;

    @media (min-width: 1024px) {
        min-height: 286px;
    }
`


export const Information = styled.div`
    width: 100%;

    margin-top: 21px;
    padding-top: 21px;
    
    border-top: 1px solid #999999;

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
    }
`


const Title = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
`

export const Price = styled(Title)`
    width: 130px;
    text-align: center;

    font-size: 2.4rem;
    line-height: 33px;

    color: #2F2E41;
`

export const LittleTitle = styled(Title)`
    font-size: 1.4rem;
    line-height: 19px;
    text-transform: uppercase;

    color: #999999;
`

export const Row = styled.div`
    width: 100%;
    
    margin-bottom: 16px;

    display: flex;
    justify-content: right;
    align-items: center;
`


export const AreaList = styled.div`
    flex: 1;
    
    display: flex;
    flex-direction: column;

    gap: 16px;
`
