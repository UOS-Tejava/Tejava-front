import styled from "@emotion/styled";
import PrevOrderBox from "./content/PrevOrderBox";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Slider from "react-slick";

const MainPage = () => {
	const navigate = useNavigate();
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 1300,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: true,
	};

	useEffect(() => {
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
	}, []);

	return (
		<Wrapper>
			<StyledSlider {...sliderSettings}>
				<BannerImage src="/Banner1.png" onClick={() => {
					navigate("/order");
				}}/>
				<BannerImage src="/Banner2.png" onClick={() => {
					navigate("/order");
				}}/>
			</StyledSlider>
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
	height: 100%;
	overflow: auto;
	overflow-x: hidden;
`;

const BannerImage = styled.img`
	min-width: 1440px;
	height: 380px;
	background: #0f1316;
`;

const StyledSlider = styled(Slider)`
	background: black;
	width: 100%;
`;

export default MainPage;