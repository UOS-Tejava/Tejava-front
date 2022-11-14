import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import PrevOrderList from "./PrevOrderList";

const PrevOrderBox = (props) => {
	const [prevOrderList, setPrevOrderList] = useState([]);
	useEffect(() => {
		fetch('/order/history')
		.then(res => res.json())
		.then(data => setPrevOrderList(data))
		.catch(err => console.log(err));
	}, []);
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
