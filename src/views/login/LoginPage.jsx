import { useState, useEffect } from 'react';
import {
	MDBBtn,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBInput,
	MDBIcon,
	MDBCheckbox
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { changeUserState } from '../../store'
import { useNavigate } from 'react-router';

// let a = []
// axios.get('/order/history').then((res)=>{a=res.data})
// console.log(a);
// setTimeout(() => {
// 	console.log(a);
// }, 2000);

function LoginBox() {
	let loginInfo = {
		uid: '',
		pwd: '',
		staySignedIn: false
	}
	let dispatch = useDispatch()
	let a = useSelector((state) => state.user)
	let navigate = useNavigate()
	return (
		<MDBContainer fluid>
			<MDBRow className='d-flex justify-content-center align-items-center h-100'>
				<MDBCol col='12'>

					<MDBCard className='bg-transparent text-dark my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
						<MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

							<h2 className="fw-bold mb-2 text-uppercase">로그인</h2>
							<p className="mb-5">아이디와 비밀번호를 입력하세요</p>

							<MDBInput wrapperClass='mb-4 mx-5 w-100' label='ID' id='formControlLg' type='email' size="lg" onChange={(e) => { loginInfo.uid = e.target.value }} />
							<MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => { loginInfo.pwd = e.target.value }} />

							<MDBCheckbox label='로그인 상태 유지' onClick={() => { loginInfo.staySignedIn = !(loginInfo.staySignedIn) }} />
							<MDBCheckbox label='직원 로그인' />

							<span className="small"><a class="" href="#!" >아이디 찾기 </a></span>
							<span className="small"><a class="" href="#!" >비밀번호 찾기</a></span>

							<MDBBtn outline className='mx-2 px-5' color='primary' size='lg' style={{ margin: '20px' }} onClick={() => {
								axios.post('/login', loginInfo)
									.then((res) => {
										//console.log(res.data);
										dispatch(changeUserState(res.data))
										navigate('/')
									})
									.catch((err) => { console.log(err); });
							}}>
								로그인
							</MDBBtn>

							<div>
								<p className="mb-0">아직 회원이 아니세요? <a href="#!" class="fw-bold">회원가입</a></p>
								<div>{a.name}</div>
							</div>
						</MDBCardBody>
					</MDBCard>

				</MDBCol>
			</MDBRow>

		</MDBContainer>
	);
}


export default function Login() {
	return (
		<div className="login">
			<LoginBox />
		</div>
	);
}
