import styled from "styled-components";


export const Populate = styled.div`
    margin-top: 80px;
    height: 450px;
    width: 100%;
    background-color: var(--grey);
    display: flex;
    gap: 40px;
`

export const PopulateContainer = styled.div`
        margin-top: 40px;

`

export const ImgPopulate = styled.img`
    width: 470px;
    height: 450px;
`

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

export const PopulateTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    max-width: 200px;
`

export const LinkPopulate = styled.a`

`

export const ButtonText = styled.div`
    width: 169px;
    height: 54px;
    font-size: 20px;
    font-weight: bold;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--orange);
    border-radius: 50px;
`

export const ContainerContent = styled.div`
    margin-top: 40px;
    display: flex;
    gap: 40px;
`

export const Cart = styled.div`
    width: 170px;
    height: 260px;
    background-color: var(--brown);
    border-radius: 10px;
`

export const ImgCart = styled.img`
    width: 170px;
    height: 130px;
    border-radius: 10px;
`

export const CartTitle = styled.div`
    padding: 10px 10px;
    color: white;
    font-size: 20px;
    font-weight: bold;
`

export const CartPrice = styled.div`
    padding: 0 10px;
    font-size: 12px;
    color: var(--light-grey);
    font-weight: bold;
`

export const PopulateLeft = styled(Populate)`
    justify-content: start;
`


