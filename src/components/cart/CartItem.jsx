import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { DeleteForever } from '@mui/icons-material';

const CartItem = () => {
	return (
		<ItemWrapper>
			<ItemName>디너 이름</ItemName>
			<ItemOption>옵션</ItemOption>
			<ItemPrice>가격</ItemPrice>
			<ItemButton>
				<DeleteForever />
			</ItemButton>
		</ItemWrapper>
	)
}

const ItemWrapper = styled.div`
	width: 87%;
	height: 120px;
	margin-bottom: 10px;
	background: gray;
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
