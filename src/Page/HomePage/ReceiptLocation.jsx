import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import {
  EnvironmentOutlined,
  HomeOutlined,
  LeftOutlined,
  DownCircleOutlined,
} from "@ant-design/icons";

const ReceiptLocation = () => {
  const [receiptLocation, setReceiptLocation] = useState("오름관 이마트 24 앞");
  return (
    <>
      <HomeOutlined
        style={{ color: "#90B661", size: "30px", marginRight: "4px" }}
      />{" "}
      {receiptLocation}
    </>
  );
};

export default ReceiptLocation;