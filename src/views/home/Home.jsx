import { Button } from "@mui/material";
import styled from "@emotion/styled";
import OrderBox from "../../components/order/OrderBox";
import { motion } from "framer-motion";

const HomeButton = ({ text }) => {
	return (
		<motion.button
				whileHover={{ scale : 1.02 }}
				whileTap={{ scale : 0.98 }}
				onClick={()=>window.location.href="/order"}
				style={buttonStyle}
		>
			{text}
		</motion.button>
	);
};

const Home = () => {
	return (
		<Wrapper>
			<ButtonWrapper>
				<HomeButton text="주문하기" />
				<HomeButton text="비회원 주문" />
			</ButtonWrapper>
			<OrderBox></OrderBox>
		</Wrapper>
	)
}

const ButtonWrapper = styled.div`
	display : flex;
	flex-direction : column;
	align-items: center;
	justify-content: center;
	width: 50%;
	height: 100%;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 85vh;
`;

const buttonStyle = {
	'border' : 'hidden',
	'width' : '200px',
	'height' : '130px',
	'border-radius' : '20px',
	'margin-top' : '20px',
	'margin-bottom' : '20px',
	'background' : '#BBDEFB',
	'box-shadow' : '0 2px 5px rgba(0, 0, 0, 0.4)'
};

export default Home;