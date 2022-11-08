import styled from '@emotion/styled';
import { DeleteForever } from '@mui/icons-material';
import { useNavigate } from 'react-router';

const CartItem = (props) => {
	const item = props.item;
	console.log(item);
	const navigate = useNavigate();
	let idx = 0;
	if (item.menu_nm == '비스트로 디너')
		idx = 1;
	else if (item.menu_nm == '프렌치 디너')
		idx = 2;
	else if (item.menu_nm == '잉글리시 디너')
		idx = 3;
	else
		idx = 4;
	const deleteMenu = (id) => {
		fetch('/cart/delete-one',{
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				menuId: id,
				userId: 1
			})
		})
		.then(res => res.json())
		.then(data => console.log(data))
		.catch(err => console.log(err))
	};

	const modifyMenu = () => {
		navigate("/menu", {
			state: { detail: item, idx: idx, modify: true }
		})
	}

	return (
		<ItemWrapper>
			<div
				onClick={modifyMenu}
			>
			<ItemName>{item.menu_nm}</ItemName>
			<ItemOption>{item.style.style_nm}</ItemOption>
			<ItemPrice>{item.price}</ItemPrice>
			</div>
			<ItemButton
				onClick={() => deleteMenu(item.id)}
			>
				<DeleteForever />
			</ItemButton>
		</ItemWrapper>
	)
}

const ItemWrapper = styled.div`
	width: 80%;
	height: 120px;
	margin-bottom: 10px;
	margin-left: 15px;
	// background: gray;
	border: solid 0.5px;
	display: grid;
	grid-template-columns: 3fr 1fr 1fr;
	grid-template-rows: repeat(5, auto);
	border-radius: 20px;
	padding: 15px;
`;

const ItemName = styled.div`
	display: flex;
	align-items: center;
	grid-column: 1/2;
	grid-row: 2/3;
`;

const ItemOption = styled.div`
	display: flex;
	align-items: center;
	grid-column: 1/2;
	grid-row: 4/5;	
`;

const ItemPrice = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	grid-column: 2/3;
	grid-row: 3/4;	
`;

const ItemButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	grid-column: 3/4;
	grid-row: 3/4;
	&:hover{
		cursor: pointer;
	}
`;

export default CartItem;
