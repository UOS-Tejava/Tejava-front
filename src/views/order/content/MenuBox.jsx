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
			{/* <InfoWrapper> */}
				<MenuNameWrapper>{item.menu_nm}</MenuNameWrapper>
				<MenuConfigWrapper>{item.menu_config}</MenuConfigWrapper>
				<PriceWrapper>{toPriceString(item.price) + " 원"}</PriceWrapper>
			{/* </InfoWrapper> */}
		</Wrapper>
	);
}

const Wrapper = styled(motion.div)`
	position: relative;
	border-radius : 5px;
	border : hidden;
	height : 98%;
	width: 98%;
	box-shadow : 0 2px 5px rgba(0, 0, 0, 0.2);
	background : white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-left: 10%;
	cursor: pointer;
`;

const ImageWrapper = styled.div`
	border-top-left-radius: inherit;
	border-top-right-radius: inherit;
	position: absolute;
	top: 0px;
	margin-bottom: auto;
	width: 100%;
	height: 50%;
	background-image: ${(props) => `url(${props.source})`};
	background-size: cover;
`;

const MenuNameWrapper = styled.div`
	font-size: 1.3em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	text-align: center;
	margin-bottom: 10px;
	position: absolute;
	top: 57%;
	height: 10%;
	width: 100%;
`;

const MenuConfigWrapper = styled.div`
	font-size: 1.0em;
	font-family: "Apple SD Gothic Neo";
	word-break: break-all;
	margin-left: 20px;
	margin-right: 20px;
	text-align: center;
	margin-bottom: 20px;
	position: absolute;
	top: 71%;
	height: 10%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const PriceWrapper = styled.div`
	color : #0174DF;
	font-size: 1.2em;
	line-height: 0.5;
	text-align: center;
	position: absolute;
	top: 87%;
	height: 10%;
`;



export default MenuBox;
