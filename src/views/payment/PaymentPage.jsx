import { Link, useNavigate } from 'react-router-dom'


function Payment() {
    let navigate = useNavigate();

    return (
        <div className="container p-0 mt-3">
            <div className="card px-4">
                <p className="h3 py-3 d-flex justify-content-center">주문결제</p>
                <div className="row gx-3">
                    <div className="col-12">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">주문자 이름</p>
                            <input className="form-control mb-3" type="text" placeholder="Name" />
                        </div>
                    </div>

                    <div className="col-12 row">
                        <span className="text mb-1 col-4">주문 내역</span>
                        <span className='col-8'>[주문정보]</span>
                    </div>

                    <div className="col-12 row">
                        <span className="text mb-1 col-4">배달예정시간</span>
                        <span className='col-8'>[시간]</span>
                    </div>

                    <div className="col-12">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">배달 주소</p>
                            <input className="form-control mb-3" type="text" placeholder="주소" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">카드번호</p>
                            <input className="form-control mb-3" type="text" placeholder="1234 5678 435678" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">유효기한</p>
                            <input className="form-control mb-3" type="text" placeholder="MM/YYYY" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">CVV/CVC</p>
                            <input className="form-control mb-3 pt-2 " type="password" placeholder="***" />
                        </div>
                    </div>
                    <div className='text-center mb-3'>총 주문 금액 : </div>
                    <div className="col-12 row">
                        <button type="button" className="btn btn-primary mb-3" onClick={() => { navigate('/paymentsuccess') }}>
                            <span className="">결제하기 </span>
                            <span className="fas fa-arrow-right"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;