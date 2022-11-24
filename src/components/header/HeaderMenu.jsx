import styled from "@emotion/styled";

const HeaderMenu = (props) => {
	const url = "/" + props.value;
	const navigate = props.navigate;

	return (
		<Wrapper onClick={() => {
			navigate(url);
		}}>
			{props.name}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	min-width: fit-content;
	text-align: center;
	&:hover{
		cursor: pointer;
	}
	font-size: 1.2em;
	font-family: "Apple SD Gothic Neo";
	line-height: 0;
	margin-left: 50px;
`;

export default HeaderMenu;
