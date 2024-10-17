import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Navbar from "../../../components/client/Navbar";
import HeaderComponent from "../../../components/client/HeaderComponent/HeaderComponent";
import FooterComponent from "../../../components/client/FooterComponent/FooterComponent";
import Announcement from "../../../components/client/Announcement";
import Footer from "../../../components/client/Footer";
import { formatCurrency } from "../../../utilities/formatCurrency";
import Newsletter from "../../../components/client/Newsletter";
import { Add, Remove } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { mobile } from "../../../utilities/responsive";
import { publicRequest } from "../../../utilities/requestMethod";
import { addToCart } from "../../../redux/apiCalls";
import { useDispatch } from "react-redux";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import {
  Amount,
  AmountText,
  ButtonAddCart,
  ButtonBuy,
  ButtonFeedback,
  ButtonText,
  Cart,
  CartImg,
  CartPrice,
  CartTitle,
  Container,
  ContainerContent,
  ContainerHeader,
  Content,
  Description,
  Feedback,
  FeedbackAmount,
  FeedbackContent,
  FeedbackNumber,
  FeedbackNumberImg,
  FeedbackStar,
  FeedbackStatic,
  FeedbackStaticRow,
  NumberText,
  PopulateCenter,
  PopulateContainer,
  PopulateTitle,
  ProductBuy,
  ProductContainer,
  ProductContent,
  ProductName,
  RowName,
  RowSpace,
  Star,
  StarAmount,
  Title,
} from "./style";

import starLogo from '../../../assets/images/exe/icon-glowing-star.png'
import image5 from '../../../assets/images/exe/image5.png'

// const ItemContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 50px;
//   ${mobile({ flexFlow: "column", justifyContent: "center" })}
// `;

const ImageContainer = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ flexFlow: "column" })}
`;
const Image = styled.img`
  width: 470px;
  height: 470px;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;

const InfoContainer = styled.div`
  // flex: 6;
  width: 570px;
  display: flex;
  flex-flow: column;
  // gap: 30px;
  padding: 0 50px;
  ${mobile({ flexFlow: "column" })}
`;
// const ItemName = styled.p`
//   font-size: 40px;
//   font-weight: 600;
//   ${mobile({ alignItems: "center", fontSize: "30px" })}
// `;
const ItemDesc = styled.p`
  margin-top: 30px;
  font-size: 24px;
  font-weight: 300;
  ${mobile({ fontSize: "12px" })}
`;
// const ItemPrice = styled.p`
//   font-size: 40px;
// `;

const ProductPrice = styled.div`
  margin-top: 30px;
  color: var(--red);
  font-size: 32px;
  font-weight: bold;
`;

// const TitleMaterial = styled.p`
//   font-style: italic;
//   font-weight: 500;
// `;
// const ListMaterials = styled.ul`
//   padding-left: 20px;
//   ${mobile({ paddingLeft: "20px" })}
// `;
// const ItemMaterial = styled.li`
//   font-weight: 300;
// `;

// const TextNote = styled.p`
//   font-size: 12px;
//   color: #3a7187;
// `;

// const AddContainer = styled.div`
//   width: 40%;
//   display: flex;
//   gap: 20px;
//   align-items: center;
//   justify-content: space-between;
// `;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  padding: 5px 10px;
  background-color: var(--orange);
  border-radius: 20px;
`;
const Amount1 = styled.div`
  // border: 1px solid teal;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// const AddToCartButton = styled.button`
//   padding: 15px;
//   color: white;
//   background-color: var(--orange);
//   border: none;
//   font-size: 16px;
//   font-weight: 500;
//   ${mobile({ padding: "4px 10px", fontSize: "10px" })}

//   &:hover {
//     cursor: pointer;
//     background-color: #3a8787;
//   }
// `;

