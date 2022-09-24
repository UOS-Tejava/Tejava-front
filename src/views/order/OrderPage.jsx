import React, { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import Modal from "../../components/modal/Modal";
import Voice from "../../components/voice/Voice";

const OrderPage = () => {
	const [modalOpen, setModalOpen] = useState(false);

	const close = () => setModalOpen(false);
	const open = () => setModalOpen(true);

	return (
		<div>
			<motion.button
				whileHover={{ scale : 1.1 }}
				whileTap={{ scale : 0.9 }}
				className="save-button"
				// onClick={()=>null}
				onClick={() => (modalOpen ? close() : open())}
			>
				음성인식으로 주문하기
			</motion.button>
			<AnimatePresence // 언마운트시에도 애니메이션이 동작하도록 감싸주기
				initial={false} // 초기 렌더링 시 children 애니메이션 prevent
				mode="wait" // 한 번에 하나의 컴포넌트만 업데이트 (exitBeforeEnter deprecated 되고 mode로 대체)
				onExitComplete={() => null}
			>
				{modalOpen &&
					<Modal close={close}>
						<Voice />
					</Modal> }
			</AnimatePresence>
		</div>
	);
}

export default OrderPage;
