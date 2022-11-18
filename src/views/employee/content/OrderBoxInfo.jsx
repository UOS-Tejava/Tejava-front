import styled from "@emotion/styled";
import { motion } from "framer-motion";

const convertStatus = (status) => {
	if (status === 'pending')
		return '접수하기';
	else if (status === 'cooking')
		return '배달 시작'
	else if (status === 'delivering')
		return '배달 완료'
	return '';
}

const changeStatus = (id, status) => {
	let toStatus = '';
	if (status === 'pending')
		toStatus = 'cooking';
	else if (status === 'cooking')
		toStatus = 'delivering';
	else if (status === 'delivering' || status === 'completed')
		toStatus = 'completed';
	fetch('/employee/order-status',{
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			orderId: id,
			orderStatus: toStatus,
			userId: JSON.parse(localStorage.getItem('user')).id
		})
	})
	.then(res => window.location.replace("/"))
	.catch(err => console.log(err))
}

const OrderBoxInfo = (props) => {
	const item = props.item;
	let menuList = [];
	props.menu.map((item) => {
		menuList.push(
			<ItemText>{item.menu_nm}</ItemText>
		);
	})

	return (
		<Wrapper>
			<ElemWrapper>
			<InfoWrapper>
				<Text>메뉴</Text>
				<Content>
					{menuList}
				</Content>
			</InfoWrapper>
			<InfoWrapper>
				<Text>주소</Text>
				<Content>{item.customerAddress}</Content>
			</InfoWrapper>
			</ElemWrapper>
			<ButtonWrapper>
				{
					item.orderStatus !== 'completed' &&
					<Button
						onClick={() => changeStatus(item.orderId, item.orderStatus)}
					>
						{convertStatus(item.orderStatus)}
					</Button>
				}
			</ButtonWrapper>
		</Wrapper>
	);
};

const Wrapper = styled(motion.div)`
	width: 100%;
	display: flex;
	height: 100%;
	border-bottom: solid gray 0.1px;
	background-color: rgba(214, 214, 214, 0.3);
`;

const ElemWrapper = styled.div`
	width: 70%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const ButtonWrapper = styled.div`
	width: 30%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Button = styled(motion.button)`
	height: 50%;
	width: 50%;
	border: hidden;
	border-radius: 10px;
	font-size: 1.0em;
	font-family: "Apple SD Gothic Neo";
	background: lightgray;
	// color: white;
	// text-shadow: 1px 1px 1px gray;
`;

const InfoWrapper = styled.div`
	width: 100%;
	padding: 40px;
	display: flex;
`;

const Text = styled.div`
	font-size: 1.0em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	width: 30%;
`;

const Content = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
`;

const ItemText = styled.div`
	font-size: 1.0em;
	font-family: "Apple SD Gothic Neo";
`;

export default OrderBoxInfo;