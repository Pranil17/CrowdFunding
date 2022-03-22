import { Facebook, Instagram, Mail, Phone, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    background-color: #fcf5f5;
`;

const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin:20px 0px;
`;

const SocialContainer = styled.div`
    display:flex;

`;

const SocialIcon = styled.div`
    width:40px;
    height: 40px;
    border-radius: 50%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`;


const Center = styled.div`
    flex:1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom:30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom:10px;
`;

const Right = styled.div`
    flex:1;
    padding:20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display:flex;
    align-items:center;
`;

export const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Fund!T</Logo>
            <Desc>
                Funding is what lets small companies grow their business but 
                not only that people who fund them gets different types of 
                rewards and even be part of their amazing journey.
            </Desc>
            <SocialContainer>
                <SocialIcon>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon>
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Tech products</ListItem>
                <ListItem>Charity Funding</ListItem>
                <ListItem>Fahion</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room/>
                Terna Engineering College,Nerul
            </ContactItem>
            <ContactItem>
                <Phone/>
                +911234567890
            </ContactItem>
            <ContactItem>
            <Mail/>
                help@fundit.mail
            </ContactItem>
        </Right>
    </Container>
  )
}
