import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

const Container = styled.div`
  padding: 1% 5% 5% 0%;

  p {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

const Nickname = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
`;

const UserInfo = () => {
	const [nickName, setNickName] = useState('NickName')

	return (
    <Container>
      <Row justify="start">
        <Col flex="10%" style={{ marginLeft: "10px" }}>
          <img src={require("../../img/user.PNG")} width="45px" height="auto" />
        </Col>
        <Col flex="50%" style={{ marginLeft: "20px" }}>
          <Nickname> {nickName} </Nickname>
          2022년 1월 21일
        </Col>
      </Row>
    </Container>
  );
};



export default UserInfo;