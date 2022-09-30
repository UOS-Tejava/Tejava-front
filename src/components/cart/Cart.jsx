import { motion } from "framer-motion";
import styled from "@emotion/styled";
import CartItem from "./CartItem";

const Cart = (props) => {
	const close = () => props.setModal(false);
	const open = () => props.setModal(true);
	return (
		<CartWrapper>
			<p>주문표</p>
			<CartItemWrapper>
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
			</CartItemWrapper>
			<motion.button
				whileHover={{ scale : 1.1 }}
				whileTap={{ scale : 0.9 }}
				className="save-button"
				style={buttonStyle}
				onClick={() => (props.modalOpen ? close() : open())}
			>
				음성인식으로 주문하기
			</motion.button>
		</CartWrapper>
	)
}

const CartWrapper = styled.div`
	width: 40%;
	height: 87%;
	display: flex;
	flex-direction: column;
	background: white;
	border-radius: 15px;
	box-shadow : 0 2px 5px rgba(0, 0, 0, 0.5);
	padding: 20px;
`;

const CartItemWrapper = styled.div`
	overflow: auto;
	width: 100%;
	height: 70%;
	margin-bottom: 10px;
	&::-webkit-scrollbar{
		width: 10px;
		max-height: 20%;
	}
	&::-webkit-scrollbar-thumb{
		background-color: gray;
		border-radius: 10px;
		// height: 2em;
	}
	&::-webkit-scrollbar-track{
		border-radius: 10px;
		// height: 20%;
	}
`;

const buttonStyle = {
	'border-radius': '10px',
	'height': '30px',
	'border': 'hidden',
	'width': '150px',
	'background': '#BBDEFB'
};


export default Cart;
