import styled from "@emotion/styled";
import CartItem from "./CartItem";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import TimePicker from "../../../components/select/TimePicker";
import { motion } from "framer-motion";

const Cart = (props) => {
	const close = () => props.setModal(false);
	const open = () => props.setModal(true);
	return (
		<CartWrapper>
			<div>
				<TextWrapper>
				주문표
				<KeyboardVoiceIcon
					style={{ float : 'right', marginRight: '13%' }}
					onClick={() => (props.modalOpen ? close() : open())}
				/>
				</TextWrapper>
				
			</div>
			<CartItemWrapper>
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
			</CartItemWrapper>
			<TextWrapper>배달 시간 선택</TextWrapper>
			<SelectionBoxWrapper>
				<TimePicker />
			</SelectionBoxWrapper>
			<TextWrapper>결제 금액</TextWrapper>
			<ButtonWrapper>
				<OrderButton>주문하기</OrderButton>
			</ButtonWrapper>
		</CartWrapper>
	)
}

const CartWrapper = styled.div`
	width: 50%;
	height: 87%;
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
`;

const CartItemWrapper = styled.div`
	// overflow: auto;
	width: 100%;
	display: flex;
	flex-direction: column;
	// align-items: center;
	// height: 100%;
`;

const TextWrapper = styled.div`
	font-size: 1.6em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	margin: 25px;
`;

const SelectionBoxWrapper = styled.div`
	width: 80%;
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

export default Cart;
