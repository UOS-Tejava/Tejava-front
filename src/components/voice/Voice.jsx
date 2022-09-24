import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { Button, ButtonGroup } from "@mui/material";
import styled from "@emotion/styled";

const Voice = () => {
	const {
		transcript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition
	} = useSpeechRecognition();

	if (!browserSupportsSpeechRecognition){
		return (
			<span>Browser doesn't support speech recognition.</span>
		);
	}

	return (
		<Wrapper>
			<h2>
				음성인식
			</h2>
			<ButtonGroup variant="text">
				<Button onClick={SpeechRecognition.startListening}>Start</Button>
				<Button onClick={SpeechRecognition.stopListening}>Stop</Button>
				<Button onClick={resetTranscript}>Reset</Button>
			</ButtonGroup>
			<p>Listening : {listening ? 'on' : 'off' }</p> {/*TODO: 애니메이션 삽입*/}
			<Textbox>
				<p>{transcript}</p>
			</Textbox>
			
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: block; // 세로 배치
	align-items: center; // 세로 가운데정렬
	justify-content: center; // 가로 가운데정렬
	position: relative;
	text-align: center;
	width: 90%;
`;

const Textbox = styled.div`
	border-radius: 20px;
	background: skyblue;
	height: 100px;
	width: 100%;
	position: relative;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	margin-bottom: 20px;
`;

export default Voice;
