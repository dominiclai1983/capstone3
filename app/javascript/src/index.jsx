// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import Home from './home';
import Login from './login';
import Signup from './signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Index = () => (
	<>
		<Layout>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
				</Routes>
			</BrowserRouter>
		</Layout>
	</>
);

export default Index;

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Index />,
		document.body.appendChild(document.createElement('div'))
	);
});
