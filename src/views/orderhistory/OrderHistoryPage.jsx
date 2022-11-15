import { useState } from "react"
import testorderedData from "./testordereddata"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
import OrderHistoryModal from "./orderHistoryModal";



function OrderHistory() {
  let [testorderHistory, setTestOrderHistory] = useState(testorderedData);
  return (
    <div>
      <Link to='/payment'>결제화면테스트</Link>
      <h2 className="text-center">주문내역</h2>
      {
        testorderHistory.map((a, i) => {
          return (
            <>
            <TestHistoryModal data={a} index={i} />
            </>
            )
        })
        
      }
    </div>
  )
}

function TestHistoryModal(props) {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  return (
      <div className="d-flex justify-content-center">
        <MDBCard type='button' className="btn m-4 md" alignment='center' border="primary" style={{ width: '600px' }} onClick={toggleShow}>
          <MDBCardHeader className="" >{props.data.시간}</MDBCardHeader>
          <div className="row">
            <MDBCardBody className="">
              <MDBCardTitle>{props.data.메뉴}</MDBCardTitle>
              <MDBCardText>{props.data.스타일}</MDBCardText>
              <MDBBtn className="" href='#'>{props.data.상태}</MDBBtn>
            </MDBCardBody>
          </div>
          <MDBCardFooter className='text-muted'>옵션</MDBCardFooter>
        </MDBCard>
        {
          basicModal==true? <OrderHistoryModal basicModal={basicModal} setBasicModal={setBasicModal} toggleShow={toggleShow}/> : null
        }
      </div>
  );
}


export default OrderHistory