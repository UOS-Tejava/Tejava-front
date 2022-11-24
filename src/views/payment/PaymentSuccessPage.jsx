import { useLocation, useNavigate } from 'react-router'
import './paymentSuccessPage.css'

function PaymentSuccess() {
  let navigate = useNavigate()
  let location = useLocation();
  let {req_orderDateTime} = location.state;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto mt-5">
            <div className="payment">
              <div className="payment_header">
                <div className="check"><i className="fa fa-check" aria-hidden="true"></i></div>
              </div>
              <div className="content">
                <h1>고객님의 주문이 완료되었습니다.</h1>
                <p>주문일시 : {req_orderDateTime} </p>
                <button onClick={()=>{navigate("/orderhistory")}}>주문내역 확인하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentSuccess