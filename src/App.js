import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import OrderPage from './views/order/OrderPage';
import MainPage from './views/main/MainPage';
import Header from './components/header/Header';

function App() {
	return (
		<div>
			<Header/>
			<Router>
				<Routes>
					<Route exact path="/" element={<MainPage />} />
					<Route exact path="/order" element={<OrderPage />} />
					{/* <Route exact path="/" element={<Voice />} />
					<Route exact path="/" element={<Voice />} /> */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
