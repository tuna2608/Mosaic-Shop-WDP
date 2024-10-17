
import styled from 'styled-components'

export const BannerContent = styled.div`
    // margin-top: 80px;
    position: relative;
`
export const ImageBanner = styled.img`
    width: 100%;
`

export const ButtonContainer = styled.div`
    width: 100%;
    height: 100px;
    top: 500px;
    // background-color: red;
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const ButtonBanner = styled.a`
    background-color: var(--orange);
    font-size: 30px;
    font-weight: bold;
    padding: 20px 40px;
    border-radius: 80px;
    color: black;
    &:hover {
        cursor: pointer;
        color: white;
        background-color: black;
    }
`

