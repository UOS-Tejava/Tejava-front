import React from "react";
import { motion } from 'framer-motion';
import Backdrop from "./Backdrop";
import '../../css/Modal.css'
import { Button } from "@mui/material";

const dropIn = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.1,
			type: "spring",
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
	}
}

const Modal = ({ children, close }) => {
	return (
		<Backdrop onClick={close}>
			<motion.div
				drag
				onClick={(e) => e.stopPropagation()}
				className="modal"
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				{children}
				<Button variant="contained" onClick={close}>Close</Button>
			</motion.div>
		</Backdrop>
	);
}

export default Modal;
