import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CheckoutForm from '@components/checkout/CheckoutForm';
import { Container } from 'semantic-ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutState } from './checkoutContext';

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

const CheckoutConfirm = () => {
	const { currentOrder } = CheckoutState();
	const [clientSecret, setClientSecret] = useState('');

	console.log(currentOrder);
	console.log(parseInt(currentOrder));

	useEffect(() => {
		axios.post(`/api/charges?id=${currentOrder}`).then((res) => {
			if (res.data) {
				let location = res.data.client_secret.indexOf('secret_');
				let string = res.data.client_secret.substring(location + 7);
				setClientSecret(string);
			}
		});
	}, []);

	console.log(clientSecret);

	const options = {
		clientSecret,
	};

	return (
		<>
			<Elements stripe={stripePromise} options={options}>
				<CheckoutForm />
			</Elements>
		</>
	);
};

export default CheckoutConfirm;