const Product = () => {
  const [shouldScrollToTop, setShouldScrollToTop] = useState(true);

  useEffect(() => {
    if (shouldScrollToTop) {
      window.scrollTo(0, 0);
      setShouldScrollToTop(false);
    }
  }, [shouldScrollToTop]);

  const [product, setProduct] = useState({});
  const location = useLocation();
  const productID = location.pathname.split("/")[2];

  // Handle Quantity
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (type) => {
    if (type === "desc") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
    setShouldScrollToTop(false);
  };

  // Add to cart
  // const handleAddToCart = () => {};

  useEffect(() => {
    const getProduct = async () => {
      const response = await publicRequest.get(`/products/find/${productID}`);
      setProduct(response.data);
    };
    getProduct();
  }, [productID]);
  const dispatch = useDispatch();
  // Redux
  const handleAddToCart = () => {
    addToCart(dispatch, { productId: productID, quantity: quantity });
  };

  return (
    <>
      {/* <Navbar /> */}
      <HeaderComponent />
      <Container>
        {/* <Announcement /> */}
        <ProductContainer>
          <ProductContent>
            <ImageContainer>
              <Image src={product.img}></Image>
            </ImageContainer>
            <InfoContainer>
              <ProductName>{product.title}</ProductName>
              <ItemDesc>Tranh mosaics</ItemDesc>
              <Star>
                <StarRateIcon style={{ color: "#f3cd04" }} />
                <StarRateIcon style={{ color: "#f3cd04" }} />
                <StarRateIcon style={{ color: "#f3cd04" }} />
                <StarRateIcon style={{ color: "#f3cd04" }} />
                <StarRateIcon style={{color: "#fff"}}/>
              </Star>
              <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
              <Amount>
                <AmountText>Số lượng</AmountText>
                <AmountContainer>
                  <Remove
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#fff",
                      borderRadius: "100%",
                    }}
                    onClick={() => handleQuantity("desc")}
                  />
                  <Amount1>{quantity}</Amount1>
                  <Add
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#fff",
                      borderRadius: "100%",
                    }}
                    onClick={() => handleQuantity("asc")}
                  />
                </AmountContainer>
              </Amount>
              <ProductBuy>
                <ButtonBuy>Mua ngay</ButtonBuy>
                <ButtonAddCart onClick={handleAddToCart}>
                  Thêm vào giỏ hàng
                </ButtonAddCart>
              </ProductBuy>
            </InfoContainer>
          </ProductContent>
        </ProductContainer>
      </Container>
      <Description>
        <Title>Mô tả sản phẩm</Title>
        <Content>
        {product.desc}
        
          {/* <p>
            Tranh trang trí Mosaic Art phong cách cổ điển họa tiết hoa hướng
            dương <br />
          </p>
          <p>
            Thông tin sản phẩm: <br />
            Kích thước: 15x15cm <br />
            Khung viền gỗ, khảm đá thuỷ tinh màu <br />
          </p>
          <p>Mosart | Nghệ thuật tranh khảm </p>
          <p>
            🧩Tuy đã xuất hiện từ thời cổ đại, nhưng dòng chảy của nó vẫn không
            ngừng nghỉ cho đến tận ngày nay - và đã được các nghệ sỹ biến hoá
            sao cho hợp với hơi thở đương đại. <br />
          </p>
          <p>
            🧩Chất liệu, màu sắc & đề tài càng ngày càng phong phú, đa dạng hơn.
            Người Thương biết không, Văn hoá Mỹ thuật sẽ luôn luôn là món ăn
            tinh thần không thể thiếu của nhân loại. <br />
          </p>
          <p>
            🧩Vậy nên sẽ chẳng bao giờ là quá muộn để trải nghiệm những điều mới
            lạ đâu nè! Kỹ thuật ghép mảnh trên các vật liệu Gốm, kính, trai,
            trứng được các nghệ nhân bấm bẻ từng miếng nhỏ tạo thành các hình
            họa tiết trên sản phẩm. Các mảng màu phong phú đa dạng <br />
          </p> */}
        </Content>
      </Description>

      <Feedback>
            <Title>
                Đánh giá sản phẩm
            </Title>
            <FeedbackContent>
                <FeedbackStar>
                    <FeedbackAmount>
                        0 trên 5
                    </FeedbackAmount>
                    <StarAmount>
                      <StarRateIcon style={{ color: "#f3cd04" }} />
                      <StarRateIcon style={{ color: "#f3cd04" }} />
                      <StarRateIcon style={{ color: "#f3cd04" }} />
                      <StarRateIcon style={{ color: "#f3cd04" }} />
                      <StarRateIcon style={{ color: "#f3cd04" }} />
                    </StarAmount>
                </FeedbackStar>
                <FeedbackStatic>
                    <FeedbackStaticRow>
                        <RowName>
                            5 stars
                        </RowName>
                        <RowSpace>
                        </RowSpace>
                        <RowName>
                            0
                        </RowName>
                    </FeedbackStaticRow>

                    <FeedbackStaticRow>
                        <RowName>
                            4 stars
                        </RowName>
                        <RowSpace>
                        </RowSpace>
                        <RowName>
                            0
                        </RowName>
                    </FeedbackStaticRow>
                    <FeedbackStaticRow>
                        <RowName>
                            3 stars
                        </RowName>
                        <RowSpace>
                        </RowSpace>
                        <RowName>
                            0
                        </RowName>
                    </FeedbackStaticRow>
                    <FeedbackStaticRow>
                        <RowName>
                            2 stars
                        </RowName>
                        <RowSpace>
                        </RowSpace>
                        <RowName>
                            0
                        </RowName>
                    </FeedbackStaticRow>
                    <FeedbackStaticRow>
                        <RowName>
                            1 stars
                        </RowName>
                        <RowSpace>
                        </RowSpace>
                        <RowName>
                            0
                        </RowName>
                    </FeedbackStaticRow>
                </FeedbackStatic>
                <ButtonFeedback>
                    Gửi đánh giá của bạn
                </ButtonFeedback>
            </FeedbackContent>
            <FeedbackNumber>
                <FeedbackNumberImg src={starLogo} alt=""/>
                <NumberText>
                    Hiện chưa có đánh giá nào
                </NumberText>
            </FeedbackNumber>
        </Feedback>
        <div>
            <PopulateCenter>
                <PopulateContainer>
                    <ContainerHeader>
                        <PopulateTitle>
                            Mosaics kits test
                        </PopulateTitle>
                        <Link>
                            <ButtonText class="button-text">See more</ButtonText>
                        </Link>
                    </ContainerHeader>
                    <ContainerContent>
                        <Cart>
                            <CartImg src={image5} alt=""/>
                            <CartTitle>
                                Mandala Serving Tray Kit
                            </CartTitle>
                            <CartPrice>
                                60.000 đ
                            </CartPrice>
                        </Cart>
                        <Cart>
                            <CartImg src={image5} alt=""/>
                            <CartTitle>
                                Mandala Serving Tray Kit
                            </CartTitle>
                            <CartPrice>
                                60.000 đ
                            </CartPrice>
                        </Cart>
                        <Cart>
                            <CartImg src={image5} alt=""/>
                            <CartTitle>
                                Mandala Serving Tray Kit
                            </CartTitle>
                            <CartPrice>
                                60.000 đ
                            </CartPrice>
                        </Cart>
                        <Cart>
                            <CartImg src={image5} alt=""/>
                            <CartTitle>
                                Mandala Serving Tray Kit
                            </CartTitle>
                            <CartPrice>
                                60.000 đ
                            </CartPrice>
                        </Cart>
                    </ContainerContent>
                </PopulateContainer>
            </PopulateCenter>
        </div>
      <Container>
        {/* <Announcement />
        <ItemContainer>
          <ImageContainer>
            <Image src={product.img}></Image>
          </ImageContainer>
          <InfoContainer>
            <ItemName>{product.title}</ItemName>
            <ItemDesc>{product.desc}</ItemDesc>
            <ItemPrice>{formatCurrency(product.price)}</ItemPrice>
            <TitleMaterial>This set includes:</TitleMaterial>
            <ListMaterials>
              {product?.materials?.map((m) => (
                <ItemMaterial key={m}>{m}</ItemMaterial>
              ))}
            </ListMaterials>
            <TextNote>
              Kindly be advised that the featured arrangement will be provided,
              unless circumstances such as seasonal availability or unforeseen
              factors necessitate substitutions. When making a purchase on this
              website, the customer grants authorization for substitutions
              within a designated color palette. Any required substitutions will
              be made at the discretion of our skilled designers.
            </TextNote>
            <AddContainer>
              <AmountContainer>
                <Remove
                  style={{ cursor: "pointer" }}
                  onClick={() => handleQuantity("desc")}
                />
                <Amount1>{quantity}</Amount1>
                <Add
                  style={{ cursor: "pointer" }}
                  onClick={() => handleQuantity("asc")}
                />
              </AmountContainer>
              <AddToCartButton onClick={handleAddToCart}>
                ADD TO CART
              </AddToCartButton>
            </AddContainer>
          </InfoContainer>
        </ItemContainer>
        <Newsletter /> */}
      </Container>
      <FooterComponent />
    </>
  );
};

export default Product;
