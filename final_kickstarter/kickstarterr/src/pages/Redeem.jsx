import React from 'react'
import styled from 'styled-components';
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

const ProductAmountContainer = styled.div`
    display:flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    padding:10px;
    margin: 5px;
    border-style: solid;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

const Hr = styled.hr`
    margin: 5px 5px;
`;

const Button = styled.button`
    ${'' /*  flex:1;
    display:flex;
    flex-direction:column; */}
    width:100px;
    height:40px;
    padding:10px;
    margin-top:40px;
    align-items:center;
    justify-content: center;
    cursor:pointer;
    border:${props=>props.type === "filled" && "none"};
    background-color:${props=>props.type === "filled" ? "black" : "transparent"};
    color:${props=>props.type === "filled" && "white"};
`;

export const Redeem = () => {
  return (
      <Container>
      <Navbar/>
      <Announcement/>
                <Product>
                    <ProductDetail>
                        <Image src="https://cdn.pixabay.com/photo/2019/05/08/00/31/netflix-4187478_960_720.png"/>
                        <Details>
                            <ProductName><b>Gift card:</b>Netflix</ProductName>
                            <ProductId><b>Reward points needed:</b>300 points</ProductId>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                       {/*  <ProductAmountContainer>
                            <ProductAmount>{product.quantity}</ProductAmount>
                        </ProductAmountContainer> */}
                        <ProductPrice><b>Reward worth:</b>100rs</ProductPrice>
                    </PriceDetail>
                    <Hr/>
                    <Button >Redeem</Button>                    
                    </Product>
                    <Product>
                    <ProductDetail>
                        <Image src="https://cdn.pixabay.com/photo/2017/03/29/00/50/amazon-2183855_960_720.png"/>
                        <Details>
                            <ProductName><b>Gift card:</b>Amazon</ProductName>
                            <ProductId><b>Reward points needed:</b>1500 points</ProductId>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                       {/*  <ProductAmountContainer>
                            <ProductAmount>{product.quantity}</ProductAmount>
                        </ProductAmountContainer> */}
                        <ProductPrice><b>Reward worth:</b>500rs</ProductPrice>
                    </PriceDetail>
                    <Hr/>
                    <Button >Redeem</Button>                    
                    </Product>
        <Newsletter/>
        <Footer/>            
        </Container>            
  )
}
