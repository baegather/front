import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Row, Col, Select, Divider } from 'antd';
import {
  SearchOutlined,
  HomeOutlined,
  PlusCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Category from './Category'
import Board from './Board'
import SignIn from '../SignIn/SignIn'
import Location from './Location'
import SearchButton from "./SearchButton";
import FooterButtons from "./FooterButtons";
		
const Home = () => {
  return (
    <Wrapper>
      <Header>
        <Row justify="start">
          <Location />
          <SearchButton />
        </Row>
        <Divider style={{ color: "#E8E8E8" }} />
        <Category />
      </Header>
      <Section>
        <Board />
        <SignIn />
      </Section>
      <Footer>
				<FooterButtons />
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 768px;
  font-family: "LatoRegular";
  line-height: 1.5;
  padding: 5% 10% 4% 10%;

  p {
    font-size: 1.2rem;
    padding: 2% 0% 0% 0%;
  }
`;

const Header = styled.header`
  width: 100%;
  height: 200px;
	background-color: #ffe082;

`;


const Button = styled.button`
  font-size: 1.2rem;
  color: black;
  background-color: white;
  border: 0px;
  margin-left: auto;
`;

const Section = styled.section`
  height: 700px;
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  background-color: #ffb300;
  max-width: 768px;
`;

export default Home;
