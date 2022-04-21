import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components"
import { popularProducts } from "../data";
import { Product } from "./Product";
import axios from "axios"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


export const Products = ({cat,sort}) => {
  const [products,setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProduct = async ()=>{
      try{
        const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}`:
        `http://localhost:5000/api/products`
        );
        setProducts(res.data);
      }catch (err){}
    };
    getProduct()
  },[cat]);

  /* useEffect(()=>{
    cat && setFilteredProducts(
      products.filter(item=> Object.entries(filters).every(([key,value])=>
        item[key].includes(value)
      )
      )
    );
  },[products,cat,filters]); */

  useEffect(()=>{
    if(sort==="newest"){
      setProducts(prev=>
        [...prev].sort((a,b)=>a.createdAt - b.createdAt)
        )
    }else if(sort==="asc"){
      setProducts(prev=>
        [...prev].sort((a,b)=>a.reward_one - b.reward_one)
        )
    }else{
      setProducts(prev=>
        [...prev].sort((a,b)=>b.reward_one - a.reward_one)
        )
    }
  },[sort])

  return (
    <Container>
        {products.slice(0,8).map(item =>(
            <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}
