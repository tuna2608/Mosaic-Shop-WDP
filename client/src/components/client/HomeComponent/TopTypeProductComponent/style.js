import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Title = styled.div`
    text-align: center;
    font-size: 48px;
    font-weight: bold;
`

export const SubTitle = styled.div`
    margin-top: 20px;
    font-weight: 300;
    text-align: center;
    font-size: 20px;
`

export const TypeProduct = styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const LinkTypeProduct = styled(Link)`
    
    
`

export const TypeBox = styled.div`
    width: 370px;
    height: 200px;
    background-color: var(--grey);
    display: flex;
    justify-content: space-between;

    &:hover {
    transform: scale(1.1);
    z-index: 2;
    }
`

export const TypeName = styled.div`
    font-weight: bold;
    display: flex;
    width: 170px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    line-height: 32px;
    color: black;
`

export const ImgTypeProduct = styled.img`
    width: 200px;
    height: 100%;
`