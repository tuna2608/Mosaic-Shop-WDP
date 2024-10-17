import { StarRate } from "@mui/icons-material";
import styled from "styled-components";

export const Container = styled.div`
    // padding-top: 80px;
`

export const ProductContainer = styled.div`
    padding: 65px 120px;
    background-color: var(--grey);
`

export const ProductContent = styled.div`
    height: 470px;
    display: flex;
    justify-content: space-between;
`

export const ImageProduct = styled.div`
    width: 470px;
    height: 470px;
    z-index: 2;
`

export const ProductName = styled.div`
    font-size: 36px;
    font-weight: bold;
`

export const Star = styled.div`
    margin-top: 40px;
`

// export const StarIcon = styled(StarRate)`
//     font-size: 20px;
//     color: var(--yellow);
// `


export const Amount = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 20px;
    align-items: center;
`

export const AmountText = styled.div`
    font-size: 24px;
    width: 193px;
    font-weight: bold;
    color: var(--dark-grey);
`

export const AmountBoxEdit = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    background-color: var(--orange);
    border-radius: 20px;
`

export const AmountInput = styled.input`
    width: 20px;
    padding: 2px 10px;
    text-align: center;
    border: none;
    font-size: 20px;
    background-color: var(--orange);
`

export const AmountIconBox = styled.button`
    width: 26.67px;
    height: 26.67px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    border: none;
`

export const AmountIcon = styled.div`
    font-size: 8.16px;
`

export const ProductBuy = styled.div`
    margin-top: 70px;
    width: 470px;
    height: 64px;
    display: flex;
    justify-content: space-between;
`

export const ButtonBuy = styled.div`
    width: 170px;
    height: 64px;
    // background-color: #cd2325;
    background-color: var(--orange);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 24px;
    font-weight: Medium;
    color: white;
    border: none;
    &:hover{
        cursor: pointer;
        // border: 2px solid ;
        background-color: black;
        // color: #cd2325;
    }
`

export const ButtonAddCart = styled.div`
    width: 270px;
    height: 64px;
    background-color: white;
    border: 2px solid var(--orange);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 24px;
    font-weight: Medium;
    color: var(--orange);

    &:hover{
        cursor: pointer;
        background-color: black;
        color: white;
        border: none;
    }
`

export const Description = styled.div`
    padding: 0px 120px;
`

export const Title = styled.div`
    margin-top: 50px;
    font-size: 48px;
    font-weight: 500;
    text-align: center;
`
export const XuongDong = styled.div`
    margin-top: 20px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 500;
    gap: 20px;
`

export const Feedback = styled.div`
    margin-top: 20px;
    padding: 20px 120px;
    background-color: var(--grey);
    height:600px;
`

export const FeedbackContent = styled.div`
    margin-top: 30px;
    height: 110px;
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
`

export const FeedbackStar = styled.div`
    width: 140px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StarAmount = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    gap: 15px;
    color: var(--yellow);
`

export const FeedbackAmount = styled.div`
    font-size: 36px;
    font-weight: 500;
`

export const FeedbackStatic = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const FeedbackStaticRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

export const RowName = styled.div`
    font-size: 10px;
    font-weight: 500;
`

export const RowSpace = styled.div`
    width: 351px;
    height: 6px;
    background-color: white;
    border-radius: 10px;
`

export const ButtonFeedback = styled.div`
    width: 400px;
    height: 88px;
    background-color: var(--orange);
    font-size: 32px;
    font-weight: 500;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`

export const FeedbackNumber = styled.div`
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FeedbackNumberImg = styled.img`
    width: 150px;
    height: 150px;
`

export const NumberText = styled.div`
    margin-top: 30px;
    font-size: 24px;
`

export const Populate = styled.div`
    height: 450px;
    padding: 0 120px; 
    /* background-color: var(--grey); */
    display: flex;
    gap: 40px;
`

export const PopulateContainer = styled.div`
    margin-top: 40px;
`

export const PopulateImg = styled.div`
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
    height: fit-content;
    
    /* background-color: antiquewhite; */
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
`

export const Cart = styled.div`
    width: 270px;
    height: 410px;
    background-color: var(--brown);
    border-radius: 10px;
`

export const CartImg = styled.img`
    width: 270px;
    height: 205px;
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

export const PopulateLeft = styled.div`
    justify-content: start;
`

export const PopulateRight = styled.div`
    justify-content: end;
`
export const PopulateCenter = styled(Populate)`
    justify-content: center;
    height: auto;
`

export const PopulateContainerCenter = styled.div`
    padding: 0 120px;
`

