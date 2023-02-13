import styled from "styled-components"



interface RowProps {
    width?: 'min-content'
}

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    width: ${ (props: RowProps) => props.width || 'auto' };

    @media (max-width: 350px) {
        gap: 6px;
    }
`


export const Image = styled.img`
    min-width: 64px;
    max-width: 89px;
    width: 100%;

    min-height: 86px;
    max-height: 114px;
`


export const DetailProduct = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
`


const Title = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
`

export const TitleMovie = styled(Title)`
    font-size: 1.4rem;
    line-height: 19px;

    text-transform: capitalize;
    color: #2F2E41;
`


export const PriceMovie = styled(Title)`
    font-size: 1.6rem;
    line-height: 22px;
    color: #2F2E41;
`


export const ButtonIcon = styled.button`
    width: 18px;
    height: 18px;

    cursor: pointer;

    background: none;
    border: none;
`


export const ViewAmount = styled.input`
    width: 59px;
    height: 26px;

    border: 1px solid #D9D9D9;
    border-radius: 4px;

    padding: 16px 12px;

    font-size: 1.4rem;
    font-weight: 400;
    color: #2F2E41;

    background: none;
`


export const Column = styled.div`
`

export const LittleTitle = styled(Title)`
    font-size: 1.2rem;
    line-height: 16px;

    text-transform: uppercase;
    color: #999999;
`


export const Table = styled.table`
    width: 100%;
`

export const TableTH = styled.th`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;

    font-size: 1.4rem;
    line-height: 19px;
    text-transform: uppercase;

    text-align: left;

    color: #999999;
`
