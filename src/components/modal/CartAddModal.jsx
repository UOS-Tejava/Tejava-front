import React from "react";
import { motion } from 'framer-motion';
import Backdrop from "./Backdrop";
import '../../css/Modal.css'
import styled from "@emotion/styled";

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

const CartAddModal = ({ children, close, add }) => {
	// const { close } = props; // close 함수

	return (
		<Backdrop onClick={close}>
			<ModalWrapper
				drag
				onClick={(e) => e.stopPropagation()} // stopPropagation : 현재 이벤트의 추가 전파 방지
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				{children}
				<ButtonWrapper>
					<SubmitButton
						onClick={() => {
							add();
					}}>✓</SubmitButton>
					<CancelButton onClick={close}>✗</CancelButton>
				</ButtonWrapper>
			</ModalWrapper>
		</Backdrop>
	);
}

const ButtonWrapper = styled.div`
	height: 50px;
	display: flex;
`;

const SubmitButton = styled.button`
	background-color: transparent;
    border: unset;
    color: green;
	font-size: x-large;
	cursor: pointer;
`;

const CancelButton = styled.button`
    background-color: transparent;
    border: unset;
    color: red;
	font-size: large;
	margin-bottom: 3px;
	margin-left: 10px;
	cursor: pointer;
`;

const ModalWrapper = styled(motion.div)`
	width: clamp(20%, 300px, 50%);
	margin: auto;
	max-height: 500px;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #fff;
	border-radius: 20px;
	padding: 20px;
`;

export default CartAddModal;
