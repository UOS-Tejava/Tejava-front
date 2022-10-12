import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import MenuStyleBox from "./MenuStyleBox";

const MenuOptions = (props) => {
	// const menuDetail = props.menuDetail;
	// const setMenuDetail = props.setMenuDetail;
	const styleList = props.styleList;
	const [menuDetail, setMenuDetail] = useState(props.menuDetail);
	const [clicked, setClicked] = useState(menuDetail.id);
	// console.log(clicked);

	let styleBoxList = [];
	styleList.map((item) => {
		styleBoxList.push(
			clicked === item.id ?
			<MenuStyleBox style={item} selected={true} onClickFunction={()=>{}} />
			:
			<MenuStyleBox style={item} selected={false} onClickFunction={()=>{
				console.log(item.id);
				setClicked(item.id);
				setMenuDetail({...menuDetail, style:{item}});
			}} />
		);
	});
	// TODO: 컴포넌트 분리 (리렌더링?)
	
	return (
		<Wrapper>
			<TextWrapper>스타일 선택</TextWrapper>
			<StyleBoxWrapper>
				{styleBoxList}
			</StyleBoxWrapper>
			<TextWrapper>옵션 추가</TextWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	background: blue;
	width: 50%;
	height: 100%;
	overflow: auto;
	float: left;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TextWrapper = styled.div`
	font-size: 1.6em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	width: 85%;
	background: red;
	margin-top: 40px;
`;

const StyleBoxWrapper = styled.div`
	width: 85%;
	height: 180px;
	display: flex;
	overflow-x: auto;
	white-space: nowrap;
`;

export default MenuOptions;
