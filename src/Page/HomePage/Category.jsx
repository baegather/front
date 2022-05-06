import styled from "styled-components";

const Category = () => {
  const categorys = [
    { name: "전체" },
    { name: "한식" },
    { name: "분식" },
    { name: "카페" },
    { name: "일식" },
    { name: "치킨" },
    { name: "피자" },
    { name: "양식" },
    { name: "중국집" },
    { name: "족발" },
    { name: "야식" },
    { name: "도시락" },
    { name: "패스트푸드" },
    { name: "채식" },
  ];

  const categoryList = categorys.map((category, index) => (
    <button key={index}>{category.name}</button>
  ));

  return (
		<Scroll>
			{categoryList}
		</Scroll>
	);
};

const Scroll = styled.div`
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
