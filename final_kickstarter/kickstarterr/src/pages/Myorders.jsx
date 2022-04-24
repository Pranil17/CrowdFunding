import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import { Newsletter } from '../components/Newsletter';

const Container = styled.div``;
const Product = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:10px;
`;

const ProductDetail = styled.div`
    flex:2;
    display:flex;
`;

const Image = styled.img`
    width:200px;
`;

const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

const Hr = styled.hr`
    margin: 5px 5px;
`;



export const Myorders = () => {
    const user = useSelector((state)=>state.user.currentUser);
  const [posts, setPosts] = useState([]);

  const expensesListResp = async () => {
    await axios.get('http://localhost:5000/api/orders/find/'+user._id).then(res => setPosts(res.data[0].products))
  }
  expensesListResp();
  

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        {posts.map(product => (
                    <Product>
                    <ProductDetail>
                        <Image src={product.img}/>
                        <Details>
                            <ProductName><b>Product:</b>{product.title}</ProductName>
                            <ProductId><b>ID:</b> {product.productId}</ProductId>
                        </Details>
                    </ProductDetail>
                    <Hr/>                    
                    </Product>
                    ))}
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
