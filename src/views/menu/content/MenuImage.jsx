import styled from "@emotion/styled";

const MenuImage = (props) => {
	return (
		<Wrapper>
			<TextWrapper>{props.name}샴페인 축제 디너</TextWrapper>
			<MenuConfigWrapper>{props.config}
				샴페인, 바게트빵 4개, 커피 한 포트, 와인, 스테이크
			</MenuConfigWrapper>
			<ImageBox />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	float: left;
`;

const ImageBox = styled.div`
	min-width: 350px;
	height: 300px;
	background: yellow;
`;

const TextWrapper = styled.div`
	font-size: 2em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	min-width: 350px;
	background: red;
`;

const MenuConfigWrapper = styled.div`
	font-size: 1em;
	font-family: "Apple SD Gothic Neo";
	min-width: 350px;
	margin: 10px;
	background: red;
`;

export default MenuImage;
