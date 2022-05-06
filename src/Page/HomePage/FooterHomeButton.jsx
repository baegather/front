import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col, Select, Divider } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  PlusCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

const FooterHomeButton = () => {
	return (
		<Link to="/">
			<HomeOutlined
				style={{ color: "#90B661", size: "30px", marginRight: "4px" }}
			/>
			<div>홈</div>
		</Link>
	);
};

export default FooterHomeButton;
