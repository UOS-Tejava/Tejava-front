import { motion } from "framer-motion";
import styled from "@emotion/styled";
import OrderList from "./OrderList";

/*
motion.button
			whileHover={{ scale : 1.1 }}
			whileTap={{ scale : 0.9 }}
			className="menubox"
			style={buttonStyle}
			onClick={()=>console.log("클릭")}
		>
			심플디너
		</motion.button>*/

const OrderBox = (props) => {
	return (
		<Wrapper>
			<p style={{ marginRight: "auto", marginLeft:"10%" }}>이전 주문 목록</p>
			<OrderList></OrderList>
			<OrderList></OrderList>
			<OrderList></OrderList>
			<OrderList></OrderList>
			<OrderList></OrderList>
			<OrderList></OrderList>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
	border-radius: 20px;
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-left: auto;
	margin-right: 4%;
	margin-top: 10px;
	width: clamp(45%, 500px, 60%);
	height: 80vh;
	overflow: auto;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
	// &::-webkit-scrollbar{
	// 	width: 10px;
	// 	max-height: 20%;
	// }
	// &::-webkit-scrollbar-thumb{
	// 	background-color: gray;
	// 	border-radius: 10px;
	// 	// height: 2em;
	// }
	// &::-webkit-scrollbar-track{
	// 	border-radius: 10px;
	// 	// height: 20%;
	// }
`;

export default OrderBox;
