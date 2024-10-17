import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import ProductCardCate from "./ProductCardCate"
import { mobile } from '../../utilities/responsive';
import SoldOut from './SoldOut';
import { publicRequest } from '../../utilities/requestMethod';

const Container = styled.div`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px;
  gap: 50px;
  ${mobile({ flexDirection: 'column', justifyContent: 'flex-start' })}
`;
const Title = styled.p`
  font-size: 32px;
  color: rgb(253, 0, 0);
  font-weight: 600;
  margin: 20px 20px 0 20px;
  display: flex;
  align-items: center;
  ${mobile({ textAlign: "center" })}
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
`

const Products = ({ cate, filter = 'default', sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await publicRequest.get(
          cate ? `/products?category=${cate}` : '/products'
        );
        setProducts(response.data);
      } catch (error) { }
    };
    getProducts();
  }, [cate]);

  useEffect(() => {
    cate &&
      setFilteredProducts(
        products.filter(
          (product) => product.price >= filter[0] && product.price <= filter[1]
        )
      );
    if (filter[0] === 'default') {
      setFilteredProducts(products);
    }
  }, [products, cate, filter]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <>
      <Title><Image src="/images/utils/new.jpg" /><span>Sản Phẩm Mới Nhất</span></Title>
      <Container>
        {cate ? (
          filteredProducts.length !== 0 ? (
            filteredProducts.map((p) => <ProductCardCate key={p.id} product={p} />)
          ) : (
            <SoldOut />
          )
        ) : (
          products.slice(0, 8).map((p) => <ProductCard key={p.id} product={p} />)
        )}
      </Container>
    </>
  );
};

export default Products;
