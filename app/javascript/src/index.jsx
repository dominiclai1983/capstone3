// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import Home from './home';
import Login from './login';
import Signup from './signup';
import Bracelet from './bracelet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Index = () => (
	<>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='signup' element={<Signup />} />
					{/* <Route path='/bracelet' element={<Bracelet />} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	</>
);

export default Index;

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Index />,
		document.body.appendChild(document.createElement('div'))
	);
});
