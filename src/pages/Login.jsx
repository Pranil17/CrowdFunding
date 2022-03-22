import styled from "styled-components"

const Container = styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/9906385/pexels-photo-9906385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size:cover;
    align-items:center;
    justify-content:center;
    display:flex;
`;

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

const Wrapper = styled.div`
  width:25%;
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
  margin: 10px 0px;
  padding:10px;
`;

const Button = styled.button`
  width:40%;
  border:none;
  padding:15px 20px;
  background-color: teal;
  color:white;
  cursor:pointer;
  margin-bottom:10px;
`;

const Link = styled.a`
  margin:5px 0px;
  font-size:12px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Login = () => {
  return (
    <Container>
    <Logo>Fund!T</Logo>
      <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>Login</Button>
            <Link>Forgot Password?</Link>
            <Link>CREATE NEW ACCOUNT</Link>
            </Form>
            
        </Wrapper>
    </Container>
  )
}
