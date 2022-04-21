import { Input } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { Products } from "../components/Products";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethod";

const Container = styled.div``;
const Wrapper = styled.div`
    padding:50px;
    display:flex;
`;

const ImgContainer = styled.div`
    flex:1;
    height:70vh;
`;

const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    height:50vh;
`;

const Title = styled.h1`
    font-weight:200;
`;

const Desc = styled.p`
    margin:20px 0px;
    height:100%;
    ${'' /* overflow-y: scroll; */}
`;

const RewardContainer = styled.div`
    padding:50px;
    display:flex;
    height:40vh;
`;

const Reward = styled.div`
     margin:20px;
     padding:50px;
     border: 3px solid lightgray;
     align-items:center;
     width:75%;
`;

const RewardTitle = styled.h3``;

const RewardDesc = styled.div`
     margin:20px 0px;
`;

const PriceContainer = styled.span`
    display: flex;
    align-items: center;
    margin: 5px;
    padding: 5px;
    justify-content: flex-start;
`;

const Button = styled.button`
    padding:10px;
    width:100%;
    background-color: #1EA1A1;
    color: white;
    cursor: pointer;
    font-weight: 600;
    font-color:white;
`;

const Content = styled.div`
    padding:15px;
`;

const Story = styled.p`
    justify-content:flex-right;
    padding:25px;
    align-items:center;
    width:85%;
`;


export const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct = async ()=>{
            try{
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            }catch (err){}
        };
        getProduct()
    },[id])

    var count_01 = 0;
    var count_02 = 0;
    var count_03 = 0;

    const handleClick_01 = (reward)=>{
        //update cart
        count_01++; 
        dispatch(addProduct({...product,quantity:count_01,price:reward}));
    };
    const handleClick_02 = (reward)=>{
        //update cart
        count_02++;
        dispatch(addProduct({...product,quantity:count_02,price:reward}));
    };
    const handleClick_03 = (reward)=>{
        //update cart
        count_03++;
        dispatch(addProduct({...product,quantity:count_03,price:reward}));
    };

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src={product.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>{product.desc}</Desc>
           {/*  <PriceContainer>
                <Button>Back This Project</Button>
            </PriceContainer> */}
            </InfoContainer>
        </Wrapper>
        <RewardContainer>
                    <Reward>
                        <RewardTitle>{product.reward_one}</RewardTitle>
                        <RewardDesc>{product.reward_one_desc}</RewardDesc>
                        <Button onClick={()=>handleClick_01(product.reward_one)}>Fund</Button>
                    </Reward>
                    <Reward>
                        <RewardTitle>{product.reward_two}</RewardTitle>
                        <RewardDesc>{product.reward_two_desc}</RewardDesc>
                        <Button onClick={() => handleClick_02(product.reward_two)}>Fund</Button>
                    </Reward>
                    <Reward>
                        <RewardTitle>{product.reward_three}</RewardTitle>
                        <RewardDesc>{product.reward_three_desc}</RewardDesc>
                        <Button onClick={() => handleClick_03(product.reward_three)}>Fund</Button>
                    </Reward>
        </RewardContainer>
        <Content>
        <Story>
        <RewardTitle>STORY:</RewardTitle>
       {product.story} 
        </Story>
        <Story>
        <RewardTitle>RISKS:</RewardTitle>
        {product.risks}
        </Story>
        <Story>
        <RewardTitle>Contact Info:</RewardTitle>
        {product.contact_info}
        </Story>
        </Content>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
