import styled from "@emotion/styled";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import CartAddModal from "../../../components/modal/CartAddModal";
import Modal from "../../../components/modal/Modal";

const toPriceString = (item) => {
	return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const PrevOrderList = (props) => {
	const menu = props.menu;
	const [modalOpen, setModalOpen] = useState(false);

	const addToCart = async (menuDetail) => {
		await fetch('/cart/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				menu: menuDetail,
				userId: JSON.parse(localStorage.getItem('user')).id
			})
		})
		.then(res => window.location.href = "/order")
		.catch(err => console.log(err))
	};

	return (
		<Wrapper
			onClick={() => {
				setModalOpen(true);
			}}
		>
			<ImageWrapper source={menu.menu_pic} />
			<TextWrapper>{menu.menu_nm}</TextWrapper>
			<OptionWrapper>{menu.style.style_nm}</OptionWrapper>
			<PriceWrapper>{toPriceString(menu.price) + "원"}</PriceWrapper>
			<AnimatePresence // 언마운트시에도 애니메이션이 동작하도록 감싸주기
				initial={false} // 초기 렌더링 시 children 애니메이션 prevent
				mode="wait" // 한 번에 하나의 컴포넌트만 업데이트 (exitBeforeEnter deprecated 되고 mode로 대체)
				onExitComplete={() => null}
			>
			{
				modalOpen &&
				<CartAddModal
					close={() => setModalOpen(false)}
					add={() => addToCart(menu)}
				>
					<TextWrapper>
						<p>장바구니에 추가하시겠습니까?</p>
					</TextWrapper>
				</CartAddModal>
			}
			</AnimatePresence>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px;
	width: 150px;
	background: #E3F2FD;
	// box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
	margin-left: 10px;
	margin-right: 10px;
`;

const ImageWrapper = styled.div`
	width: 80%;
	height: 100px;
	background: yellow;
	background-image: ${props => `url(${props.source})`};
	background-size: cover;
`;

const TextWrapper = styled.div`
	font-size: 1em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	width: 150px;
	text-align: center;
	// margin-bottom: 5px;
	margin-top: 15px;
`;

const ModalTextWrapper = styled.div`
	font-size: 1em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	// width: 150px;
	text-align: center;
	margin-right: 40px;
`;

const OptionWrapper = styled.div`
	font-size: 1em;
	line-height: 0.5;
	margin-top: 15px;
`;

const PriceWrapper = styled.div`
	color : #0174DF;
	font-size: 1em;
	line-height: 0.5;
	margin-top: 20px;
`;


export default PrevOrderList;
