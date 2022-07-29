import React, { createContext, useContext, useState, useEffect } from 'react';

const Cart = createContext();

const Context = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [shippingAddress, setShippingAddress] = useState({});
	const [billingAddress, setBillingAddress] = useState({});
	const [currentOrder, setCurrentOrder] = useState('');
	const [username, setUsername] = useState('');

	return (
		<Cart.Provider
			value={{
				cart,
				setCart,
				currentOrder,
				setCurrentOrder,
				shippingAddress,
				setShippingAddress,
				billingAddress,
				setBillingAddress,
				username,
				setUsername,
			}}
		>
			{children}
		</Cart.Provider>
	);
};

export const CartState = () => {
	return useContext(Cart);
};

export default Context;
