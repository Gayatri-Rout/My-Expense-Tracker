import React from 'react';
// import ReactDOM from 'react-dom';
import styled from "styled-components";
import HomeComponent from './modules/home';

const Container = styled.div`
display:flex;
flex-direction: column;
align-items:center;
margin: 50px 0 10px;
font-family: 'Poppins', sans-serif;
`;

const Header = styled.span`
color:black;
font-size: 2.2rem;
font-weight: bold;
font-family: 'Carter One', cursive;
`;

function App() {
  return <Container>
    <Header>My Expense Tracker</Header>
    <HomeComponent/>
  </Container>;
}

export default App;


