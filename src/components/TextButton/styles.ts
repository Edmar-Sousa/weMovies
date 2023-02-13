import styled from "styled-components"


interface ButtonProps {
    maxWidth?: number
}

export const Button = styled.button`
    max-width: ${ (props: ButtonProps) => `${props.maxWidth}px` || '100%' };
    width: 100%;
    height: 40px;

    border: none;
    margin: auto;

    background: #009EDD;
    border-radius: 4px;
    cursor: pointer;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 19px;
    text-align: center;
    text-transform: uppercase;

    color: #FFFFFF;

    &:hover {
        transform: scale(0.98);
    }
`
