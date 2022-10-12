import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";

const MenuBox = (props) => {
	return (
		<Wrapper
			whileHover={{ scale : 1.02 }}
			whileTap={{ scale : 0.98 }}
			className="menubox"
			onClick={props.onClickFunction}
		>
			<ImageWrapper>
				image
			</ImageWrapper>
			<MenuNameWrapper>{props.text}</MenuNameWrapper>
			<MenuConfigWrapper>{props.option}와인, 스테이크</MenuConfigWrapper>
			<PriceWrapper>{props.price}10,000 원</PriceWrapper>
		</Wrapper>
	);
}

const Wrapper = styled(motion.div)`
	border-radius : 10px;
	border : hidden;
	height : 95%;
	width: clamp(300px, 60%, 500px);
	box-shadow : 0 2px 5px rgba(0, 0, 0, 0.2);
	background : white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-left: 10%;
`;

const ImageWrapper = styled.div`
	width: 80%;
	height: 50%;
	background: yellow;
	margin-top: 15px;
`;

const MenuNameWrapper = styled.div`
	font-size: 1.5em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	margin-top: 20px;
	margin-bottom: 10px;
`;

const MenuConfigWrapper = styled.div`
	font-size: 1.2em;
	font-family: "Apple SD Gothic Neo";
	line-height: 0;
	margin-top: 15px;
	margin-bottom: 10px;
`;

const PriceWrapper = styled.div`
	color : #0174DF;
	font-size: 1.2em;
	line-height: 0.5;
	margin-top: 20px;
	margin-bottom: 25px;
`;



export default MenuBox;
