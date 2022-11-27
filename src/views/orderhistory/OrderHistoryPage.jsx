import { useEffect, useState } from "react"
import "./orderHistoryPage.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setSeeModal } from '../../store';
import axios from "axios";

let cardId = '';

function OrderHistory() {
  let [orderHistory, setOrderHistory] = useState([]);
  let [show, setShow] = useState(false);
  let navigate = useNavigate();
  let storeUserInfo = useSelector(state => state.user)

	if(storeUserInfo.role == 'NOT_MEMBER') navigate('/login')

  function showModal() {
    setShow(true);
  };

  function closeModal() {
    setShow(false);
  }
  useEffect(() => {
    axios.get('/order/history/orders').then((res) => {
      console.log(res.data);
      let sortedHistory = [...res.data].reverse()
      // sortedHistory.sort((a,b)=>{return })
      setOrderHistory(sortedHistory);
    })
  }, []);
  
  return (
    <div>
      {(show ? <HistoryModal orderHistory={orderHistory} closeModal={closeModal} navigate={navigate} /> : null )}
      <h2 className="text-center mt-3">주문내역</h2>
      {
        orderHistory.map((a, i) => {
          return (
            <>
              {<HistoryCard data={a} index={i} showModal={showModal}  /> }
            </>
          )
        })
      }

    </div>
  )
}

function HistoryCard(props) {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <MDBCard type='button' className="btn m-4 md" id={'card' + props.index} alignment='center' border="primary" style={{ width: '600px' }} onClick={
          (e) => {
            e.stopPropagation();
            cardId = e.currentTarget.id;
            console.log(document.querySelector(`#${cardId}`));
            props.showModal();
          }
        }>
          <MDBCardHeader className="" >{props.data.orderDateTime}</MDBCardHeader>
          <div>
            <MDBCardBody className="d-flex row align-items-center" >
              <MDBCardTitle className="col-9" style={{fontSize:'25px'}}>{props.data.menus[0].menu_nm} 외 {props.data.menus.length-1 } 건</MDBCardTitle>
              <MDBCardText className="btn btn-primary col-3" style={{height:'100px', paddingTop:'30px', fontSize:'20px'}}>{props.data.order_status}</MDBCardText>
            </MDBCardBody>
          </div>
          <MDBCardFooter className='text-muted'>MR.DAEBAK</MDBCardFooter>
        </MDBCard>
      </div>
    </div>

  );
}

function HistoryModal(props) {
  let cardNum = (Number(cardId.slice(4)))
  return (
    <div className="black-bg">
      <div className="white-bg">
        <div className="detailbox">
          <h4 className="p-3">{document.querySelector(`#${cardId} .card-title`).innerHTML}</h4>
          <div>주문일시 : {props.orderHistory[cardNum].orderDateTime}</div>
          <div><span className="col-6">주문자 :</span><span className="col-6"> {props.orderHistory[cardNum].customerName}</span></div>
          <div>주소 : {props.orderHistory[cardNum].customerAddress}</div>
          <div className="p-2" style={{border:'solid 2px lightgray', fontSize:'15px',fontWeight:'bold'}}>주문정보 {props.orderHistory[cardNum].menus.map((a,i)=>{
            return (
              <>
                <div>메뉴명 : {a.menu_nm}</div>
                <div>스타일 : {a.style.style_nm}</div>
                <div>옵션 : {a.options.map((b)=>{return (
                  <>
                    <span>'{b.option_nm}' x {b.quantity}  </span>
                  </>
                )})}</div>
                <br/>
              </>
            )
            })}</div>
          <div className="">배달요청일시 : {props.orderHistory[cardNum].req_orderDateTime}</div>
          <div className="pb-2">총 주문금액 : {props.orderHistory[cardNum].total_price}원</div>
        </div>
          <button className="btn btn-danger" id="close" onClick={props.closeModal}>닫기</button>
      </div>
    </div>
  )
}
export default OrderHistory