import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import {
  EnvironmentOutlined,
  HomeOutlined,
  LeftOutlined,
  DownCircleOutlined,
} from "@ant-design/icons";
import UserInfo from "./UserInfo";
import MainText from "./MainText";
import Restaurant from "./Restaurant";
import ReceiptLocation from "./ReceiptLocation";

function Board() {
  return (
    <MainBoard>
      <UserInfo />
      <MainText />
      <br /> 
			<Restaurant />
      <br />{" "}
      <ReceiptLocation />
      <Row>
        <Col>
          <button>모집 2/4 명</button>
        </Col>
        <Col>
          <Link to="/board">
            {" "}
            <Button>참가하기</Button>{" "}
          </Link>
        </Col>
      </Row>
    </MainBoard>
  );
}



const MainBoard = styled.div`
  padding: 5% 5% 5% 5%;
  background: #f9f9f9;
  margin-bottom: 1.5em;
  border-radius: 30px;

  p {
    font-weight: 600;
  }
`;



const Button = styled.button`
  font-size: 1.2rem;
  color: black;
  //background-color: white;
  //border: 0px;
  margin-left: auto;
`;

export default Board;
