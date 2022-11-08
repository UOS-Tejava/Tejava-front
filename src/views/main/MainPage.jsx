import { Button } from "@mui/material";
import styled from "@emotion/styled";
import PrevOrderBox from "./content/PrevOrderBox";
import { useEffect } from "react";


const MainPage = () => {
	useEffect(() => {
		fetch('/')
		.then(data => console.log(data))
	})
	return (
		<Wrapper>
			<Banner />
			<TextWrapper>이전 주문 목록</TextWrapper>
			<PrevOrderBox />
		</Wrapper>
	)
}

const TextWrapper = styled.div`
	font-size: 1.6em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	width: 65%;
	margin: 25px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	// justify-content: center;
	height: 85vh;
	overflow: auto;
`;

const Banner = styled.div`
	width: 100%;
	height: 350px;
	background: gray;
`;

export default MainPage;