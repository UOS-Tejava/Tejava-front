import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';

function Signup() {
  return (
    <>
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{ width:'600px' }}>
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">회원가입</h2>
            <MDBInput wrapperClass='mb-4' label='아이디' size='lg' id='form1' type='text' />
            <MDBInput wrapperClass='mb-4' label='이름' size='lg' id='form2' type='email' />
            <MDBInput wrapperClass='mb-4' label='비밀번호' size='lg' id='form3' type='password' />
            <MDBInput wrapperClass='mb-4' label='비밀번호 확인' size='lg' id='form4' type='password' />
            <MDBInput wrapperClass='mb-4' label='연락처' size='lg' id='form4' type='tel' />
            <MDBInput wrapperClass='mb-4' label='주소' size='lg' id='form4' type='text' />
            <div className='d-flex flex-row justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='개인정보 활용 동의' />
            </div>
            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>등록</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  )
}

export default Signup