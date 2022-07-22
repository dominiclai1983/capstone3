import React from 'react';
import ReactDOM from 'react-dom';
import CheckoutAddress from './checkoutAddress';
import CheckoutConfirm from './checkoutConfirm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const CheckoutIndex = () => (
	<>
		<BrowserRouter>
			<Routes>
				<Route path='checkout' element={<CheckoutAddress />}>
					<Route index element={<CheckoutAddress />} />
					<Route path='confirm' element={<CheckoutConfirm />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</>
);
//TODO:write the layout of the checkout page
export default CheckoutIndex;

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<CheckoutIndex />,
		document.body.appendChild(document.createElement('div'))
	);
});
