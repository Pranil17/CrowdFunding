import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { Link } from 'react-router-dom';

const Logo = styled.div`
  height:5vh;
  font-size:30px;
  align-items:center;
  background-color:white;
  padding:10px;
  justify-content:center;
  display:flex;
  color:teal;
`;

const Container = styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/9906385/pexels-photo-9906385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size:cover;
    align-items:center;
    justify-content:center;
    display:flex;
`;
const Wrapper = styled.div`
  width:40%;
  padding:20px;
  background-color:white;
`;

const Title = styled.div`
  font-size:20px;
  font-weight:300;
  margin-top:10px;
`;

const Form = styled.form`
  display:flex;
  flex-direction:column;
`;

const Input = styled.input`
  flex:1;
  min-width:40%;
  margin: 20px 10px 0px 0px;
  padding:10px;
`;

const Agreement = styled.span`
  font-size:12px;
  margin:20px 0px;
`;

const Button = styled.button`
  width:40%;
  border:none;
  padding:15px 20px;
  background-color: teal;
  color:white;
  cursor:pointer;
`;


export const Register = () => {
  const dispatch = useDispatch();
    const [user,setUser] = useState({
      name:"",
      email:"",
      password: ""
  })
  const handleChange = e =>{
  const {name,value} = e.target
  setUser({
  ...user,//spread operator 
  [name]:value
  })
  }
  //register function 
  const egister = ()=>{
  const {name,email,password} = user
  if (name && email && password){
  axios.post("http://localhost:5000/api/auth/register",user )
  .then(res=>console.log(res))
  }
  else{
    alert("invalid input")
  };
}

  return (
    <Container>
        <Wrapper>
            <Logo>Fund!T</Logo>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
            <Input placeholder="name" />
            <Input placeholder="lastname" />
            <Input placeholder="username" name="name" value={user.name} onChange={handleChange} />
            <Input placeholder="email" name="email" value={user.email} onChange={handleChange}/>
            <Input placeholder="password" type="password" name="password" value={user.password} onChange={handleChange} />
            <Input placeholder="confirm password" />
            <Agreement>
                By creating an account you are agreeing to terms and conditions.
            </Agreement>
            <Link to="/login">
            <Button onClick={egister}>Create</Button>
            </Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

