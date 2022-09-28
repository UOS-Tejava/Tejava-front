import styled from "@emotion/styled";

const HeaderMenu = (props) => {
	const url = "/" + props.value;
	return (
		<Wrapper onClick={() => window.location.href = url}>
			{props.name}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 150px;
	text-align: center;
	&:hover{
		cursor: pointer;
	}
`;

export default HeaderMenu;
