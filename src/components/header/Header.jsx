import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import HeaderMenu from "./HeaderMenu";

const headers = {
	"홈": "",
	"주문하기": "order",
	"주문내역": "orderhistory"
}

const employee_headers = {
	"홈" : "",
	"주문 관리" : "employee/order",
	"재고 관리" : "employee/stock"
}

const Header = ({ children }) => {	
	const navList = [];
	const user = JSON.parse(localStorage.getItem('user'));

	let headerList;
	if (user && user.role === "ADMINISTRATOR")
		headerList = employee_headers;
	else
		headerList = headers;
	for (const h in headerList){
		navList.push(
			<HeaderMenu name={h} value={headerList[h]} />
		)
	}

	const logout = async () => {
		await fetch('/logout');
		await fetch('/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.then(res => res.json())
		.then(data => {
			localStorage.setItem('user', JSON.stringify(data));
			window.location.replace("/");
		})
		.catch(err => console.log(err));
		localStorage.clear();

	};


	return (
		<Wrapper>
			<HeaderBox>
				<Logo onClick={() => {window.location.href="/"}}>
					<Image src="/logo.jpeg" />
				</Logo>
				{children}
				{navList}
				{/* <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', marginRight: '20px' }}>
					<HeaderButton onClick={() => window.location.href = "/login"}>sign in</HeaderButton>
					<HeaderButton onClick={() => window.location.href = "/signup"}>sign up</HeaderButton>
				</div> */}
				{
					(user === null || user.uid === '비회원') && //TODO: 비회원
					<div style={{ display: 'flex', width:'100%', justifyContent: 'flex-end', marginRight: '20px' }}>
						<HeaderButton onClick={()=>window.location.href="/login"}>sign in</HeaderButton>
						<HeaderButton onClick={()=>window.location.href="/signup"}>sign up</HeaderButton>
					</div>
				}
				{
					(user && user.uid !== '비회원') &&
					<div style={{ display: 'flex', width:'100%', justifyContent: 'flex-end', marginRight: '20px' }}>
						<HeaderButton onClick={()=>{logout()}}>logout</HeaderButton>
					</div>
				}
			</HeaderBox>
		</Wrapper>
	)
}

const Logo = styled.div`
	min-width: 140px;
	height: 100%;
	&:hover{
		cursor: pointer;
	};
	font-weight: 900;
	font-size: 2em;
	font-family: "Apple SD Gothic Neo";
	position: relative;
	overflow: hidden;
`;

const Image = styled.img`
	width: 125px;
	position: abolute;
	transform: translate(0%, -30%);
`;

const Wrapper = styled.div`
	width: 100%;
	height: 8vh;
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
