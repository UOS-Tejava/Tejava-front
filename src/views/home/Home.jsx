import { Button } from "@mui/material";
import styled from "@emotion/styled";

const Home = () => {
	return (
		<Wrapper>
			<Button variant="outlined" onClick={() => window.location.href = "/order"}>
				OrderPage
			</Button>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 90vh;
`;

export default Home;