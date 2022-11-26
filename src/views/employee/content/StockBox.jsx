import styled from "@emotion/styled";
import { useState } from "react";

const StockBox = (props) => {
	const item = props.item;
	const [quantity, setQuantity] = useState(item.quantity);
	const [modify, setModify] = useState(false);
	const user = JSON.parse(localStorage.getItem('user'));

	const onChangeInput = e => {
		setQuantity(e.target.value);
	};

	const requestModify = () => {
		fetch('/employee/stock-info', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				employeeId: user.id,
				quantity: quantity,
				stockItemId: item.id
			})
		})
		.then(res => {
			setModify(false);
			window.location.replace("/employee/stock");
		})
		.catch(err => console.log(err));
	}

	return (
		<Wrapper>
			<ListWrapper>
				<InfoWrapper>
					<TextWrapper style={{width: '10%'}}>
						<ItemText>{item.id}</ItemText>
					</TextWrapper>
					<TextWrapper style={{width: '45%'}}>
						<Image source={item.stock_item_pic} />
						<ItemText>{item.stock_item_nm}</ItemText>
					</TextWrapper>
					<TextWrapper style={{width: '45%'}}>
						{/* <ButtonWrapper> */}
						{
							!modify ?
							<RegularText>{item.quantity}</RegularText>
							:
							<Input
								type="text"
								name="quantity"
								value={quantity}
								onChange={onChangeInput}
							/>
						}
						{
							!modify ?
								<ModifyButton
									onClick={() => setModify(true)}
								>수정</ModifyButton>
							:
							<>
								<ModifyButton onClick={requestModify}>확인</ModifyButton>
								<ModifyButton onClick={() => setModify(false)}>취소</ModifyButton>
							</>
						}
						{/* </ButtonWrapper> */}
					</TextWrapper>
				</InfoWrapper>
			</ListWrapper>
		</Wrapper>
	)
}

const Image = styled.div`
	width: 100px;
	height: 60px;
	background-image: ${props => `url(${props.source})`};
	background-size: cover;
	margin-right: 20px;
`;

const BoldText = styled.div`
	font-size: 1.0em;
	font-weight: bold;
	font-family: "Apple SD Gothic Neo";
	margin-bottom: 10px;
`;

const RegularText = styled.div`
	font-size: 1em;
	font-family: "Apple SD Gothic Neo";
	width: 50%;
	margin-left: 10px;
`;

const Input = styled.input`
	width: 50%;
	font-size: 15px;
	border: 0;
	border-radius: 5px;
	outline: none;
	padding-left: 10px;
	background-color: rgb(233, 233, 233);
	margin-right: 10px;
`;

const ModifyButton = styled.button`
	width: 50px;
	border: 0;
	margin-right: 10px;
`;

const Wrapper = styled.div`
	width: 900px;
	height: 80px;
`;

const ListWrapper = styled.li`
	width: 100%;
	height: 100%;
	border-bottom: solid gray 0.1px;
	displey: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	cursor: pointer;
	overflow: hidden;
	cursor: pointer;
`;

const InfoWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	float: left;
`;

const TextWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-left: 20px;
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

export default StockBox;