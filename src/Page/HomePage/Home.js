import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>  
        <Link to = '/board'> <Button>Board</Button> </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: 'LatoRegular';
  line-height: 1.5;
  padding: 5% 10% 4% 10%;

  p {
    font-size: 1.2rem;
    padding: 2% 0% 0% 0%;
  }
`;

const Button = styled.button`
  font-size: 1.2rem;
  color: black;
  background-color: white;
  border: 0px;
  margin-left: auto;
`;

export default Home;
