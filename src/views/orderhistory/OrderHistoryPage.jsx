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
  let [orderHistory, setOrderHistory] = useState([1, 2, 3]);
  let [show, setShow] = useState(false);
  let temp='1';
  let navigate = useNavigate();

  function showModal() {
    setShow(true);
  };

  function closeModal() {
    setShow(false);
  }
  useEffect(() => {
    console.log('re');
    axios.get('/order/history').then((res) => {
      setOrderHistory(res.data);
      temp = res.data
    })
  }, []);
  
  console.log(orderHistory);

  return (
    <div>
      {show ? <HistoryModal orderHistory={orderHistory} closeModal={closeModal} navigate={navigate} /> : null}
      <h2 className="text-center">주문내역</h2>
      {
        orderHistory.map((a, i) => {
          return (
            <>
              <HistoryCard data={a} index={i} showModal={showModal} />
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
      </div>
    </div>

  );
}

function HistoryModal(props) {
  let cardNum = (Number(cardId.slice(4)))

  return (
    <div className="black-bg">
      <div className="white-bg">
        <h4>{document.querySelector(`#${cardId} .card-title`).innerHTML}</h4>
        <div>주문일시 {props.orderHistory[cardNum].orderDateTime}</div>
        <div>주문자 {props.orderHistory[cardNum].customerName}</div>
        <div>주소 {props.orderHistory[cardNum].customerAddress}</div>
        <div>옵션 {props.orderHistory[cardNum].options.map((a,i)=>{
          return (
            <span>'{a.option_nm}'  </span>
          )
          })}</div>
        <div className="mb-4">배달요청일시 {props.orderHistory[cardNum].req_orderDateTime}</div>
        <button className="btn btn-danger" id="close" onClick={props.closeModal}>닫기</button>
      </div>
    </div>
  )
}
export default OrderHistory