import styled from "@emotion/styled";
import PrevOrderBox from "./content/PrevOrderBox";
import { useEffect } from "react";

const MainPage = () => {
	useEffect(() => {
		// if (!localStorage.getItem('user')){
			fetch('/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: {}
			})
			.then(res => res.json())
			.then(data => localStorage.setItem('user', JSON.stringify(data)))
			.catch(err => console.log(err));
		// }
	}, []);

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