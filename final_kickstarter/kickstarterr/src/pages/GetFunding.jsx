import React from 'react';
import styled from 'styled-components'
import Announcement from "../components/Announcement";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProductApiCall } from "../redux/apiCalls";
import { Link } from 'react-router-dom';


/*import UploadIcon from '@mui/icons-material/UploadIcon';*/



const Container = styled.div``;
const Wrapper = styled.div`
    
`;
const Image = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    margin-top:50px
`;
const Desc = styled.p`
font-size:20px;
text-align: center;
`;

const Input = styled.input`
  flex:1;
  min-width:40%;
  margin: 20px 10px 0px 0px;
  padding:10px;
  color:black;
  border:black;
`;
const Button = styled.button`
  width:40%;
  border:none;
  padding:15px 20px;
  background-color: teal;
  color:white;
  cursor:pointer;
  margin: 0;
  position: absolute;
  margin-top:10px;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const Title = styled.div`
    font-size:40px;
    font-weight:300;
    margin-top:40px;
    text-align: center;
`;

const Form = styled.form`
  margin: 100px;
  background: #F5F5F5;
  padding: 50px;
  
  `;
  const Header = styled.h1`
  
  `;
  const Text = styled.p``;
  const Contain  = styled.div`
  margin:100px;
  `;
  





const GetFunding = () => {
  const dispatch = useDispatch();
  const [prod,setProduct] = useState({
    title:"",
    desc:"",
    img: "",
    categories:"",
    fundingGoal:"",
    fundingTime:"",
    reward_one:"",
    reward_one_desc:"",
    reward_two:"",
    reward_two_desc:"",
    reward_three:"",
    reward_three_desc:"",
    story:"",
    risks:"",
    contact_info:""
    
})  
const handleChange = e =>{
  const {name,value} = e.target
  setProduct({
  ...prod,//spread operator 
  [name]:value
  })
}

const handleClick = (e)=>{
  
    const confirmBox = window.confirm(
      "Do you really want to Submit this Form?"
    )
    if (confirmBox === true) {
      e.preventDefault();
      console.log('PAY=======', prod)
      createProductApiCall(dispatch,prod);
      <Link to="/profile"> SEE</Link>;
      
    }
  
  
  
}

  return (
    
    <Container>
      <Navbar/>
      <Announcement/>
        <Wrapper>
          
        
        <Image src='i1.jpeg'/>
        <Title>Lets get started</Title>
        <Desc>Make it easy for people to learn about your project.</Desc>
        <br/><hr/>
          <Form  >
            <Contain>
                <Header>Project Title</Header>
                <Text>Write a clear, brief title and subtitle to help people quickly understand your project.</Text>
                <Input placeholder='Enter Title' name="title" value={prod.title} onChange={handleChange} required/>
             </Contain><hr/>

            <Contain>
                <Header>Project Description</Header>
                <Text>What would you like the backers to know about your project.</Text>
                <Input placeholder='Enter desc' name="desc" value={prod.desc} onChange={handleChange}/>
            </Contain> <hr/>

            <Contain>
                  <Header>Project Image</Header>
                  
                  <Input placeholder='Enter image link' name="img" value={prod.img} onChange={handleChange}/>
            </Contain><hr/>

            <Contain>
                  <Header>Project Category</Header>
                  <Text>Enter the Category of your Project.</Text>
                  <Input placeholder='Enter Category' name="categories" value={prod.categories} onChange={handleChange}/>
            </Contain><hr/>

            <Contain>
                  <Header>Funding Goal(INR)</Header>               
                  
                  <Text>Set an achievable goal that covers what you need to complete your project. Funding is all-or-nothing.
                    If you don’t meet your goal, you won’t receive any money.</Text> 
                  <Input placeholder='Set Funding Goal' name="fundingGoal" value={prod.fundingGoal} onChange={handleChange}/>
                  
            </Contain><hr/>

            <Contain>
                  <Header>Funding Time</Header>
                  <Text>Set a time limit for your campaign. You won’t be able to change this after you launch.</Text>
                  <Input label='Enter Time' type="date" name="fundingTime" value={prod.fundingTime}   onChange={handleChange}/>
                  
            </Contain><hr/>
             

            <Contain>
                  <Header>Reward 1</Header>
                
                  <Input placeholder='Enter Reward1' name="reward_one" value={prod.reward_one} onChange={handleChange}/>
                  <Input placeholder='Enter desc' name="reward_one_desc" value={prod.reward_one_desc} onChange={handleChange}/>
            </Contain><hr/>
             
             
            <Contain>
                <Header>Reward 2</Header>
                <Input placeholder='Enter Reward2' name="reward_two" value={prod.reward_two} onChange={handleChange}/>
                <Input placeholder='Enter desc2' name="reward_two_desc" value={prod.reward_two_desc} onChange={handleChange}/>
            </Contain> <hr/>

            <Contain>
                <Header>Reward 3</Header>
                <Input placeholder='Enter Reward3' name="reward_three" value={prod.reward_three} onChange={handleChange}/>
                <Input placeholder='Enter Desc3' name="reward_three_desc" value={prod.reward_three_desc} onChange={handleChange}/>
            </Contain><hr/>

            <Contain>
                <Header>Story</Header>
                <Input placeholder='Enter Story' name="story" value={prod.story} onChange={handleChange}/>
            </Contain><hr/>

            <Contain>
                <Header>Risks</Header>
                <Input placeholder='Enter Risks' name="risks" value={prod.risks} onChange={handleChange}/>
            </Contain><hr/>

            <Contain>
                <Header>Contacts</Header>
                <Input placeholder='Enter Contact' name="contact_info" value={prod.contact_info} onChange={handleChange}/>
            </Contain>
            <Button onClick={handleClick}  >Create</Button>
          </Form>
        </Wrapper>
    </Container>
     


    

  )
}

export default GetFunding