import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { FavoriteBorderOutlined, Search } from "@mui/icons-material";
import { formatCurrency } from "../../utilities/formatCurrency";
import { Link } from "react-router-dom";
import { mobile } from "../../utilities/responsive";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/apiCalls";

const Info = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  width: 275px;
  height: 100%;
  background-color: var(--brown);
  border-radius: 20px;
  color: white;
  // padding-bottom: 20px;

  ${mobile({ display: "flex", flexFlow: "column", alignItems: "center" })}
`;

const ImageContainer = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 90%;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  background-color: #e9f5f5;

  &:hover {
    transform: scale(1.1);
  }
`;
const ItemInfo = styled.div`
  margin: 5px;
`;
const ItemName = styled.p`
  margin-bottom: 4px;
  font-weight: 600;
`;
const ItemPrice = styled.p`
  font-weight: 300;
`;

const CardImage = styled.img`
  border-radius: 20px;
  width: 100%;
  height: 205px;
`;
const CardCategorie = styled.div`
  font-weight: bold;
  color: var(--light-grey);
`;
const CardInfo = styled.div`
  padding: 10px 20px 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CardName = styled.div`
  font-weight: bold;
  font-size: 24px;
`;
const CardPrice = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
  color: var(--light-grey);
`;

const CardBtnNow = styled.button`
  margin-left: -10px;
  padding: 10px 35px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  color: white;
  border: 1px solid white;
  background-color: var(--brown);
  &:hover {
    cursor: pointer;
    background-color: white;
    color: var(--brown);
  }
`;

const CardBtnAdd = styled.div`
  width: 40px;
  height: 40px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-item: center;
  background-color: white;
  color: var(--brown);
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;

const CardBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  // Redux
  const handleAddToCart = () => {
    addToCart(dispatch, { productId: product.id, quantity: 1 });
  };
  return (
    <Link to={`/product/${product._id}`}>
      <Container>
        <CardImage src={product.img} />
        <CardInfo>
          <CardCategorie>Mosaic kits</CardCategorie>
          <CardName>{product.title}</CardName>
          <CardPrice>{formatCurrency(product.price)}</CardPrice>
          <CardBtnContainer>
            <CardBtnNow>Mua ngay</CardBtnNow>
            <CardBtnAdd 
            // onClick={handleAddToCart}
            >
              <ShoppingCartOutlined />
            </CardBtnAdd>
          </CardBtnContainer>
        </CardInfo>

        {/* <Image src={product.img}/> */}
        {/* <ImageContainer>
        <Image src={product.img} width={300} />
        <Info>
          <Icon>
            <ShoppingCartOutlinedIcon />
          </Icon>
          <Link to={`/product/${product._id}`}>
            <Icon>
              <Search style={{ color: '#111' }} />
            </Icon>
          </Link>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </ImageContainer>
      <ItemInfo>
        <ItemName>{product.title}</ItemName>
        <ItemPrice>{formatCurrency(product.price)}</ItemPrice>
      </ItemInfo> */}
      </Container>
    </Link>
  );
};

export default ProductCard;
