import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import ScrollMenu from "react-horizontal-scrolling-menu"; // ScrollMenu 가져오기


const Category = () => {
	let categorys = [
    { name: "item1" },
    { name: "item2" },
    { name: "item3" },
    { name: "item4" },
    { name: "item5" },
    { name: "item6" },
    { name: "item7" },
    { name: "item8" },
    { name: "item9" },
    { name: "item10" },
    { name: "item11" },
    { name: "item12" },
    { name: "item13" },
    { name: "item14" },
    { name: "item15" },
  ]; // 임시데이터 선언

	const categoryList = categorys.map((category, key) => (
    <div key={key}>{category}</div>
  ));

	return (
	<>
		<Container>
			{categoryList}
		</Container>
	</>
	);
};

const Container = styled.button`
  height: 38%;
  width: 90%;
  display: inline-block;
  margin: 0 auto;
  padding: 0 5%;
  flex-wrap: nowrap;
  -ms-overflow-style: none;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
`;

export default Category;