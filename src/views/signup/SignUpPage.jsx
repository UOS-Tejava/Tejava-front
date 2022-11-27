import axios from 'axios';
import { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router';

let registerInfo = {
  address: "string",
  adminVerificationCode: "string",
  agreement: true,
  matchingPwd: "string",
  name: "string",
  phoneCheck: true,
  phoneNo: "string",
  pwd: "string",
  registerAsAdmin: false,
  uid: "string"
}
let 직원코드입력 = ''
let 직원코드 = 'tejava'

function Signup() {
  let [visible, setVisible] = useState(false);
  let navigate = useNavigate();
  return (
    <>
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{ width: '600px' }}>
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">회원가입</h2>
            <MDBInput wrapperClass='mb-2' label='아이디' size='lg' id='form1' type='text' onChange={(e) => { registerInfo.uid = e.target.value }} />
            <MDBBtn className='btn btn-info mb-4' onClick={() => {
              axios.get(`/user/duplication-check/uid/${registerInfo.uid}`)
                .then((res) => {
                  console.log(res)
                  if (res.data == true) alert('아이디 중복'); else if(res.data==false) alert('사용할 수 있는 아이디입니다')
                })
                .catch((err) => { console.log(err); })
            }}>중복확인</MDBBtn>
            <MDBInput wrapperClass='mb-4' label='이름' size='lg' id='form2' type='email' onChange={(e) => { registerInfo.name = e.target.value }} />
            <MDBInput wrapperClass='mb-4' label='비밀번호' size='lg' id='form3' type='password' onChange={(e) => { registerInfo.pwd = e.target.value }} />
            <MDBInput wrapperClass='mb-4' label='비밀번호 확인' size='lg' id='form4' type='password' onChange={(e) => {
              if (e.target.value == registerInfo.pwd) {
                setVisible(true);
              } else setVisible(false)
              registerInfo.matchingPwd = e.target.value;
            }} />
            {visible == true ? <div className='mb-4' style={{fontStyle:'italic'}}>비밀번호가 일치합니다</div> : null}
            <MDBInput wrapperClass='mb-4' label='연락처' size='lg' id='form4' type='tel' onChange={(e) => { registerInfo.phoneNo = e.target.value }} />
            <MDBInput wrapperClass='mb-4' label='주소' size='lg' id='form4' type='text' onChange={(e) => { registerInfo.address = e.target.value }} />
            <MDBInput wrapperClass='mb-2' label='직원 코드' size='lg' id='form4' type='text' onChange={(e) => { 직원코드입력 = e.target.value }} />
            <button className='btn btn-info mb-4' onClick={()=>{
              if(직원코드입력 == 직원코드) {alert('인증되었습니다');
              registerInfo.registerAsAdmin = true; registerInfo.adminVerificationCode = 'tejava'}
              else {alert('인증 실패'); registerInfo.registerAsAdmin = false; registerInfo.adminVerificationCode = 'string'}
              console.log(registerInfo.registerAsAdmin);
              console.log(registerInfo.adminVerificationCode);
            }}>인증</button>
            <div className='d-flex flex-row justify-content-center mb-4' style={{fontStyle:'italic'}}>
            회원 가입 시 개인정보 활용에 동의하는 것으로 간주합니다
            </div>
            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={() => {
              axios.post('/user/register', JSON.stringify(registerInfo), {
                headers: {
                  'Content-Type': 'application/json',
                },
              })
                .then(res => {console.log(res); alert('등록되었습니다'); navigate('/') })
                .catch(err => {alert(err.message); console.log(err);})
            }}>등록</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  )
}

export default Signup