import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import PrevOrderList from "./PrevOrderList";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatePresence } from "framer-motion";
import CartAddModal from "../../../components/modal/CartAddModal";
import { useNavigate } from "react-router";

const PrevOrderBox = () => {
	const [prevOrderList, setPrevOrderList] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
	const [menu, setMenu] = useState([]);
	const navigate = useNavigate();

	const sliderSettings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};

	const addToCart = async () => {
		await fetch('/cart/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				menu: menu,
				userId: JSON.parse(localStorage.getItem('user')).id
			})
		})
		.then(res => navigate("/order"))
		.catch(err => console.log(err))
	};

	useEffect(() => {
		fetch('/order/history')
		.then(res => res.json())
		.then(data => setPrevOrderList(data))
		.catch(err => console.log(err));
	}, []);

	let prevList = [];
	prevOrderList.map((item) => {
		prevList.push(
			<PrevOrderList menu={item} setMenu={setMenu} setModalOpen={setModalOpen} />
		)
	})

	return (
		<>
			<StyledSlider {...sliderSettings}>
			{
				prevOrderList &&
				prevList
			}
			</StyledSlider>
			<AnimatePresence // 언마운트시에도 애니메이션이 동작하도록 감싸주기
				initial={false} // 초기 렌더링 시 children 애니메이션 prevent
				mode="wait" // 한 번에 하나의 컴포넌트만 업데이트 (exitBeforeEnter deprecated 되고 mode로 대체)
				onExitComplete={() => null}
			>
			{
				modalOpen &&
				<CartAddModal
					close={() => setModalOpen(false)}
					add={addToCart}
				>
					<ModalTextWrapper>
						장바구니에 추가하시겠습니까?
					</ModalTextWrapper>
				</CartAddModal>
			}
			</AnimatePresence>
		</>
	);
}

const StyledSlider = styled(Slider)`
	width: 650px;
	text-align: center;
	height: 300px;
	padding-left: 10px;

	.slick-prev:before,
	.slick-next:before {
		color: gray;
	};
`;

const ModalTextWrapper = styled.div`
	font-size: 1em;
	font-family: "Apple SD Gothic Neo";
	font-weight: bold;
	text-align: center;
	margin-bottom: 15px;
	margin-top: 15px;
`;

export default PrevOrderBox;
