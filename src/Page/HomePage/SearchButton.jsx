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
    <button>
      <Col flex="auto">
        <SearchOutlined style={{ color: "#90B661", size: "30px" }} />
      </Col>
    </button>
  );
};

export default SearchButton;