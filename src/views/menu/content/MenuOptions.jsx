import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import MenuOptionBox from "./MenuOptionBox";
import MenuStyleBox from "./MenuStyleBox";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const toPriceString = (item) => {
	return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const MenuOptions = (props) => {
	const styleList = props.styleList;
	const optionList = props.optionList.map(item => ({...item}));
	const [menuDetail, setMenuDetail] = useState({...props.menuDetail, options:[]});
	const [price, setPrice] = useState(props.menuDetail.price); // 옵션 변경 시 바꿀 것
	const [totalAmount, setTotalAmount] = useState(props.menuDetail.price);
	const [style, setStyle] = useState({id:0});
	const navigate = useNavigate();

	useEffect(() => {
		setStyle(styleList[0]);
		setMenuDetail({...menuDetail, style: style});
		if (styleList.length !== 0){
			setTotalAmount(price + styleList[0].price);
			setMenuDetail({...menuDetail, price: price + styleList[0].price})
		}
	}, [styleList]);

	useEffect(() => {
		setMenuDetail({...menuDetail, options: optionList})
	}, [props.optionList]);

	useEffect(() => {
		setMenuDetail({...menuDetail, style: style, price: totalAmount});
	}, [style]);

	useEffect(() => {
		setTotalAmount(price + style.price);
		setMenuDetail({...menuDetail, price: price + style.price})
	}, [price]);

	const addToCart = () => {
		fetch('/cart/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({menu: menuDetail, userId: JSON.parse(localStorage.getItem('user')).id})
		})
		.then(res => navigate("/order"))
		.catch(err => console.log(err));
	}

	let styleBoxList = [];
	styleList.map((item) => {
		styleBoxList.push(
			style === item ?
			<MenuStyleBox style={item} selected={true} onClickFunction={()=>{}} />
			:
			<MenuStyleBox style={item} selected={false} onClickFunction={()=>{
				setStyle(item);
				setMenuDetail({...menuDetail, style:{item}});
			}} setTotalAmount={setTotalAmount} price={price} />
		);
	});
	// TODO: 컴포넌트 분리 (리렌더링?)

	let optionBoxList = [];
	if (menuDetail.options.length !== 0){
	optionList.map((item, idx) => {
		optionBoxList.push(
			<MenuOptionBox
				option={item}
				menuDetail={menuDetail}
				setMenuDetail={setMenuDetail}
				index={idx}
				price={price}
				setPrice={setPrice}
				value={menuDetail.options[idx].quantity}
			/>
		)
	})}

	return (
		<Wrapper>
			<TextWrapper>스타일 선택</TextWrapper>
			<StyleBoxWrapper>
				{styleBoxList}
			</StyleBoxWrapper>
			<TextWrapper>옵션 추가</TextWrapper>
			<OptionBoxWrapper>
				{optionBoxList}
			</OptionBoxWrapper>
			<CartButton
				whileHover={{ scale : 1.05 }}
				whileTap={{ scale : 0.95 }}
				onClick={addToCart}
			>
				{"총 " + toPriceString(menuDetail.price) + " 원 담기"}
			</CartButton>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 50%;
	height: 100%;
	overflow: auto;
	float: left;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TextWrapper = styled.div`
	font-size: 1.6em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	width: 85%;
	margin-top: 40px;
`;

const StyleBoxWrapper = styled.div`
	width: 85%;
	height: 180px;
	display: flex;
	overflow-x: auto;
	white-space: nowrap;
`;

const OptionBoxWrapper = styled.div`
	width: 85%;
	height: 250px;
	display: flex;
	align-items: center;
	overflow-x: auto;
	white-space: nowrap;
`;

const CartButton = styled(motion.button)`
	width: 35%;
	height: 40px;
	margin: 20px;
	border: hidden;
	border-radius: 20px;
	color: white;
	font-size: 1.0em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	background: black;
`;

export default MenuOptions;
