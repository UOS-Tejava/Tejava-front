import styled from "@emotion/styled";
import CartItem from "./CartItem";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import TimePicker from "../../../components/select/TimePicker";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const toPriceString = (item) => {
	return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Cart = (props) => {
	const close = () => props.setModal(false);
	const open = () => props.setModal(true);
	const navigate = props.navigate;

	const [cart, setCart] = useState([]);
	const [time, setTime] = useState("");

	useEffect(() => {
		fetch('/cart')
		.then(res => res.json())
		.then(data => {
			setCart(data)})
		.catch(err => console.log(err));
	}, []);

	let cartList = [];
	let price = 0;
	cart.map((item) => {
		cartList.push(
			<CartItem item={item} />
		);
		price += item.price;
	});

	let discount = 0;
	// if 단골이면 price의 10퍼
	if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).order_cnt >= 5) // 5로 바꿔
		discount = price * 0.1;
	let totalPrice = price - discount;

	return (
		<CartWrapper>
				<TextWrapper>
				주문표
				<KeyboardVoiceIcon
					style={{ float : 'right' }}
					onClick={() => (props.modalOpen ? close() : open())}
				/>
				</TextWrapper>
			<CartItemWrapper>
				{cartList}
			</CartItemWrapper>
			<TextWrapper>배달 시간 선택</TextWrapper>
			<SelectionBoxWrapper>
				<TimePicker setTime={setTime} />
			</SelectionBoxWrapper>
			<TextWrapper>결제 금액</TextWrapper>
			<PriceWrapper>
				<PriceBox>
					<PriceName>총 금액</PriceName>
					<Price color="black">{toPriceString(price) + " 원"}</Price>
				</PriceBox>
				<PriceBox>
					<PriceName>단골 할인</PriceName>
					<Price color="red">{"- " + toPriceString(discount) + " 원"}</Price>
				</PriceBox>
				<PriceBox>
					<PriceName>결제 예정 금액</PriceName>
					<Price color="black">{toPriceString(totalPrice) + " 원"}</Price>
				</PriceBox>
			</PriceWrapper>
			<ButtonWrapper>
				<OrderButton
					onClick={() => {
						navigate("/payment", {
							state: {
								req_orderDateTime: time,
								total_price: totalPrice,
								cart: cart
							}
						})
					}}
				>총 {toPriceString(totalPrice)}원 주문하기</OrderButton>
			</ButtonWrapper>
		</CartWrapper>
	)
}

const CartWrapper = styled.div`
	width: 50%;
	height: 95%;
	display: flex;
	flex-direction: column;
	padding: 20px;
	// padding-left: 5%;
	overflow: auto;
	&::-webkit-scrollbar{
		width: 10px;
		max-height: 20%;
	}
	// &::-webkit-scrollbar-thumb{
	// 	background-color: gray;
	// 	border-radius: 10px;
	// 	// height: 2em;
	// }
	// &::-webkit-scrollbar-track{
	// 	border-radius: 5px;
	// 	// height: 20%;
	// }
	// max-width: 500px;
	// min-width: 500px;
`;

const CartItemWrapper = styled.div`
	// overflow: auto;
	width: 98%;
	display: flex;
	flex-direction: column;
	// align-items: center;
	// height: 100%;
`;

const TextWrapper = styled.div`
	width: 86%;
	font-size: 1.6em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	margin: 25px;
`;

const SelectionBoxWrapper = styled.div`
	width: 85%;
	padding-left: 5%;
`;

const ButtonWrapper = styled.div`
	width: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const OrderButton = styled(motion.button)`
	width: 60%;
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

const PriceBox = styled.div`
	width: 100%;
	height: 30px;
	display: flex;
	align-items: center;
`;

const PriceWrapper = styled.div`
	width: 85%;
	height: 200px;
	display: flex;
	flex-direction: column;
	margin-left: 10px;
`;

const PriceName = styled.div`
	font-size: 1em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	margin-left: 20px;
	width: 60%;
`;

const Price = styled.div`
	font-size: 1em;
	font-family: "Apple SD Gothic Neo";
	// color : #0174DF;
	color: ${(props) => (props.color)};
	width: 40%;
	float: right;
	display: flex;
	justify-content: flex-end;
`;

export default Cart;
