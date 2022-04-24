import { Badge } from '@material-ui/core';
import { AccountBoxOutlined, AccountCircleOutlined, AccountCircleRounded, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../redux/apiCalls';
import { logoutProduct } from '../redux/cartRedux';
import {mobile} from "../responsive";

const Container = styled.div`
    height: 60px;
    ${mobile({height : "50px"})};
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex ;
    align-items: center;
    justify-content: space-between ;
    ${mobile({padding : "10px 0px"})};
`;
const Language = styled.span`
    fonst-size: 14px;
    cursor: pointer;
    ${mobile({display : "none"})};
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;
const Input = styled.input`
    border: none;
    ${mobile({width : "50px"})};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:2,justifyContent : "center"})};
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize : "12px",marginLeft:"10px"})};
    ${({ disable }) => disable && `
    background: blue;
  `}
`;

const Centre = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize : "24px"})};
`;

const Button = styled.button`
    background: white;
    border:none;
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    &:disabled{
    color: white;
    cursor:default;
  }
`;

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity);
    const user = useSelector((state)=>state.user.currentUser);
    const cart = useSelector(state=>state.cart);
    const dispatch = useDispatch();
    const [state,setState] = useState("");

    const handleClick = (e)=>{
        dispatch(logoutProduct(cart.products));
        logout(dispatch);
      }

      const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
      ? <Link to={to}>{children}</Link>
      : <Link to="/cart">{children}</Link>;
      
      const ConditionalLink01 = ({ children, to, condition }) => (!!condition && to)
      ? <Link to={to}>{children}</Link>
      : <Link to="/profile">{children}</Link>;
      
      const ConditionalLink02 = ({ children, to, condition }) => (!!condition && to)
      ? <Link to={to}>{children}</Link>
      : <Link to="/order">{children}</Link>;


  return (
    <Container>
    <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input placeholder="search"/>
                <Search style={{color:"gray",fontSize:16}}/>
            </SearchContainer>
            <ConditionalLink02 to="/login" condition={!user}>
                <Button>MyFundedProjects</Button>
            </ConditionalLink02> 
        </Left>
        <Link to="/">
        <Centre><Logo>Fund!T</Logo></Centre>
        </Link>
        <Right>         
        <Link to="/register">
        <Button disabled={user}>Register</Button>
        </Link>
        <Link to="/login">
        <Button disabled={user}>Sign in</Button>
        </Link>
        <Link to="/">
        <Button onClick={handleClick} disabled={!user} >Logout</Button>
        </Link>
        <MenuItem>GetFunding</MenuItem>
        <MenuItem>
        <ConditionalLink to="/login" condition={!user}>
        <Badge badgeContent={quantity} color="secondary">
            <ShoppingCartOutlined/>
        </Badge>
        </ConditionalLink>
        </MenuItem>
        <MenuItem>
        <ConditionalLink01 to="/login" condition={!user}>
            <AccountCircleOutlined/>
        </ConditionalLink01>    
        </MenuItem>
        </Right>
    </Wrapper>
    </Container>
  )
}

export default Navbar