import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { EnvironmentOutlined, HomeOutlined, LeftOutlined, DownCircleOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import '../../App.css';

function Board() {
  return (
      <Wrapper>
            <Link to = '/'>
                <LeftOutlined style={{ color:"#90B661", size:"30px", marginBottom:"20px"}} />
            </Link>
            <MainBoard>
                <UserInfo>
                    <Row justify="start">
                        <Col flex="10%" style={{ marginLeft: "10px"}}>
                            <img src={ require('../../img/user.PNG') } width='45px' height='auto' />
                        </Col>
                        <Col flex="50%" style={{ marginLeft: "20px"}}>
                            <Nickname> Nickname </Nickname>
                            2022년 1월 21일 
                        </Col>
                    </Row>
                </UserInfo>
                <p>로제떡볶이 드실 분 </p>
                곱창떡볶이도 좋습니다.. 사실 떡볶이는 다 좋아요 튀김 냠냠 글쓰면서 배고파진다. <br/>
                <br/> <EnvironmentOutlined style={{ color:"#90B661", size:"30px", marginRight:"4px"}}/> 배떡 옥계점 
                <br/> <HomeOutlined style={{ color:"#90B661", size:"30px", marginRight:"4px"}}/> 경상북도 구미시 대학로 62 오름관 1동 1층
            </MainBoard>
            <UserBoard>
                <Row>
                    <Col flex="20%"> <img src={ require('../../img/user.PNG') } width='45px' height='auto' /> </Col>
                    <Col flex="20%" style={{ margin:"10px", fontWeight:"bold"}}> 배떡 먹자 </Col>
                    <Col flex="20%"> <img src={ require('../../img/user.PNG') } width='45px' height='auto' /> </Col>
                    <Col flex="20%" style={{ margin:"10px", fontWeight:"bold"}}> 배떡 먹자 </Col>
                </Row>
                <br />
                <Row>
                    <Col flex="20%"> <img src={ require('../../img/user.PNG') } width='45px' height='auto' /> </Col>
                    <Col flex="20%" style={{ margin:"10px", fontWeight:"bold"}}> 배떡 먹자 </Col>
                    <Col flex="20%"> <img src={ require('../../img/user.PNG') } width='45px' height='auto' /> </Col>
                    <Col flex="20%" style={{ margin:"10px", fontWeight:"bold"}}> 배떡 먹자 </Col>
                </Row>
            </UserBoard>
            <Comment>
                <Row>
                    <Col flex="10%"> <img src={ require('../../img/user.PNG') } width='45px' height='auto' /> </Col>
                    <Col flex="30%" style={{ margin:"10px", marginTop:"10px", marginBottom:"25px", fontWeight:"bold"}}>
                        배떡 먹자
                    </Col>
                </Row>
                몇 시에 만나는 게 좋을까요?
            </Comment>
            <Comment>
                <Row>
                    <Col flex="10%"> <img src={ require('../../img/user.PNG') } width='45px' height='auto' /> </Col>
                    <Col flex="30%" style={{ margin:"10px", marginTop:"10px", marginBottom:"25px", fontWeight:"bold"}}>
                        배떡 먹자
                    </Col>
                </Row>
                몇 시에 만나는 게 좋을까요?
            </Comment>
            <Comment>
                <Row>
                    <Col flex="10%"> <img src={ require('../../img/user.PNG') } width='45px' height='auto' /> </Col>
                    <Col flex="30%" style={{ margin:"10px", marginTop:"10px", marginBottom:"25px", fontWeight:"bold"}}>
                        배떡 먹자
                    </Col>
                </Row>
                몇 시에 만나는 게 좋을까요?
            </Comment>
            <CommentInput>
                <Row>
                    <Col flex="90%">
                        <Input defaultValue="댓글을 입력하세요." type="text"/>
                    </Col>
                    <Col flex="5%">
                        <DownCircleOutlined style={{ color:"#90B661", size:"30px"}}/>
                    </Col>
                </Row>
            </CommentInput>
      </Wrapper>
  );
}

const Wrapper = styled.div`
  line-height: 1.5;
  padding: 5% 10% 4% 10%;
`;

const Nickname = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
`;

const MainBoard = styled.div`
  padding: 5% 5% 5% 5%;
  background: #F9F9F9;
  margin-bottom: 1.5em;
  border-radius: 30px;

  p {
    font-weight: 600;
  }
`;

const UserBoard = styled.section`
  line-height: 1.5;
  margin-bottom: 1em;
  padding: 5% 5% 5% 5%;
  background: #F9F9F9;
  font-size: 1rem;
  border-radius: 30px;
`;

const User = styled.div`
  line-height: 1.5;
  padding: 0% 5% 0% 0%;
  font-size: 1rem;
  border: none;
  border-radius: 3px;
`;

const UserInfo = styled.div`
  padding: 1% 5% 5% 0%;

  p {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

const Comment = styled.div`
  padding: 2.2% 4% 2.2% 4%;
  border-top: 1px solid #E8E8E8;
  border-bottom: 1.3px solid #E8E8E8;

  p {
    font-size: 1rem;
    font-weight: 600;
  }
`;

const CommentInput = styled.div`
  margin-top: 8px;
  margin-bottom: 0px;
`;

const Input = styled.input`
  padding: 1% 2% 1% 2%;
  background: #F9F9F9;
  color: #B4B4B4;
  border-radius: 70px;
  border: none;
`;

const Button = styled.button`
  font-size: 1.2rem;
  color: black;
  background-color: white;
  border: 0px;
  margin-left: auto;
`;

export default Board;
