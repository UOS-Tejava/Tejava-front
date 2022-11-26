import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import MenuImage from "./content/MenuImage";
import MenuOptions from "./content/MenuOptions";
import { useLocation } from "react-router";

const MenuDetailPage = () => {
	const location = useLocation();
	const [styleList, setStyleList] = useState([]);
	const [optionList, setOptionsList] = useState([]);
	const [style, setStyle] = useState();

	useEffect(()=>{
		fetch('/order/showAllStyles/menuId/' + location.state.idx)
		.then(res => res.json())
		.then(data => {
			setStyleList(data);
			if (!location.state.modify)
				setStyle(data[0]);
			else
				setStyle(location.state.detail.style);
		});
		fetch('/order/showAllOptions/menuId/' + location.state.idx)
		.then(res => res.json())
		.then(data => {
			if (!location.state.modify)
				setOptionsList(data);
			else
				setOptionsList(location.state.detail.options);
		});
	}, []);

	return (
		<Wrapper>
			<SubWrapper>
				<MenuImage menuDetail={location.state.detail} />
				<MenuOptions
					menuDetail={location.state.detail}
					styleList={styleList}
					optionList={optionList}
					style={style}
					modify={location.state.modify}
				/>
			</SubWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 88vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SubWrapper = styled.div`
	min-width: 1280px;
	height: 88vh;
`;

export default MenuDetailPage;
