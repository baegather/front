import React from 'react';
import { Row, Col, Select, Divider } from 'antd';

import FooterHomeButton from "./FooterHomeButton";
import FooterAddButton from "./FooterAddButton";
import FooterMyPageButton from "./FooterMyPageButton";


const FooterButtons = () => {
	return (
    <Row>
      <Col>
        <FooterHomeButton />
      </Col>
        <FooterAddButton />
			<Col>
			</Col>
			<Col>
        <FooterMyPageButton />
			</Col>
    </Row>
  );
};

export default FooterButtons;