import styled from "@emotion/styled";
import { AnimateSharedLayout } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import OrderBox from "./content/OrderBox";
import { motion } from "framer-motion";
import { FormControl, NativeSelect } from "@mui/material";

const OrderMgtPage = () => {
	const [orderList, setOrderList] = useState([]);
	useEffect(() => {
		fetch('/employee/orders')
		.then(res => res.json())
		.then(data => {
			// console.log(data);
			setOrderList(data)
		})
		.catch(err => console.log(err));
	}, []);

	let orderBoxList = [];
	orderList.map((item) => {
		orderBoxList.push(
			<OrderBox orderDetail={item} />
		);
	});

	return (
		<>
		<Header>
			<Text>주문 관리</Text>
			{/* <FormControl>
				<NativeSelect
					defaultValue="선택하기"
				>

				</NativeSelect>
			</FormControl> */}
		</Header>
		<Wrapper>
			<TableHeader>
				<TextWrapper style={{width:'25%'}}>
					<ItemText>주문상태</ItemText>
				</TextWrapper>
				<TextWrapper style={{width:'20%'}}>
					<ItemText>주문자명</ItemText>
				</TextWrapper>
				<TextWrapper style={{width:'40%'}}>
					<ItemText>주문 일시</ItemText>
				</TextWrapper>
				<TextWrapper style={{width:'40%'}}>
					<ItemText>배달 요청 일시</ItemText>
				</TextWrapper>
				<TextWrapper>
					<ItemText>총 가격</ItemText>
				</TextWrapper>
			</TableHeader>
			
			<AnimateSharedLayout>
				<UlWrapper layout>
				{
					orderList &&
					orderBoxList
				}
				</UlWrapper>
			</AnimateSharedLayout>
		</Wrapper>
		</>
	)
}

const Wrapper = styled.div`
	height: 75vh;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	margin-top: 20px;
`;

const Header = styled.div`
	height: 10px;
	display: flex;
	width: 900px;
	margin-left: 100px;
	margin-top: 50px;
`;

const Text = styled.div`
	font-size: 1.3em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	width: 50%;
`;

const TextWrapper = styled.div`
	width: 380px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ItemText = styled.div`
	width: 100%;
	font-size: 1.0em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	width: 60%;
`;

const TableHeader = styled.div`
	width: 915px;
	border-top: solid black 0.5px;
	border-bottom: solid black 0.5px;
	display: flex;
	margin-top: 10px;
`;

const UlWrapper = styled(motion.ul)`
	display: flex;
	flex-direction: column;
	-webkit-padding-start: 0px;
	margin: 0;
	overflow: auto;
`;

export default OrderMgtPage;