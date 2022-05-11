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

	const onClickCategory = (e) => {
		console.log(e.target.value)
	};

  const categoryList = categorys.map((category, index) => (
    <button
      key={index}
      onClick={onClickCategory}
      value={category.name}
      style={{
        border: "none",
        marginLeft: "0.5rem",
        backgroundColor: "rgba(0,0,0,0)",
        fontWeight: "bold",
        fontSize: "1rem",
        color: "#b1b1b1",
      }}
    >
      {category.name}
    </button>
  ));

  return (
		<Scroll>
			{categoryList}
		</Scroll>
	);
};

const Scroll = styled.div`
  height: 50%;
  width: 90%;
  display: flex;
  margin: 0 auto;
  flex-wrap: nowrap;
  -ms-overflow-style: none;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Category;
