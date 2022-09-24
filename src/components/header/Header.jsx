import styled from "@emotion/styled";

const Header = ({ children }) => {
	return (
		<Wrapper>
			<HeaderBox>
				LOGO
				{children}
			</HeaderBox>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 100%;
	height: 10vh;
	display: flex;
	position: relative;
	align-items: center; // 세로 가운데정렬
	justify-content: center; // 가로 가운데정렬
`;

const HeaderBox = styled.div`
	width: 93%;
	height: 50px;
	display: flex;
	position: relative;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
	border-radius: 30px;
	align-items: center;
	padding-left: 30px;
`;

export default Header;
