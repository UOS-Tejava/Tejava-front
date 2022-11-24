import styled from "@emotion/styled";

const MenuStyleBox = (props) => {
	const style = props.style;
	const func = props.onClickFunction;
	return (
		<Wrapper selected={props.selected}
			onClick={()=>{
				func();
				// props.setTotalAmount(props.price + style.price);
			}} >
			<StyleName>{style.style_nm}</StyleName>
			<StyleConfig>{style.style_config}</StyleConfig>
			<StylePrice>+{style.price} 원</StylePrice>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	border-radius: 20px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
	background: ${props => `${props.selected ? 'pink' : 'white'}`};
	min-width: 120px;
	height: 90%;
	margin: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const StyleName = styled.div`
	font-size: 1em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	width: 100%;
	text-align: center;
`;

const StyleConfig = styled.div`
	font-size: 0.3em;
	font-family: "Apple SD Gothic Neo";
	width: 95%;
	height: 40%;
	text-align: center;
	white-space: normal;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StylePrice = styled.div`
	font-size: 1em;
	font-family: "Apple SD Gothic Neo";
	width: 100%;
	font-weight: bold;
	text-align: center;
`;

export default MenuStyleBox;
