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

const SearchButton = () => {

	return (
    <button style={{ color: "#90B661", width: '2rem', height: '2rem', border: 'none', background: "rgba(0,0,0,0)",
		marginLeft: 'auto', marginRight: "2rem"}}>
			<SearchOutlined style={{ color: "#90B661", fontSize: '150%',}}/>
    </button>
  );
};

export default SearchButton;