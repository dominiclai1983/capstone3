// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Context from './context';
import NewLayout from './newlayout';
import Home from './home';
import Login from './login';
import Signup from './signup';
import Product from './product';
import ListingProduct from './listingProduct';
import Cart from './cart';
import AccountLayout from './account/accountLayout';
import AccountHome from './account/accountHome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Index = () => (
	<>
		<Context>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<NewLayout />}>
						<Route index element={<Home />} />
						<Route path='login' element={<Login />} />
						<Route path='signup' element={<Signup />} />
						<Route path='bracelet' element={<Product />} />
						<Route path='earrings' element={<Product />} />
						<Route path='product/:sku' element={<ListingProduct />} />
						<Route path='cart' element={<Cart />} />
						<Route path='account' element={<AccountLayout />}>
							<Route index element={<AccountHome />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</Context>
	</>
);

export default Index;

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Index />,
		document.body.appendChild(document.createElement('div'))
	);
});
