import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import { Newsletter } from '../components/Newsletter';
import { Products } from '../components/Products';

const Container = styled.div``;
const Title = styled.div`
    margin:20px;
    font-size:25px;
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
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    /* const [filters,setFilters] = useState({}); */
    const [sort,setSort] = useState("newest");
    
   /*  const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    }; */

  return (
      <Container>
          <Navbar/>
          <Announcement/>
          <Title>{cat}</Title>
          <FilterContainer>
              <Filter>
              {/* <FilterText>
                  Filter Products
              </FilterText>
              <Select name="type" onChange={handleFilters}>
                  <Option disabled> Funding Need</Option>
                  <Option>Immediate</Option>
                  <Option></Option>
                  <Option>New</Option>
              </Select>
              <Select name="product" onChange={handleFilters}>
                  <Option disabled>Product</Option>
                  <Option>Gadgets</Option>
                  <Option>Clothes</Option>
                  <Option>DigitalCopy</Option>
              </Select> */}
              </Filter>
              <Filter>
              <FilterText>
                Sort Products
              </FilterText>
              <Select onChange={(e) => setSort(e.target.value)}>
                  <Option value="newest">Newest</Option>
                  <Option value="asc">Price (asc)</Option>
                  <Option value="desc">Price (desc)</Option>
              </Select>
              </Filter>
          </FilterContainer>
          <Products cat={cat} sort={sort}/>
          <Newsletter/>
          <Footer/>
      </Container>
  )
}
