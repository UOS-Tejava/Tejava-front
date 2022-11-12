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

let registerInfo = {
  "address": "string",
  "adminVerificationCode": "string",
  "agreement": false,
  "matchingPwd": "string",
  "name": "string",
  "phoneCheck": true,
  "phoneNo": "string",
  "pwd": "string",
  "registerAsAdmin": false,
  "uid": "string"
}



function Signup() {
  let [visible, setVisible] = useState(false);

  return (
    <>
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{ width: '600px' }}>
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">회원가입</h2>
            <MDBInput wrapperClass='mb-4' label='아이디' size='lg' id='form1' type='text' onChange={(e) => { registerInfo.uid = e.target.value }} />
            <MDBBtn className='btn btn-info mb-3'>중복확인</MDBBtn>
            <MDBInput wrapperClass='mb-4' label='이름' size='lg' id='form2' type='email' onChange={(e) => { registerInfo.name = e.target.value }} />
            <MDBInput wrapperClass='mb-4' label='비밀번호' size='lg' id='form3' type='password' onChange={(e) => { registerInfo.pwd = e.target.value }} />
            <MDBInput wrapperClass='mb-4' label='비밀번호 확인' size='lg' id='form4' type='password' onChange={(e) => {
              if (e.target.value == registerInfo.pwd) {
                setVisible(true);
              } else setVisible(false)
              registerInfo.matchingPwd = e.target.value;
            }} />
            {visible == true ? <div>비밀번호가 일치합니다</div> : null}
            <MDBInput wrapperClass='mb-4' label='연락처' size='lg' id='form4' type='tel' onChange={(e) => { registerInfo.phoneNo = e.target.value }} />
            <MDBInput wrapperClass='mb-4' label='주소' size='lg' id='form4' type='text' onChange={(e) => { registerInfo.address = e.target.value }} />
            <div className='d-flex flex-row justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' label='개인정보 활용 동의' onClick={() => {
                registerInfo.agreement = !(registerInfo.agreement);
              }} />
            </div>
            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={()=>{
              axios.post('/user/register', JSON.stringify(registerInfo), {
                headers: {
                  'Content-Type': 'application/json',
                },
              })
              .then(res => console.log(res))
              .catch(err => console.log(err))
            }}>등록</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  )
}

export default Signup