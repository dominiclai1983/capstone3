import React, { useState, useEffect } from 'react';
import {
	CardElement,
	Elements,
	useStripe,
	useElements,
	PaymentElement,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
	const [message, setMessage] = useState(null);
	const stripe = useStripe();
	const elements = useElements();

	useEffect(() => {
		if (!stripe) {
			return;
		}

		const clientSecret = new URLSearchParams(window.location.search).get(
			'payment_intent_client_secret'
		);

		if (!clientSecret) {
			return;
		}

		stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
			switch (paymentIntent.status) {
				case 'succeeded':
					setMessage('Payment succeeded!');
					break;
				case 'processing':
					setMessage('Your payment is processing.');
					break;
				case 'requires_payment_method':
					setMessage('Your payment was not successful, please try again.');
					break;
				default:
					setMessage('Something went wrong.');
					break;
			}
		});
	}, [stripe]);

	console.log(message);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (elements == null || !stripe || !elements) {
			return;
		}

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				// Make sure to change this to your payment completion page
				return_url: 'http://localhost:3000',
			},
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			{/* <CardElement />
			<button type='submit' disabled={!stripe || !elements}>
				Pay
      </button>
      */}
			<PaymentElement />
			<button>Submit</button>
		</form>
	);
};

export default CheckoutForm;
