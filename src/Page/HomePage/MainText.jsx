import React, { useState } from "react";
import styled from "styled-components";


const MainText = () => {
	const [title, setTitle] = useState('Why do we use it?')
	const [text, setText] = useState("'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versio'")
	return (
		<>
			<h3>{title}</h3>
			<p>{text}</p>
		</>
	);
};

export default MainText;