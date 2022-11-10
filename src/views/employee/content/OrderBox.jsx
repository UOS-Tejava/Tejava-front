import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useState } from "react";

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

const changeStatus = (id, status) => {
	fetch('/employee/order-status',{
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			orderId: id,
			orderStatus: status,
			userId: JSON.parse(localStorage.getItem('user')).id
		})
	})
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
		<Wrapper
			animate={{
				height: open ? 300 : 150,
			}}
			onClick={() => setOpen((open) => !open)}
		>
			{
				!open &&
				<>
					<InfoWrapper>
						<TextWrapper>
							<ItemName>주문자명</ItemName>
							<ItemText>{orderDetail.customerName}</ItemText>
						</TextWrapper>
						<TextWrapper>
							<ItemName>배달 주소</ItemName>
							<ItemText>{orderDetail.customerAddress}</ItemText>
						</TextWrapper>
						<TextWrapper>
							<ItemName>배달 요청 시간</ItemName>
							<ItemText>{orderDetail.req_orderDateTime}</ItemText>
						</TextWrapper>
						<TextWrapper>
							<ItemName>총 가격</ItemName>
							<ItemText>{orderDetail.totalPrice}</ItemText>
						</TextWrapper>
					</InfoWrapper>
					<StatusWrapper>{convertStatus(orderDetail.orderStatus)}</StatusWrapper>
				</>
			}
			{
				open &&
				<>
				<InfoWrapper>
					<TextWrapper>
						<ItemName>주문 일시</ItemName>
						<ItemText>{orderDetail.orderedDate}</ItemText>
					</TextWrapper>
					<TextWrapper>
						<ItemName>주문자명</ItemName>
						<ItemText>{orderDetail.customerName}</ItemText>
					</TextWrapper>
					<TextWrapper>
						<ItemName>배달 주소</ItemName>
						<ItemText>{orderDetail.customerAddress}</ItemText>
					</TextWrapper>
					<TextWrapper>
						<ItemName>메뉴</ItemName>
						<MenuList>
							{menuList}
						</MenuList>
					</TextWrapper>
					<TextWrapper>
						<ItemName>총 가격</ItemName>
						<ItemText>{orderDetail.totalPrice}</ItemText>
					</TextWrapper>
					<TextWrapper>
						<ItemName>배달 요청 일시</ItemName>
						<ItemText>{orderDetail.req_orderDateTime}</ItemText>
					</TextWrapper>
				</InfoWrapper>
				<StatusButton
					onClick={() => {
						changeStatus(orderDetail.orderId, 'cooking');
					}}
				>{convertStatus(orderDetail.orderStatus)}</StatusButton>
				</>
			}
		</Wrapper>
	);
}

const Wrapper = styled(motion.div)`
	width: 600px;
	border: solid black;
	margin-top: 10px;
	border-radius: 10px;
	// height: 150px;
	displey: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
`;

const InfoWrapper = styled.div`
	width: 73%;
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	float: left;
	margin: 7px;
`;

const TextWrapper = styled.div`
	width: 380px;
	margin: 10px;
	display: flex;
`;

const StatusWrapper = styled.div`
	width: 23%;
	background: skyblue;
	height: 50%;
	float: left;
	margin-top: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
`;

const StatusButton = styled.button`
	width: 23%;
	background: skyblue;
	height: 50%;
	float: left;
	margin-top: 75px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
`;

const ItemName = styled.div`
	font-size: 1.0em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	width: 30%;
`;

const ItemText = styled.div`
	font-size: 1.0em;
	font-family: "Apple SD Gothic Neo";
	width: 60%;
`;

const MenuList = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
`;

export default OrderBox;