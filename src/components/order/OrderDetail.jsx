import styled from "@emotion/styled";
import { useState } from "react";
import Modal from "../modal/Modal";

const details = {
	"name" : "프렌치",
	"price" : 30000,
	"options" : {
		"cheese" : 1,
		"champagne" : 2,
	}
};

const OrderDetail = (props) => {
	const [detail, setDetail] = useState(details); // option 자체를 state로 ?
	const [price, setPrice] = useState(details.price);
	const [style, setStyle] = useState("none");

	return (
		<Wrapper>
			<ImageWrapper>
				<p>메뉴 사진</p>
			</ImageWrapper>
			<p>스타일 선택</p>
			<p>메뉴 목록</p>
			<p>옵션 추가</p>
			<p>옵션 리스트</p>
			<p>옵션 리스트</p>
			<p>옵션 리스트</p>
			<p>옵션 리스트</p>
			<p>옵션 리스트</p>
			<p>옵션 리스트</p>
			<p>옵션 리스트</p>
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


export default OrderDetail;
