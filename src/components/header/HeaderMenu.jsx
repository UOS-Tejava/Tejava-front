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
	font-size: 1.3em;
	font-family: "Apple SD Gothic Neo";
	line-height: 0;
	margin-left: 100px;
`;

export default HeaderMenu;
