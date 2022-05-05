import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import axios from 'axios';

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
	const [users, setUsesrs] = useState([])
	const [nickName, setNickName] = useState('NickName')
	// useEffect(() => {
	// 	axios.get("https://jsonplaceholder.typicode.com/users")
	// 	.then((response) => {
	// 		//console.log(response)
	// 		setUsesrs(response.data);
	// 	}, [])
	// });

	// useEffect(() => {
	// 	console.log(users)
	// }, [users])

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