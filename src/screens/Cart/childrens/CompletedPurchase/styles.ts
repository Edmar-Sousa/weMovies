import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
    min-height: 574px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;

    border-radius: 4px;
    background: #fff;
`


export const Title = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 27px;

    text-align: center;
    color: #2F2E41;
`


export const Image = styled.img`
    width: 294px;
    height: 307px;

    margin: 0 auto;
`


export const Padding = styled.div`
    padding: 0 64px;

    display: flex;
    justify-content: center;
`