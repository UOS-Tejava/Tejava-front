import { motion } from "framer-motion";
import styled from "@emotion/styled";

const Counter = (props) => {
	return (
		<Wrapper>
			<CounterButton
				onClick={props.onDecrease}
			>-</CounterButton>
			<p style={{margin: "10px"}}>{props.value}</p>
			<CounterButton
				onClick={props.onIncrease}
			>+</CounterButton>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CounterButton = styled(motion.button)`
`;

export default Counter;
