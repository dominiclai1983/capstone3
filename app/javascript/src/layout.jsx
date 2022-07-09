import React, { useState, useEffect } from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { NavLink, Outlet } from 'react-router-dom';
import axios from 'axios';

function Layout(props) {
	const [activeItem, setActiveItem] = useState('home');
	const [isLogin, setIsLogin] = useState(false);
	const [username, setUsername] = useState('user');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios.get('/api/authenticated');
				setIsLogin(result.data.authenticated);
				setUsername(result.data.username);
			} catch (err) {
				console.error(err);
			}
		};
		fetchData();
	}, []);

	const handleItemClick = (e, { name }) => setActiveItem(name);

	const handleLogOut = async () => {
		try {
			const result = await axios.delete('/api/sessions');
			if (result.data) {
				window.location.reload();
			}
		} catch (err) {
			console.error(err);
		}
	};

	//remember the prop component has to be capital
	const LoginComponent = () => {
		return (
			<>
				<Menu.Item
					as={NavLink}
					to='/signup'
					name='signup'
					active={activeItem === 'signup'}
					onClick={handleItemClick}
				>
					SignUp
				</Menu.Item>
				<Menu.Item
					as={NavLink}
					to='/login'
					name='login'
					active={activeItem === 'login'}
					onClick={handleItemClick}
					style={{ marginRight: 20 }}
				>
					Login
				</Menu.Item>
			</>
		);
	};

	const LogoutComponent = (props) => {
		let { username } = props;
		return (
			<>
				<Dropdown item text={'Welcome! ' + username.toString()}>
					<Dropdown.Menu>
						<Dropdown.Item>Account</Dropdown.Item>
						<Dropdown.Item>Order</Dropdown.Item>
						<Dropdown.Item>Payment</Dropdown.Item>
						<Dropdown.Item onClick={handleLogOut}>Logout</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Menu.Item> </Menu.Item>
			</>
		);
	};

	return (
		<>
			<Menu secondary>
				<Menu.Item style={{ marginLeft: 20 }}>
					<Image
						src='https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg'
						size='tiny'
					/>
				</Menu.Item>

				<Menu.Item
					as={NavLink}
					to='/'
					name='home'
					active={activeItem === 'home'}
					onClick={handleItemClick}
				>
					Home
				</Menu.Item>

				<Menu.Item
					as={NavLink}
					to='/bracelet'
					name='bracelet'
					active={activeItem === 'bracelet'}
					onClick={handleItemClick}
				>
					Bracelet
				</Menu.Item>

				<Menu.Item
					name='earrings'
					active={activeItem === 'earrings'}
					onClick={handleItemClick}
				>
					Earrings
				</Menu.Item>
				<Menu.Menu position='right'>
					{isLogin ? (
						<LogoutComponent username={username} />
					) : (
						<LoginComponent />
					)}
				</Menu.Menu>
			</Menu>
			<Outlet />
		</>
	);
}

export default Layout;
