import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import OrderPage from './views/order/OrderPage';
import MainPage from './views/main/MainPage';
import Header from './components/header/Header';
import MenuDetailPage from './views/menu/MenuDetailPage';
import Login from './views/testlogin/TestLoginPage';

function App() {
	return (
		<div>
			<Header/>
			<Router>
				<Routes>
					<Route exact path="/" element={<MainPage />} />
					<Route exact path="/order" element={<OrderPage />} />
					<Route exact path="/menu" element={<MenuDetailPage />} />
					<Route exact path="/testlogin" element={<Login />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
