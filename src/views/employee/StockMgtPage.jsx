import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import StockBox from "./content/StockBox";

const StockMgtPage = () => {
	const [stockList, setStockList] = useState([]);
	const [stockBoxList, setStockBoxList] = useState([]);

	useEffect(() => {
		fetch('/employee/stock-info')
		.then(res => res.json())
		.then(data => {
			setStockList(data);
			console.log(data);
		})
		.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		let newList = [];
		stockList.map(item => {
			newList.push(<StockBox item={item} />)
		});
		setStockBoxList(newList);
	}, [stockList]);

	console.log(stockList);

	return (
		<Wrapper>
			<Header>
				<Text>재고 관리</Text>
			</Header>
			<TableHeader>
				<TextWrapper style={{width: '10%'}}>
					<ItemText>No</ItemText>
				</TextWrapper>
				<TextWrapper style={{width: '45%'}}>
					<ItemText>상품명</ItemText>
				</TextWrapper>
				<TextWrapper style={{width: '45%'}}>
					<ItemText>수량</ItemText>
				</TextWrapper>
			</TableHeader>
			<UlWrapper>
				{stockBoxList}
			</UlWrapper>
		</Wrapper>
	);
};

const StockWrapper = styled.div`
	width: 100%;
	overflow-x: auto;
	display: flex;
`;

const ModifyButton = styled(motion.button)`
	width: 100px;
	height: 40px;
`;

const ButtonWrapper = styled.div`
	width: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

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
	margin-top: 30px;
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
`;

const TextWrapper = styled.div`
	height: 40px;
	display: flex;
	align-items: center;
	margin-left: 30px;
	margin-top: 5px;
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

export default StockMgtPage;