import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'


function Payment() {
    let navigate = useNavigate();
    let location = useLocation();
    let userInfo = useSelector(state => state.user);
    console.log(userInfo.name);

    let { req_orderDateTime, total_price, cart } = location.state
    let placeOrderInfo = {
        customerAddress: userInfo.address,
        customerName: userInfo.name,
        req_orderDateTime: req_orderDateTime,
        total_price: total_price,
        userId: userInfo.id
    }


    return (
        <div className="container p-0 mt-3">
            <div className="card px-4">
                <p className="h3 py-3 d-flex justify-content-center">주문결제</p>
                <div className="row gx-3">
                    <div className="col-12">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">주문자 이름</p>
                            <input className="usernameinput form-control mb-3" type="text" value={userInfo.address == null ? "Name" : userInfo.name} placeholder='name'/>
                            {/* onChange={(e) => { placeOrderInfo.customerName = e.target.value }} */}
                        </div>
                    </div>

                    <div className="col-12 row mb-3">
                        <span className="text mb-1 col-4">주문 정보</span>
                        <span className='col-8'>
                            {
                                cart.map((a) => {
                                    return (
                                        <div className='mb-2'>
                                            <div>메뉴 : {a.menu_nm}  </div>
                                            <div>메뉴 구성(옵션 적용) : {a.options.map((aa) => { return (<span style={{ paddingRight: '10px' }}>'{aa.option_nm} x {aa.quantity}'</span>) })}  </div>
                                            <div>스타일 : {a.style.style_nm}</div>
                                            <div>스타일 구성 : {a.style.style_config}</div>
                                        </div>
                                    )
                                })
                            }
                        </span>
                    </div>

                    <div className="col-12 row mb-3">
                        <span className="text mb-1 col-4">배달예정시간</span>
                        <span className='col-8'>{req_orderDateTime}</span>
                    </div>

                    <div className="col-12">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">배달 주소</p>
                            <input className="form-control mb-3 addressinput" type="text" defaultValue={userInfo.address == null ? "주소" : userInfo.address} placeholder='address' onChange={(e) => { placeOrderInfo.customerAddress = e.target.value }} />
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
                    <div className='text-center mb-3'>총 주문 금액 : {total_price}</div>
                    <div className="col-12 row">
                        <button type="button" className="btn btn-primary mb-3" onClick={() => {
                            if (document.querySelector('.usernameinput').value == '') {alert('이름을 입력하세요')}
                            else if (document.querySelector('.addressinput').value == '') {alert('주소를 입력하세요')}
                            else {
                                axios.post('/order/place-order', placeOrderInfo).then((res) => { console.log(res.data); })
                                navigate('/paymentsuccess', {
                                    state: { req_orderDateTime: req_orderDateTime }
                                })
                            }
                        }}>
                            <span >결제하기 </span>
                            <span className="fas fa-arrow-right"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;