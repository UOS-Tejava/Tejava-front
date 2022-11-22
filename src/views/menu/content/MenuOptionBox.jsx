import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Counter from "../../../components/select/Counter";

const MenuOptionBox = (props) => {
	const option = props.option;
	const menuDetail = props.menuDetail;
	const setMenuDetail = props.setMenuDetail;
	const index = props.index;
	const price = props.price;
	const setPrice = props.setPrice;
	let optionList = menuDetail.options;
	let newOption = option;

	const onIncrease = () => {
		optionList[index].quantity += 1;
		setMenuDetail({...menuDetail, options: optionList});
		if (optionList[index].quantity > option.quantity)
			setPrice((price) => (price + option.price));
	}

	const onDecrease = () => {
		if (optionList[index].quantity > 0){
			optionList[index].quantity -= 1;
			if (optionList[index].quantity >= option.quantity)
				setPrice((price) => (price - option.price));
		}
		setMenuDetail({...menuDetail, options: optionList});
		
	}

	return (
		<Wrapper>
			<TextWrapper>{option.option_nm}</TextWrapper>
			<ImageBox source={option.option_pic} />
			<PriceWrapper>{"+ " + option.price + " 원"}</PriceWrapper>
			<Counter
				onIncrease={onIncrease}
				onDecrease={onDecrease}
				value={menuDetail.options[index].quantity}
			/>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 200px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 10px;
`;

const ImageBox = styled.div`
	width: 130px;
	height: 50%;
	background-image: ${(props) => `url(${props.source})`};
	background-size: cover;
`;

const TextWrapper = styled.div`
	font-size: 1.0em;
	font-family: "Apple SD Gothic Neo";
	margin: 15px;
`;

const PriceWrapper = styled.div`
	font-size: 0.9em;
	font-family: "Apple SD Gothic Neo";
	color : #0174DF;
	margin-top: 15px;
`;

export default MenuOptionBox;