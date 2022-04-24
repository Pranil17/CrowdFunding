import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import styled from "styled-components";

const Container = styled.div`
  align-items: left;
  flex:4
`;
const Product = styled.div`
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
const Remve = styled.button`    
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

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const [posts, setPosts] = useState([]);

  const expensesListResp = async () => {
    await axios.get('http://localhost:5000/api/users').then(res => setPosts(res.data))
  }
  expensesListResp();

  const handleClick =(id)=>{
    axios({
      method:'delete',
      url:"http://localhost:5000/api/users/"+id
  });
};

 
  return (
    <Container>
        {posts.map(user => (
                    <Product>
                    <ProductDetail>
                        <Image src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png"/>
                        <Details>
                            <ProductName><b>username:</b>{user.username}</ProductName>
                            <ProductId><b>EmailID:</b> {user.email}</ProductId>
                        </Details>
                        <Remve onClick={()=>handleClick(user._id)}>Remove</Remve>
                    </ProductDetail>
                    <Hr/>                    
                    </Product>
                    ))}
    </Container>
  )
}
