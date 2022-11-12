import { useState } from "react"
import orderedData from "./ordereddata"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'



function OrderHistory() {
  let [orderHistory, setOrderHistory] = useState(orderedData);
  return (
    <>
      <Link to='/payment'>결제화면테스트</Link>

      {
        orderHistory.map((a, i) => {
          return <HistoryModal data={a} index={i} />
        })
      }
    </>
    // 오더히스토리 배열 -> state로 생성
    // 데이터를 받을때마다 state 변경
    // state를 map 돌려서 모달창 리스트를 생성 -> o
    // 모달창은 별도의 컴포넌트 -- 변수전달 어떻게? -> o
    //모달창 css는 어떻게 -> o
  )
}

function HistoryModal(props) {
  return (
    <>
      <MDBCard className="m-5 md" alignment='center' border="primary" style={{ width: '600px' }}>
        <MDBCardHeader>Featured</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>{props.data.메뉴}</MDBCardTitle>
          <MDBCardText>{props.data.스타일}</MDBCardText>
          <MDBBtn href='#'>{props.data.상태}</MDBBtn>
        </MDBCardBody>
        <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
      </MDBCard>
    </>
  );
}

export default OrderHistory