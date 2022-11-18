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

	return (
		<Wrapper>
			{/* {
				!modify ?
				<ButtonWrapper>
					<ModifyButton
						onClick={() => setModify(true)}
					>재고 현황 기입하기</ModifyButton>
				</ButtonWrapper>
				:
				<ButtonWrapper>
					<ModifyButton>수정</ModifyButton>
					<ModifyButton onClick={() => setModify(false)}>취소</ModifyButton>
				</ButtonWrapper>
			} */}
			<StockWrapper>
				{stockBoxList}
			</StockWrapper>
			
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 88vh;
	display: flex;
	width: 100%;
	align-items: center;
	justify-item: center;
`;

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

export default StockMgtPage;