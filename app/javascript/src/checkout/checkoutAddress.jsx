import React from 'react';
import { useLocation } from 'react-router-dom';

const CheckoutAddress = () => {
	const { pathname } = useLocation();
	console.log(pathname);
	return <div>CheckoutAddress</div>;
};

export default CheckoutAddress;
