import { useEffect, useState } from "react"
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
import { useSelector, useDispatch } from 'react-redux';
import { setSeeModal } from '../../store';
import axios from "axios";

// async function getOrderHistory(set) {
//   await axios.get('/order/history').then((res)=>{
//     set(res.data)
//   })
// }

function OrderHistory() {
  let [orderHistory, setOrderHistory] = useState([]);
  axios.get('/order/history').then((res)=>{setOrderHistory(res.data)})
  return (
    <div>
      <Link to='/payment'>결제화면테스트</Link>
      <h2 className="text-center">주문내역</h2>
      {
        orderHistory.map((a, i) => {
          return (
            <>
              <HistoryCard data={a} index={i} />
            </>
          )
        })
      }
      <OrderHistoryModal />
    </div>
  )
}

function HistoryCard(props) {

  const [basicModal, setBasicModal] = useState(false);

  return (
    <div>
      <div className="d-flex justify-content-center">
        <MDBCard type='button' className="btn m-4 md" alignment='center' border="primary" style={{ width: '600px' }}>
          <MDBCardHeader className="" >{props.data.시간}</MDBCardHeader>
          <div className="row">
            <MDBCardBody className="">
              <MDBCardTitle>{props.data.menu_nm}</MDBCardTitle>
              <MDBCardText>{props.data.menu_config}</MDBCardText>
              <MDBBtn className="" href='#'>{props.data.price}</MDBBtn>
            </MDBCardBody>
          </div>
          <MDBCardFooter className='text-muted'>옵션</MDBCardFooter>
        </MDBCard>
        {
          basicModal == true ? <OrderHistoryModal basicModal={basicModal} setBasicModal={setBasicModal} /> : null
        }
      </div>
    </div>

  );
}


export default OrderHistory