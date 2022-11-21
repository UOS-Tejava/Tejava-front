import React, { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion';
import styled from "@emotion/styled";
import Modal from "../../components/modal/Modal";
import Voice from "./content/Voice";
import MenuBox from "./content/MenuBox";
import Cart from "./content/Cart";
import { useNavigate } from "react-router";

// const MenuList = (menuDetail) => 

const OrderPage = () => {
	const [voiceModalOpen, setVoiceModalOpen] = useState(false);
	const [menuDetail, setMenuDetail] = useState();
	const navigate = useNavigate();

	const getMenuDetailLocal = async () => {
		await fetch('/order/showAllMenus/')
			.then(res => res.json())
			.then(data => {
				setMenuDetail(data);
			});
	}

	useEffect(() => {
		getMenuDetailLocal();
	}, []);

	const closeVoiceModal = () => setVoiceModalOpen(false);
	const openVoiceModal = () => setVoiceModalOpen(true);

	return (
		<Wrapper>
			<MenuWrapper>
				{
					menuDetail &&
					<>
						<MenuBox item={menuDetail[0]} onClickFunction={() => {
							navigate("/menu", {
								state: { detail: menuDetail[0], idx: 1, modify: false }
							})
						}}/>
						<MenuBox item={menuDetail[1]} onClickFunction={() => {
							navigate("/menu", {
								state: { detail: menuDetail[1], idx: 2, modify: false }
							})
						}}/>
						<MenuBox item={menuDetail[2]} onClickFunction={() => {
							navigate("/menu", {
								state: { detail: menuDetail[2], idx: 3, modify: false }
							})
						}}/>
						<MenuBox item={menuDetail[3]} onClickFunction={() => {
							navigate("/menu", {
								state: { detail: menuDetail[3], idx: 4, modify: false }
							})
						}}/>
					</>
				}
			</MenuWrapper>
			<Cart modalOpen={voiceModalOpen} setModal={setVoiceModalOpen} navigate={navigate} />
			<AnimatePresence // 언마운트시에도 애니메이션이 동작하도록 감싸주기
				initial={false} // 초기 렌더링 시 children 애니메이션 prevent
				mode="wait" // 한 번에 하나의 컴포넌트만 업데이트 (exitBeforeEnter deprecated 되고 mode로 대체)
				onExitComplete={() => null}
			>
				{
					voiceModalOpen &&
					<Modal close={closeVoiceModal}>
						<Voice />
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
	// width: 100vw;
`;

const MenuWrapper = styled.div`
	width: 50%;
	height: 95%;
	margin: 5%;
	display: grid;
	align-items: center;
	justify-items: center;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 1fr 1fr;
	// float: left;
`;

export default OrderPage;
