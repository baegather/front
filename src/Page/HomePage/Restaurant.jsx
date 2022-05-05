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

const Restaurant = () => {
	const [restaurant, setRestaurant] = useState("배떡 옥계점")
	return (
    <>
      <EnvironmentOutlined
        style={{ color: "#90B661", size: "30px", marginRight: "4px" }}
      />{" "}
      {restaurant}
    </>
  );
};

export default Restaurant;