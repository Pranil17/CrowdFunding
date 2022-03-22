import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import { Newsletter } from '../components/Newsletter';
import { Products } from '../components/Products';

const Container = styled.div``;
const Title = styled.div`
    margin:20px;
`;

const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;

const Filter = styled.div`
    margin:20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight:600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option``;


export const ProductList = () => {
  return (
      <Container>
          <Navbar/>
          <Announcement/>
          <Title>Products</Title>
          <FilterContainer>
              <Filter>
              <FilterText>
                  Filter Products
              </FilterText>
              <Select>
                  <Option disabled selected> Type</Option>
                  <Option>Technology</Option>
                  <Option>Charity</Option>
                  <Option>Fashion</Option>
              </Select>
              <Select>
                  <Option disabled selected>Product</Option>
                  <Option>Gadgets</Option>
                  <Option>Clothes</Option>
                  <Option>DigitalCopy</Option>
              </Select>
              </Filter>
              <Filter>
              <FilterText>
                Sort Products
              </FilterText>
              <Select>
                  <Option selected>Newest</Option>
                  <Option>Price (asc)</Option>
                  <Option>Price (desc)</Option>
              </Select>
              </Filter>
          </FilterContainer>
          <Products/>
          <Newsletter/>
          <Footer/>
      </Container>
  )
}
