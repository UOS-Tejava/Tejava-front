import { motion } from "framer-motion";
import styled from "@emotion/styled";
import OrderButton from "./OrderButton";

const OrderList = (props) => {
	return (
		<Wrapper>
			<InfoWrapper>
			<p>날짜</p>
			<p>디너 이름</p>
			<p>디너 타입</p>
			<p>옵션</p>
			</InfoWrapper>
			<OrderButton></OrderButton>
		</Wrapper>
	);
}

const InfoWrapper = styled.div`
	width: 75%;
	padding-left: 3%;
`;

const Wrapper = styled.div`
	display: flex;
	width: 90%;
	height: 150px;
	border-radius: 20px;
	background: #E3F2FD;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
	margin-bottom: 17px;
`;


export default OrderList;
