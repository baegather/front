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

const FooterMyPageButton = () => {
  return (
    <Link to="/board">
      <UserOutlined
        style={{ color: "#90B661", size: "30px", marginRight: "4px" }}
      />
      <div>마이페이지</div>
    </Link>
  );
};

export default FooterMyPageButton;
