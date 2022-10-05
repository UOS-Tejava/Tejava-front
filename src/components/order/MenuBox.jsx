import { motion } from "framer-motion";
import styled from "@emotion/styled";

const MenuBox = (props) => {
	// const { menuConfig } = props.menuConfig;
	return (
		<Wrapper
			whileHover={{ scale : 1.02 }}
			whileTap={{ scale : 0.98 }}
			className="menubox"
			onClick={()=>console.log("클릭")}
		>
			<ImageWrapper>
				image
			</ImageWrapper>
			<MenuNameWrapper>{props.text}</MenuNameWrapper>
			<MenuConfigWrapper>와인, 스테이크</MenuConfigWrapper>
			<PriceWrapper>{props.price}100</PriceWrapper>
		</Wrapper>
	);
}

const Wrapper = styled(motion.div)`
	border-radius : 10px;
	border : hidden;
	height : 90%;
	width: 90%;
	box-shadow : 0 2px 5px rgba(0, 0, 0, 0.3);
	background : white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ImageWrapper = styled.div`
	width: 80%;
	height: 50%;
	background: yellow;
`;

const MenuNameWrapper = styled.p`
	font-size: 1.5em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
`;

const MenuConfigWrapper = styled.p`
	font-size: 1.2em;
	font-family: "Apple SD Gothic Neo";
	line-height: 0;
`;

const PriceWrapper = styled.p`
	color : blue;
	font-size: 1.2em;
	line-height: 0.5;
`;



export default MenuBox;
