import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";

const toPriceString = (item) => {
	return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const MenuBox = (props) => {
	const item = props.item;

	return (
		<Wrapper
			whileHover={{ scale : 1.02 }}
			whileTap={{ scale : 0.98 }}
			className="menubox"
			onClick={props.onClickFunction}
		>
			<ImageWrapper source={item.menu_pic} />
			<MenuNameWrapper>{item.menu_nm}</MenuNameWrapper>
			<MenuConfigWrapper>{item.menu_config}</MenuConfigWrapper>
			<PriceWrapper>{toPriceString(item.price) + " 원"}</PriceWrapper>
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
	background-image: ${(props) => `url(${props.source})`};
	background-size: cover;
`;

const MenuNameWrapper = styled.div`
	font-size: 1.3em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	margin-top: 20px;
	margin-bottom: 10px;
`;

const MenuConfigWrapper = styled.div`
	font-size: 1.0em;
	font-family: "Apple SD Gothic Neo";
	word-break: break-all;
	margin-left: 20px;
	margin-right: 20px;
	text-align: center;
`;

const PriceWrapper = styled.div`
	color : #0174DF;
	font-size: 1.2em;
	line-height: 0.5;
	margin-top: 20px;
	margin-bottom: 25px;
`;



export default MenuBox;
