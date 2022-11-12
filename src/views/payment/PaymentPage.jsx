import { Link, useNavigate } from 'react-router-dom'


function Payment() {
    let navigate = useNavigate();

    return (
        <div class="container p-0">
            <div class="card px-4">
                <p class="h3 py-3 d-flex justify-content-center">주문결제</p>
                <div class="row gx-3">
                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">주문자 이름</p>
                            <input class="form-control mb-3" type="text" placeholder="Name" />
                        </div>
                    </div>

                    <div class="col-12 row">
                        <span class="text mb-1 col-4">주문 내역</span>
                        <span class='col-8'>[주문정보]</span>
                    </div>

                    <div class="col-12 row">
                        <span class="text mb-1 col-4">배달예정시간</span>
                        <span class='col-8'>[시간]</span>
                    </div>

                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">배달 주소</p>
                            <input class="form-control mb-3" type="text" placeholder="주소" />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">카드번호</p>
                            <input class="form-control mb-3" type="text" placeholder="1234 5678 435678" />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">유효기한</p>
                            <input class="form-control mb-3" type="text" placeholder="MM/YYYY" />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">CVV/CVC</p>
                            <input class="form-control mb-3 pt-2 " type="password" placeholder="***" />
                        </div>
                    </div>
                    <div class="col-12 row">
                        <button type="button" class="btn btn-primary mb-3" onClick={() => { navigate('/paymentsuccess') }}>
                            <span class="">결제하기 </span>
                            <span class="fas fa-arrow-right"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;