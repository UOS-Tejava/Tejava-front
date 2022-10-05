import styled from "@emotion/styled";
import HeaderMenu from "./HeaderMenu";

const headers = {
	"홈" : "",
	"주문하기" : "order",
}

const Header = ({ children }) => {
	const navList = [];
	for (const h in headers){
		navList.push(
			<HeaderMenu name={h} value={headers[h]}>hi</HeaderMenu>
		)
	}
	return (
		<Wrapper>
			<HeaderBox>
				<Logo onClick={() => {window.location.href="/"}}>
					LOGO
				</Logo>
				{children}
				{navList}
				<div style={{ display: 'flex', width:'100%', justifyContent: 'flex-end', marginRight: '20px' }}>
					<HeaderButton>sign in</HeaderButton>
					<HeaderButton>sign up</HeaderButton>
				</div>
			</HeaderBox>
		</Wrapper>
	)
}

const Logo = styled.div`
	width: 80px;
	&:hover{
		cursor: pointer;
	};
	font-weight: 900;
	font-size: 2.2em;
	font-family: "Apple SD Gothic Neo";
`;

const Wrapper = styled.div`
	width: 100%;
	height: 5vh;
	display: flex;
	position: relative;
	align-items: center; // 세로 가운데정렬
	justify-content: center; // 가로 가운데정렬
`;

const HeaderBox = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	position: relative;
	border-bottom: solid #D5D3D3;
	align-items: center;
	padding-left: 30px;
`;

const HeaderButton = styled.button`
	float: right;
	border: hidden;
	background: transparent;
	color: gray;
	margin-right: 3%;
	&:hover{
		text-decoration: underline;
		cursor: pointer;
	}
	font-size: 1em;
`;

export default Header;
