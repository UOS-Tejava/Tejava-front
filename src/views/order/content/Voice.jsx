import React, { useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { Button, ButtonGroup } from "@mui/material";
import styled from "@emotion/styled";
import lottie from "lottie-web";
import voiceAnimation from "../../../static/animation/voice-animation.json";

const Voice = () => {
	const {
		transcript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition
	} = useSpeechRecognition();

	useEffect(() => {
		const anim = lottie.loadAnimation({
			container: document.querySelector("#voice-animation"),
			animationData: voiceAnimation,
			autoplay: false,
		});
		anim.addEventListener("DOMLoaded", (e) => {
			console.log(e);
			if (listening)
				anim.play();
			else
				anim.pause();
		});
		return () => anim.destroy();
	}, [listening]);

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
				<Button onClick={() => {
					SpeechRecognition.startListening();
					// anim.play();
				}}>Start</Button>
				<Button onClick={SpeechRecognition.stopListening}>Stop</Button>
				<Button onClick={resetTranscript}>Reset</Button>
			</ButtonGroup>
			<AnimationWrapper>
				<div id = "voice-animation" style={{ width : 150, marginLeft: '18px' }}></div>
			</AnimationWrapper>
			<Textbox>
				<p>{transcript}</p>
			</Textbox>
		</Wrapper>
	);
}

const AnimationWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

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
	background: #E3F2FD;
	height: 100px;
	width: 100%;
	position: relative;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
`;

export default Voice;
