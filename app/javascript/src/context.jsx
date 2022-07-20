import React, { createContext, useContext, useState } from 'react';

const Cart = createContext();

const Context = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [currentOrder, setCurrentOrder] = useState('');
	return (
		<Cart.Provider value={{ cart, setCart, currentOrder, setCurrentOrder }}>
			{children}
		</Cart.Provider>
	);
};

export const CartState = () => {
	return useContext(Cart);
};

export default Context;
