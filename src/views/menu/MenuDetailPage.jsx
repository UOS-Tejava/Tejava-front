import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import MenuImage from "./content/MenuImage";
import MenuOptions from "./content/MenuOptions";
import { useLocation } from "react-router";
import axios from "axios";

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
	const [menuDetail, setMenuDetail] = useState(location.state.detail);
	const [styleList, setStyleList] = useState([]);
	const [optionList, setOptionsList] = useState([]);

	useEffect(()=>{
		fetch('/order/showAllStyles/menuId/' + menuDetail.id)
		.then(res => res.json())
		.then(data => setStyleList(data));
		fetch('/order/showAllOptions/menuId/' + menuDetail.id)
		.then(res => res.json())
		.then(data => setOptionsList(data));
	}, []);

	return (
		<Wrapper>
			<MenuImage />
			<MenuOptions
				menuDetail={location.state.detail}
				styleList={styleList}
				optionList={optionList}
			/>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 88vh;
`;

export default MenuDetailPage;
