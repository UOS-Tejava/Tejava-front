import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

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
		<div>
			<h2>
				음성인식
			</h2>
			<p>Listening : {listening ? 'on' : 'off' }</p> {/*TODO: 애니메이션 삽입*/}
			<button onClick={SpeechRecognition.startListening}>Start</button>
			<button onClick={SpeechRecognition.stopListening}>Stop</button>
			<button onClick={resetTranscript}>Reset</button>
			<p>text: {transcript}</p>
		</div>
	);
}

export default Voice;
