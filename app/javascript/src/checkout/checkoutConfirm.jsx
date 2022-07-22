import React from 'react';
import { useLocation } from 'react-router-dom';

const CheckoutConfirm = () => {
	const { pathname } = useLocation();
	console.log(pathname);
	return <div>CheckoutConfirm</div>;
};

export default CheckoutConfirm;
