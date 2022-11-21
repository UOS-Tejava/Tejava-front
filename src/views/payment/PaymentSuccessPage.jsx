import { useNavigate } from 'react-router'
import './paymentSuccessPage.css'

function PaymentSuccess() {
  let navigate = useNavigate()

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto mt-5">
            <div class="payment">
              <div class="payment_header">
                <div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>
              </div>
              <div class="content">
                <h1>고객님의 주문이 완료되었습니다.</h1>
                <p>주문일시 : ~~</p>
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