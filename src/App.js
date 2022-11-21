import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import OrderPage from './views/order/OrderPage';
import MainPage from './views/main/MainPage';
import Header from './components/header/Header';
import MenuDetailPage from './views/menu/MenuDetailPage';
import Login from './views/login/LoginPage';
import Signup from './views/signup/SignUpPage';
import OrderHistory from './views/orderhistory/OrderHistoryPage';
import Payment from './views/payment/PaymentPage';
import PaymentSuccess from './views/payment/PaymentSuccessPage';
import OrderMgtPage from './views/employee/OrderMgtPage';
import StockMgtPage from './views/employee/StockMgtPage';

function App() {
	return (
		<div>
			<Router>
				<Header/>
				<Routes>
					<Route exact path="/" element={<MainPage />} />
					<Route exact path="/order" element={<OrderPage />} />
					<Route exact path="/menu" element={<MenuDetailPage />} />
					<Route exact path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/orderhistory" element={<OrderHistory />} />
					<Route path='/payment' element={<Payment/>}/>
					<Route path='/paymentsuccess' element={<PaymentSuccess/>}/>
					<Route exact path="/employee/order" element={<OrderMgtPage />} />
					<Route exact path="/employee/stock" element={<StockMgtPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
