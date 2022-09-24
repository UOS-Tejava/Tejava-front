import React from "react";
import { motion } from 'framer-motion';
import Backdrop from "./Backdrop";
import '../../css/Modal.css'

// initial, animate (end state), exit, transition (delay etc. it's optional)

// drop시 상태 정의
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
	// const { close } = props; // close 함수

	return (
		<Backdrop onClick={close}>
			<motion.div
				drag
				onClick={(e) => e.stopPropagation()} // stopPropagation : 현재 이벤트의 추가 전파 방지
				className="modal"
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				{children}
				<button onClick={close}>Close</button>
			</motion.div>
		</Backdrop>
	);
}

export default Modal;
