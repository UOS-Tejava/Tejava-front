import { motion } from "framer-motion";

const MenuBox = (props) => {
	return (
		<motion.button
			whileHover={{ scale : 1.02 }}
			whileTap={{ scale : 0.98 }}
			className="menubox"
			style={buttonStyle}
			onClick={()=>console.log("클릭")}
		>
			{props.text}
		</motion.button>
	);
}

const buttonStyle = {
	'border-radius': '15px',
	'border' : 'hidden',
	'height': '80%',
	'width': '350px',
	'box-shadow' : '0 2px 5px rgba(0, 0, 0, 0.5)'
};

export default MenuBox;
