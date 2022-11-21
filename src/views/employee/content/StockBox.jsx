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
			<Image source={item.stock_item_pic} />
			<BoldText>{item.stock_item_nm}</BoldText>
			<>
			<ButtonWrapper>
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
			</ButtonWrapper>
			</>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 200px;
	height: 200px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items:center;
	margin: 10px;
`;

const Image = styled.div`
	width: 95%;
	height: 100px;
	background-image: ${props => `url(${props.source})`};
	background-size: cover;
	margin-bottom: 10px;
`;

const BoldText = styled.div`
	font-size: 1.0em;
	font-weight: bold;
	font-family: "Apple SD Gothic Neo";
	margin-bottom: 10px;
`;

const RegularText = styled.div`
	font-size: 0.9em;
	font-family: "Apple SD Gothic Neo";
	width: 80px;
`;

const Input = styled.input`
	width: 50px;
`;

const ModifyButton = styled.button`
	width: 50px;
`;

const ButtonWrapper = styled.div`
	width: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default StockBox;