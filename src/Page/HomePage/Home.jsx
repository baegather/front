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
        <div justify="start" style={{ borderBottom: "#E8E8E8 solid 3px", height: '50%', display: "flex",
    alignItems: 'center' }}>
          <Location />
          <SearchButton />
        </div>
				<Category />
      </Header>
      <Section>
        <Board />
        {/* <SignIn /> */}
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
  /* padding: 5% 10% 4% 10%; */
  margin: 5% auto;
  p {
    font-size: 1rem;
    padding: 2% 0% 0% 0%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Header = styled.header`
  width: 100%;
  height: 100px;
  background-color: #ffe082;
  display: "flex";
  align-items: "center";
`;


const Button = styled.button`
  font-size: 1.2rem;
  color: black;
  background-color: white;
  border: 0px;
  margin-left: auto;
`;

const Section = styled.section`
	width: 100%;
  height: 700px;
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  background-color: #ffb300;
  max-width: 768px;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export default Home;
