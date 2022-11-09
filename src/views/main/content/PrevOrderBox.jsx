import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import PrevOrderList from "./PrevOrderList";

const PrevOrderBox = (props) => {
	const [prevOrderList, setPrevOrderList] = useState([]);
	useEffect(() => {
		fetch('/order/history', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				userId: JSON.parse(localStorage.getItem('user')).id
			})
		})
		.then(res => res.json())
		.then(data => setPrevOrderList(data))
		.catch(err => console.log(err));
	}, []);
	// console.log(prevOrderList);
	let prevList = [];
	prevOrderList.map((item) => {
		prevList.push(
			<PrevOrderList menu={item} />
		)
	})
	return (
		<Wrapper>
			{
				prevOrderList &&
				prevList
			}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	width: 65%;
	height: 250px;
	overflow-x: auto;
	white-space: nowrap;
`;

export default PrevOrderBox;
