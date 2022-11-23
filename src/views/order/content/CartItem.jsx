import styled from '@emotion/styled';
import { DeleteForever } from '@mui/icons-material';
import { useNavigate } from 'react-router';

const toPriceString = (item) => {
	return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const optionString = (options) => {
	let str = "";
	let i = 0;
	for (i = 0; i < options.length; i++){
		if (i != 0)
			str += ", ";
		str += options[i].option_nm + " " + options[i].quantity + "개";
	}
	return str;
}

const CartItem = (props) => {
	const item = props.item;
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
		fetch('/cart/delete-one/menuId/' + id, {
			method: 'DELETE'
		})
		.then(data => window.location.reload()) // TODO: 새로고침 안 되도록
		.catch(err => console.log(err))
	};

	const modifyMenu = () => {
		navigate("/menu", {
			state: { detail: item, idx: idx, modify: true }
		})
	}

	return (
		<ItemWrapper>
			<MenuInfoWrapper
				onClick={modifyMenu}
			>
			<NameWrapper>
				<ItemName>{item.menu_nm}</ItemName>
				<ItemQuantity>{item.quantity}</ItemQuantity>
			</NameWrapper>
			<ItemStyle>{item.style.style_nm}</ItemStyle>
			<ItemOption>{optionString(item.options)}</ItemOption>
			</MenuInfoWrapper>
			<ItemPrice>{toPriceString(item.price) + " 원"}</ItemPrice>
			<ItemButton
				onClick={() => deleteMenu(item.menuId)}
			>
				<DeleteForever />
			</ItemButton>
		</ItemWrapper>
	)
}

const ItemWrapper = styled.div`
	width: 90%;
	height: 160px;
	margin-bottom: 15px;
	margin-left: 15px;
	background: white;
	border: solid 0.5px;
	display: flex;
	border-radius: 20px;
	padding: 15px;
	border-radius : 10px;
	border : hidden;
	box-shadow : 0 2px 5px rgba(0, 0, 0, 0.4);
`;

const MenuInfoWrapper = styled.div`
	height: 100%;
	width: 60%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 10px;
`;

const NameWrapper = styled.div`
	width: 100%;
	display: flex;
`;

const ItemName = styled.div`
	font-size: 1.3em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
`;

const ItemQuantity = styled.div`
	font-size: 1.3em;
	font-family: "Apple SD Gothic Neo";
	color : #9070FF;
	margin-left : 10px;
`;


const ItemStyle = styled.div`
	font-size: 1em;
	font-family: "Apple SD Gothic Neo";
	margin-top: 10px;
`;

const ItemOption = styled.div`
	font-size: 0.8em;
	font-family: "Apple SD Gothic Neo";
	margin-top: 10px;
`;

const ItemPrice = styled.div`
	display: flex;
	width: 30%;
	align-items: center;
	justify-content: center;
	grid-column: 2/3;
	grid-row: 3/4;
	font-size: 1em;
	font-family: "Apple SD Gothic Neo";
	color : #0174DF;
`;

const ItemButton = styled.div`
	width: 10%;
	display: flex;
	align-items: center;
	justify-content: center;
	grid-column: 3/4;
	grid-row: 3/4;
	&:hover{
		cursor: pointer;
	}
	margin-bottom: 4px;
`;

export default CartItem;
