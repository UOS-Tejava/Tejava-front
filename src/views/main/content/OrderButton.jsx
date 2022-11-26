import { motion } from "framer-motion";
import styled from "@emotion/styled";

const OrderButton = (props) => {
	return (
		<ButtonWrapper>
			<motion.button
				whileHover={{ scale : 1.03 }}
				whileTap={{ scale : 0.97 }}
				onClick={()=>alert("결제하기로 이동")}
				style={buttonStyle}
			>
				주문하기
			</motion.button>
		</ButtonWrapper>
	);
}

const ButtonWrapper = styled.div`
	width: 30%;
	float: right;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const buttonStyle = {
	'width' : '80%',
	'height' : '80%',
	'border' : 'hidden',
	'border-radius' : '13px',
	'background' : '#BBDEFB'
};

export default OrderButton;
