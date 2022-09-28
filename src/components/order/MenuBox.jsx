import { motion } from "framer-motion";

const MenuBox = () => {
	return (
		<motion.button
			whileHover={{ scale : 1.1 }}
			whileTap={{ scale : 0.9 }}
			className="menubox"
			style={buttonStyle}
			onClick={()=>console.log("클릭")}
		>
			심플디너
		</motion.button>
	);
}

const buttonStyle = {
	'border-radius': '10px',
	'height': '100px',
	'width': '150px',
	'background': 'skyblue'
};

export default MenuBox;
