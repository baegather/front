import React from "react";
import styled from "styled-components";
import { Row } from "antd";

function SignIn() {

	return (
    <Wrapper>
			<Row>
	      <img src={require("../../img/user.PNG")} alt="logo" width="45px" height="auto" />
			</Row>
			<Row>
				<button>카카오로 시작하기</button>
			</Row>
    </Wrapper>
  );
}

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

export default SignIn;