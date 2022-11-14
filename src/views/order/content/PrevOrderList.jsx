import { motion } from "framer-motion";
import styled from "@emotion/styled";
import OrderButton from "../../main/content/OrderButton";

const PrevOrderList = (props) => {
	return (
		<Wrapper>
			<ImageWrapper>
				image
			</ImageWrapper>
			<TextWrapper>발렌타인 디너 세트</TextWrapper>
			<OptionWrapper>심플 디너 | 바게트 추가</OptionWrapper>
			<PriceWrapper>39,000원</PriceWrapper>
			{/* <OrderButton></OrderButton> */}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px;
	width: 150px;
	background: #E3F2FD;
	// box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
	margin-left: 10px;
	margin-right: 10px;
`;

const ImageWrapper = styled.div`
	width: 80%;
	height: 100px;
`;

const TextWrapper = styled.div`
	font-size: 1em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	width: 150px;
	text-align: center;
	margin-top: 15px;
`;

const OptionWrapper = styled.div`
	font-size: 1em;
	line-height: 0.5;
	margin-top: 15px;
`;

const PriceWrapper = styled.div`
	color : blue;
	font-size: 1em;
	line-height: 0.5;
	margin-top: 20px;
`;


export default PrevOrderList;
