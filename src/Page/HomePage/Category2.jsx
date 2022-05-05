import ScrollHorizontal from "react-scroll-horizontal";



const Category = () => {
	const categorys = [
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
    <div id="scroll-horizontal" style={{ height: `1em` }}>
      <ScrollHorizontal>
				<button>addasfdsfsadsafdsfdafasdasfd</button>
				<button>addasfdsfsadsafdsfdafasdasfd</button>
				<button>addasfdsfsadsafdsfdafasdasfd</button>
				<button>addasfdsfsadsafdsfdafasdasfd</button>
				<button>addasfdsfsadsafdsfdafasdasfd</button>
				<button>addasfdsfsadsafdsfdafasdasfd</button>
				<button>addasfdsfsadsafdsfdafasdasfd</button>
				<button>addasfdsfsadsafdsfdafasdasfd</button>
				<button>addasfdsfsadsafdsfdafasdasfd</button>
				<button>addasfdsfsadsafdsfdafasdasfd</button>
			</ScrollHorizontal>
    </div>
  );
};

export default Category