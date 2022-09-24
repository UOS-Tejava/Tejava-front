import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import OrderPage from './views/order/OrderPage';
import Home from './views/home/Home';
import Header from './components/header/Header';

function App() {
	return (
		<div>
			<Router>
				<Header/>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/order" element={<OrderPage />} />
					{/* <Route exact path="/" element={<Voice />} />
					<Route exact path="/" element={<Voice />} /> */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
