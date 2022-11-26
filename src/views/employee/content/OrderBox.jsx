import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import OrderBoxInfo from "./OrderBoxInfo";

const convertStatus = (status) => {
	if (status === 'pending')
		return '접수 대기 중';
	else if (status === 'cooking')
		return '조리 중'
	else if (status === 'delivering')
		return '배달 중'
	else if (status === 'completed')
		return '배달 완료'
	return '';
}

const OrderBox = (props) => {
	const orderDetail = props.orderDetail;
	const [open, setOpen] = useState(false);

	let menuList = [];
	orderDetail.menuDTOList.map((item) => {
		menuList.push(
			<ItemText>{item.menu_nm}</ItemText>
		);
	})

	return (
		<Wrapper>
		<ListWrapper
			layout
			onClick={() => setOpen((open) => !open)}
		>
			<InfoWrapper layout>
				<TextWrapper style={{width:'12%'}}>
					<ItemText>{convertStatus(orderDetail.orderStatus)}</ItemText>
				</TextWrapper>
				<TextWrapper style={{width:'12%'}}>
					<ItemText>{orderDetail.customerName}</ItemText>
				</TextWrapper>
				<TextWrapper style={{width:'28%'}}>
					<ItemText>{orderDetail.orderedDate}</ItemText>
				</TextWrapper>
				<TextWrapper style={{width:'28%'}}>
					<ItemText>{orderDetail.req_orderDateTime}</ItemText>
				</TextWrapper>
				<TextWrapper style={{width:'20%'}}>
					<ItemText>{orderDetail.totalPrice}</ItemText>
				</TextWrapper>
			</InfoWrapper>
		</ListWrapper>
			<AnimatePresence>
			{
				open &&
				<SubWrapper
					transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
					initial={{ opacity: 0 }}
					animate={{
						height : open ? 'auto' : 0,
						opacity: 1
					}}
					exit={{
						height: 0,
						opacity: 0
					}}
				>
					<OrderBoxInfo item={orderDetail} menu={orderDetail.menuDTOList} open={open} setModified={props.setModified} />
				</SubWrapper>
			}
			</AnimatePresence>
			</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 1000px;
`;

const ListWrapper = styled(motion.li)`
	width: 100%;
	height: 50px;
	border-bottom: solid gray 0.1px;
	displey: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	cursor: pointer;
	overflow: hidden;
	cursor: pointer;
`;

const InfoWrapper = styled(motion.div)`
	width: 100%;
	height: 90%;
	display: flex;
	justify-content: center;
	float: left;
`;

const TextWrapper = styled.div`
	width: 380px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
	text-align: center;
`;

const SubWrapper = styled(motion.div)`
	width: 100%;
`;

const ItemText = styled.div`
	font-size: 0.9em;
	font-family: "Apple SD Gothic Neo";
	width: 60%;
`;

const MenuList = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
`;

export default OrderBox;