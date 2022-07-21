import React from 'react';
import ReactDOM from 'react-dom';

const CheckoutIndex = () => {
	return <div>CheckoutIndex</div>;
};

export default CheckoutIndex;

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<CheckoutIndex />,
		document.body.appendChild(document.createElement('div'))
	);
});
