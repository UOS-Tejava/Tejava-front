import React from "react";
import { motion } from 'framer-motion';
import Backdrop from "./Backdrop";
import '../../css/Modal.css'
import styled from "@emotion/styled";

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
					}}>확인</SubmitButton>
					<SubmitButton onClick={close}>취소</SubmitButton>
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
	height: 30px;
	width: 50px;
    border: unset;
	cursor: pointer;
	margin: 10px;
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
