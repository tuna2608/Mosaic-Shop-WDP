import React from "react";
import styled from "styled-components";
import { categories } from "../../data/categories";
import CategoryCard from "./CategoryCard";
import { mobile } from "../../utilities/responsive";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ flexFlow: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryCard key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
