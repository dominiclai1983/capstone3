import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CartState } from '@src/context';
import { Outlet } from 'react-router-dom';
import { Container, Header, Grid, Image, Menu } from 'semantic-ui-react';

import '@src/css/utils.scss';

const AccountLayout = () => {
	const { setUsername } = CartState();
	const [activeItem, setActiveItem] = useState('editorials');

	const handleItemClick = (e, { name }) => setActiveItem(name);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios.get('/api/authenticated');
				setUsername(result.data.username);
			} catch (err) {
				console.error(err);
			}
		};
		fetchData();
	}, []);

	const AccountMenu = () => {
		return (
			<Menu secondary vertical>
				<Menu.Item
					name='account'
					active={activeItem === 'account'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='settings'
					active={activeItem === 'settings'}
					onClick={handleItemClick}
				/>
			</Menu>
		);
	};

	return (
		<>
			<Container style={{ margin: 0 }}>
				<Grid>
					<Grid.Row>
						<Grid.Column width={3}>
							<AccountMenu />
						</Grid.Column>
						<Grid.Column width={13}>
							<Image src='https://via.placeholder.com/728x90.png' />
							<Header as='h1'>Your Account</Header>
							<Outlet />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</>
	);
};

export default AccountLayout;
