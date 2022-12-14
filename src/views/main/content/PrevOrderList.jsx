import styled from "@emotion/styled";

const toPriceString = (item) => {
	return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const PrevOrderList = (props) => {
	const menu = props.menu;
	const setMenu = props.setMenu;
	const setModalOpen = props.setModalOpen;

	return (
		<Wrapper
			onClick={() => {
				setModalOpen(true);
				setMenu(menu);
			}}
		>
			<ImageWrapper source={menu.menu_pic} />
			<NameWrapper>
				<TextWrapper>{menu.menu_nm}</TextWrapper>
				<ItemQuantity>{menu.quantity}</ItemQuantity>
			</NameWrapper>
			<OptionWrapper>{menu.style.style_nm}</OptionWrapper>
			<PriceWrapper>{toPriceString(menu.price) + "원"}</PriceWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	justify-content: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px;
	width: 200px;
	border-radius: 8px;
	border: solid gray 0.1px;
	cursor: pointer;
`;

const ImageWrapper = styled.div`
	width: 100%;
	height: 120px;
	background-image: ${props => `url(${props.source})`};
	background-size: cover;
`;

const NameWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 15px;
`;

const ItemQuantity = styled.div`
	font-size: 1em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	color : #9070FF;
	margin-left: 5px;
`;

const TextWrapper = styled.div`
	font-size: 1em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	text-align: center;
`;

const OptionWrapper = styled.div`
	font-size: 0.9em;
	line-height: 0.5;
	margin-top: 10px;
`;

const PriceWrapper = styled.div`
	color : #0174DF;
	font-size: 0.9em;
	line-height: 0.5;
	margin-top: 20px;
	margin-bottom: 10px;
`;


export default PrevOrderList;
