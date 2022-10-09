import styled from "@emotion/styled";
import PrevOrderList from "./PrevOrderList";

const PrevOrderBox = (props) => {
	return (
		<Wrapper>
			<PrevOrderList></PrevOrderList>
			<PrevOrderList></PrevOrderList>
			<PrevOrderList></PrevOrderList>
			<PrevOrderList></PrevOrderList>
			<PrevOrderList></PrevOrderList>
			<PrevOrderList></PrevOrderList>
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
