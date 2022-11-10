import styled from "@emotion/styled";
import { useEffect } from "react";
import { useState } from "react";
import OrderBox from "./content/OrderBox";

const OrderMgtPage = () => {
	const [orderList, setOrderList] = useState([]);
	useEffect(() => {
		fetch('/employee/orders')
		.then(res => res.json())
		.then(data => {
			console.log(data);
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
		<Wrapper>
			{
				orderList &&
				orderBoxList
			}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	height: 90vh;
	overflow: auto;
`;

export default OrderMgtPage;