import React, { useState } from "react";
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
	const [num, setNum] = useState(0)

	const onClickJoin = () => {

	};
	
  return (
    <MainBoard>
      <UserInfo />
      <MainText />
      <Restaurant />
			<ReceiptLocation />
      <div style={{ width: "100%", height: "3rem", textAlign: "center" }}>
        <button
          style={{
            width: "40%",
            height: "100%",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#E8E8E8",
            color: "#90B661",
            fontWeight: "Bold",
            fontSize: "1rem",
						marginRight: '3rem'
          }}
        >
          모집 {num}/4 명
        </button>

        <Link to="/board">
          {" "}
          <Button
            onClick={onClickJoin}
            style={{
              width: "40%",
              height: "100%",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "#90B661",
              color: "#fff",
              fontWeight: "Bold",
              fontSize: "1rem",
            }}
          >
            참가하기
          </Button>{" "}
        </Link>
      </div>
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
