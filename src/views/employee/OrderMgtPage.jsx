import styled from "@emotion/styled";
import { AnimateSharedLayout } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import OrderBox from "./content/OrderBox";
import { motion } from "framer-motion";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const OrderMgtPage = () => {
	const [data, setData] = useState([]);
	const [orderList, setOrderList] = useState([]);
	const [orderBoxList, setOrderBoxList] = useState([]);
	const [mode, setMode] = useState("all");
	const [modified, setModified] = useState(false);

	useEffect(() => {
		setModified(false);
		fetch('/employee/orders')
		.then(res => res.json())
		.then(data => {
			data = data.sort((a, b) => b.orderId - a.orderId);
			setData(data);
			if (mode !== "all")
				setOrderList(data.filter(d => d.orderStatus === mode));
			else
				setOrderList(data);
		})
		.catch(err => console.log(err));
	}, [modified]);

	useEffect(() => {
		if (mode !== "all")
			setOrderList(data.filter(d => d.orderStatus === mode));
		else
			setOrderList(data);
	}, [mode]);

	useEffect(() => {
		let newList = [];
		orderList.map((item) => {
			newList.push(
				<OrderBox orderDetail={item} setModified={setModified} />
			);
		});
		setOrderBoxList(newList);
	}, [orderList]);

	const handleChange = (event) => {
		setMode(event.target.value);
	};

	return (
		<>
		<Wrapper>
		<Header>
			<Text>주문 관리</Text>
			<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
				<InputLabel id="demo-simple-select-standard-label">주문상태</InputLabel>
				<Select
					labelId="demo-simple-select-standard-label"
					id="demo-simple-select-standard"
					value={mode}
					onChange={handleChange}
					label="Age"
				>
				<MenuItem value={"all"}>전체</MenuItem>
				<MenuItem value={"pending"}>접수 대기중</MenuItem>
				<MenuItem value={"cooking"}>조리 중</MenuItem>
				<MenuItem value={"delivering"}>배달 중</MenuItem>
				<MenuItem value={"completed"}>배달 완료</MenuItem>
				</Select>
			</FormControl>
		</Header>
		
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
			
			{/* <AnimateSharedLayout> */}
				<UlWrapper
				// layout transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
				>
				{
					data &&
					orderBoxList
				}
				</UlWrapper>
			{/* </AnimateSharedLayout> */}
		</Wrapper>
		</>
	)
}

const Wrapper = styled.div`
	height: 88vh;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
`;

const Header = styled.div`
	display: flex;
	width: 900px;
	margin-top: 50px;
`;

const Text = styled.div`
	font-size: 1.3em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	height: 60px;
	width: 80%;
	display: flex;
	align-items: center;
	padding-left: 30px;
	// padding-top: 10px;
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