import styled, { keyframes } from "styled-components"


interface LoaddingBackgroundProps {
    hidden?: boolean
}

export const LoaddingBackground = styled.div`
    display: ${ (props: LoaddingBackgroundProps) => !props.hidden ? 'flex' : 'none' };

    align-items: center;
    justify-content: center;

    position: fixed;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    z-index: 10;

    background: #2f2e41;
`

const LoaddingCircleAnimation = keyframes`
    0% { transform: rotateZ(0deg); }
    100% { transform: rotateZ(360deg); }
`

export const CircleLoadding = styled.div`
    width: 83px;
    height: 83px;

    animation: ${ LoaddingCircleAnimation } 2s infinite linear;
`

export const LoaderImage = styled.img`
    width: 83px;
    height: 83px;
`