import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import MenuImage from "./content/MenuImage";
import MenuOptions from "./content/MenuOptions";
import { useLocation } from "react-router";
import axios from "axios";


//나중에 axios res data로 바꾸기
const testStyleList = [
	{
		"id": 1,
		"style_nm": "심플디너",
		"style_config": "심플디너 구성",
		"style_pic": "image",
		"price": 0,
	},
	{
		"id": 2,
		"style_nm": "딜럭스디너",
		"style_config": "딜럭스디너 구성",
		"style_pic": "image",
		"price": 10000,
	},
	{
		"id": 3,
		"style_nm": "발렌타인디너",
		"style_config": "발렌타인디너 구성",
		"style_pic": "image",
		"price": 20000,
	}
]


const MenuDetailPage = (props) => {
	const location = useLocation();

	let styleList = [];
	axios.get('/order/showAllStyles/menuId/' + 1, // 수정......ㅜㅠㅠㅠㅠ
	).then(res => {
		styleList = res.data;
	}).catch(err=>console.log(err));

	return (
		<Wrapper>
			<MenuImage />
			<MenuOptions menuDetail={location.state.detail} styleList={testStyleList} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 88vh;
	background: gray;
`;

export default MenuDetailPage;
