import { Add, Remove } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import { Newsletter } from '../components/Newsletter';
import StripeCheckout from "react-stripe-checkout";
import { useState } from 'react';

const KEY = process.env.REACT_APP_STRIPE;
console.log(KEY);

const Container = styled.div``;

const Wrapper = styled.div`
    padding:20px;
`;

const Title = styled.h1`
    font-weight:300;
    text-align:center;
`;

const Top = styled.div`
    display:flex;
    align-items: center;
    justify-content:space-between;
    padding:20px;
`;

const TopButton = styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border:${props=>props.type === "filled" && "none"};
    background-color:${props=>props.type === "filled" ? "black" : "transparent"};
    color:${props=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
`;

const Bottom = styled.div`
    display:flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex:3;
`;

const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radiuss: 10px;
    padding: 20px;
    height: 50vh;
`;

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

const SummaryTitle = styled.h1`
    font-weight:200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display:flex;
    justify-content: space-between;
    font-weight:${props=>props.type === "total" && "500"}
    font-size:${props=>props.type === "total" && "24px"}
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.div``;

const Button = styled.button`
    width:100%;
    padding: 10px;
    background-color:black;
    color:white;
    font-weight:600;
`;

export const Cart = () => {
    const cart = useSelector(state=>state.cart);
    const [stripeToken,setStripeToken] = useState(null);

    const onToken = (token)=>{
        setStripeToken(token);
    };

    console.log(stripeToken);
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR CART</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(3)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    {cart.products.map(product => (
                        <Product>
                    <ProductDetail>
                        <Image src={product.img}/>
                        <Details>
                            <ProductName><b>Product:</b>{product.title}</ProductName>
                            <ProductId><b>ID:</b> {product._id}</ProductId>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                       {/*  <ProductAmountContainer>
                            <ProductAmount>{product.quantity}</ProductAmount>
                        </ProductAmountContainer> */}
                        <ProductPrice>{product.price*product.quantity}</ProductPrice>
                    </PriceDetail>
                    </Product>
                    ))}
                    <Hr/>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>20 rs</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discount</SummaryItemText>
                        <SummaryItemPrice>-10 rs</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>{cart.total}rs</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout
                    name = "Fund!T"
                    billingAddress
                    shippingAddress
                    description={`Your total is $${cart.total}`}
                    amount={cart.total*100}
                    token={onToken}
                    stripeKey={KEY}
                    >
                    <Button>CHECKOUT NOW</Button>
                    </StripeCheckout>
                </Summary>
            </Bottom>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
