import styled from "@emotion/styled";

const MenuImage = (props) => {
	const menuDetail = props.menuDetail;
	return (
		<Wrapper>
			<TextWrapper>{menuDetail.menu_nm}</TextWrapper>
			<MenuConfigWrapper>
				{menuDetail.menu_config}
			</MenuConfigWrapper>
			<ImageBox source={menuDetail.menu_pic} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100%;
	width: 40%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	float: left;
	margin-left: 40px;
`;

const ImageBox = styled.div`
	min-width: 440px;
	height: 330px;
	background: yellow;
	background-image: ${(props) => `url(${props.source})`};
	background-size: cover;
`;

const TextWrapper = styled.div`
	font-size: 2em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	min-width: 420px;
`;

const MenuConfigWrapper = styled.div`
	font-size: 1em;
	font-family: "Apple SD Gothic Neo";
	min-width: 420px;
	margin: 10px;
`;

export default MenuImage;
