import React, { useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import axios from 'axios';
import { Step, Container } from 'semantic-ui-react';

const CheckoutLayout = () => {
	const { pathname } = useLocation();
	const path = pathname === '/checkout' ? 'home' : pathname.substring(10);

	const [activeItem, setActiveItem] = useState(path);

	return (
		<>
			<Container style={{ marginTop: 20 }}>
				<Step.Group widths={3}>
					<Step>
						<Step.Content>
							<Step.Title>Shipping</Step.Title>
							<Step.Description>Choose your shipping options</Step.Description>
						</Step.Content>
					</Step>

					<Step active>
						<Step.Content>
							<Step.Title>Confirm</Step.Title>
							<Step.Description>Enter billing information</Step.Description>
						</Step.Content>
					</Step>

					<Step disabled>
						<Step.Content>
							<Step.Title>Confirm Order</Step.Title>
						</Step.Content>
					</Step>
				</Step.Group>
			</Container>
			<Outlet context={[activeItem, setActiveItem]} />
		</>
	);
};

export default CheckoutLayout;
