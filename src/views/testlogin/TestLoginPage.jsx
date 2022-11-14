import { useState } from 'react';

const requestLogin = (userId, userPw)=>{
	fetch('/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"pwd": userPw,
			"staySignedIn": true,
			"uid": userId
		})
	})
	.then(res => res.json())
	.then(data => {
		localStorage.setItem('user', JSON.stringify(data));
		window.location.href = "/";
	})
	.catch(err => alert("로그인 정보가 올바르지 않습니다.")); //TODO: 예외처리
}

function InputID(){
	const [userId, setUserId] = useState("");
	const [userPw, setUserPw] = useState("");
	const submitLogin = ()=>{
		requestLogin(userId, userPw);
		//post하기
	}
	return (
		<div className="loginInput">
			<input type="email" className="idInput" placeholder="ID" onChange={(e)=>{
				e.preventDefault();
				setUserId(e.target.value);
			}} />
			<input type="password" className="pwInput" placeholder="PW" onChange={(e)=>{
				e.preventDefault();
				setUserPw(e.target.value);
			}} />
			<button className="loginButton" onClick={submitLogin}><b>Sign in</b></button>
			<button className="signupbtn" onClick={e=>{
				window.location.href = '/signup'
			}}>sign up</button>
		</div>
	);
}

function LoginBox(){
	return (
		<div>
			<div className="doubleBox"></div>
			<div className="loginBox">
				<div className="loginTop">
					<span>LOGIN</span>
					<div className="loginTopRight" onClick={e=>{
						e.preventDefault();
						window.location.href = "/"
					}}>X</div>
				</div>
				<InputID/>
			</div>
		</div>
	);
}

export default function Login(){
	return (
		<div className="login">
			<LoginBox/>
		</div>
	);
}
