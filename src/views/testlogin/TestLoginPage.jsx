import { useEffect, useState } from 'react';
import axios from 'axios';

const requestLogin = (userId, userPw)=>{
	axios.get('/login', {
		"pwd": {userPw},
		"staySignedIn": true,
		"uid": {userId}
	}).then(res=>{
		// if(res.data.loginSuccess === false){
		// 	alert(res.data.message);
		// } else{
		alert("로그인 성공");
		window.location.href = "/"
		// }
		//res가 ok면 로긴 상태로,
		//res가 fail이면 alert상태로(화면 새로고침?)
	}).catch(err=>console.log(err.response.data))
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
	// const isAuth = async ()=>{
	// 	await axios.get('/auth/authenticate').then(res=>{
	// 		if (res.data.login){
	// 			alert("이미 로그인된 상태입니다.");
	// 			window.location.href = '/';
	// 		}
	// 	})
	// }
	// useEffect(()=>{
	// 	isAuth();
	// }, []);
	return (
		<div className="login">
			<LoginBox/>
		</div>
	);
}
