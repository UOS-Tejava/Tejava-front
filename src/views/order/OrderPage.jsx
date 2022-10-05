import React, { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import styled from "@emotion/styled";
import Modal from "../../components/modal/Modal";
import Voice from "../../components/voice/Voice";
import MenuBox from "../../components/order/MenuBox";
import Cart from "../../components/cart/Cart";
import OrderDetail from "../../components/order/OrderDetail";

const OrderPage = () => {
	const [voiceModalOpen, setVoiceModalOpen] = useState(false);
	const [menuModalOpen, setMenuModalOpen] = useState(true);

	const [cart, setCart] = useState([]);

	const closeVoiceModal = () => setVoiceModalOpen(false);
	const openVoiceModal = () => setVoiceModalOpen(true);
	const closeMenuModal = () => setMenuModalOpen(false);

	return (
		<Wrapper>
			<MenuWrapper>
				<MenuBox text="비스트로 디너"/>
				<MenuBox text="프렌치 디너"/>
				<MenuBox text="잉글리시 디너"/>
				<MenuBox text="샴페인 축제 디너"/>
			</MenuWrapper>
			<Cart modalOpen={voiceModalOpen} setModal={setVoiceModalOpen} />
			<AnimatePresence // 언마운트시에도 애니메이션이 동작하도록 감싸주기
				initial={false} // 초기 렌더링 시 children 애니메이션 prevent
				mode="wait" // 한 번에 하나의 컴포넌트만 업데이트 (exitBeforeEnter deprecated 되고 mode로 대체)
				onExitComplete={() => null}
			>
				{voiceModalOpen &&
					<Modal close={closeVoiceModal}>
						<Voice />
					</Modal> }
				{
					menuModalOpen &&
					<Modal close={closeMenuModal}>
						<OrderDetail />
					</Modal>
				}
			</AnimatePresence>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 90vh;
`;

const MenuWrapper = styled.div`
	width: 45%;
	height: 100%;
	margin-top : 10px;
	display: grid;
	align-items: center;
	justify-items: center;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 1fr 1fr;
`;

export default OrderPage;
