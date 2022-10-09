import styled from "@emotion/styled";
import { useContext, useState } from "react";
import Modal from "../../../components/modal/Modal";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import LeftArrow from "./Arrow";

const details = {
	"name" : "프렌치",
	"price" : 30000,
	"options" : {
		"cheese" : 1,
		"champagne" : 2,
	}
};

const getItems = () =>
	Array(20).fill(0).map((_, ind) => ({ id: `element-${ind}` }))

const styles = [
	{
		"name" : "심플 디너",
		"config" : "심플 디너 상세 메뉴",
		"price" : 0,
	},
	{
		"name" : "그랜드 디너",
		"config" : "그랜드 디너 상세 메뉴",
		"price" : 10000,
	},
	{
		"name" : "딜럭스 디너",
		"config" : "딜럭스 디너 상세 메뉴",
		"price" : 30000,
	},
	{
		"name" : "발렌타인 디너",
		"config" : "발렌타인 디너 상세 메뉴",
		"price" : 50000
	}
];

const StyleBox = ({ style }) => {
	return (
		<StyleBoxWrapper>
			<p>{style.name}</p>
			<p>{style.config}</p>
			<p>{style.price}</p>
		</StyleBoxWrapper>	
	);
};



const OrderDetail = ({ cart, setCart }) => {
	const [detail, setDetail] = useState(details); // option 자체를 state로 ?
	const [price, setPrice] = useState(details.price);
	const [style, setStyle] = useState(styles[0]);

	const styleList = [];

	for (const item in styles){
		styleList.push(
			<StyleBox style={item} />
		)
	}

	useState(() => {
		console.log(style);
	}, []);

	return (
		<Wrapper>
			<ImageWrapper>
				<p>메뉴 사진</p>
			</ImageWrapper>
			<p>스타일 선택</p>
			<StyleBoxScroller>
				<ScrollMenu LeftArrow={LeftArrow}>
					{styles.map(({ item }) => {
						<StyleBox style={item} />
					})}
				{/* {styleList} */}
				</ScrollMenu>
			</StyleBoxScroller>
			<p>메뉴 목록</p>
			<p>옵션 추가</p>
			<p>옵션 리스트</p>
			<p>옵션 리스트</p>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	overflow: auto;
`;

const ImageWrapper = styled.div`
	border-radius: 20px;
	width: 80%;
	height: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: lightgray;
`;

const StyleBoxScroller = styled.div`
	width: 100%;
	height: 500px;
	background:purple;
	overflow: hidden;
	.react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar{
		display: none;
	}
	.react-horizontal-scrolling-menu--scroll-container {
		-ms-overflow-style: none; /* IE & Edge */
		scrollbar-width: none; /* firefox */
	}

`;

const StyleBoxWrapper = styled.div`
	border-radius: 20px;
	background: blue;
	width: 100px;
	height: 100%;
`;


export default OrderDetail;
