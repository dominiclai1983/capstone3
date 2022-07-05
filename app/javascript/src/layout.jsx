import React, { useState } from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';

function Layout(props) {
	const [activeItem, setActiveItem] = useState('editorials');

	const handleItemClick = (e, { name }) => setActiveItem(name);
	const [isLogin, setIsLogin] = useState(true);
	const [username, setUsername] = useState('user');

	//remember the prop component has to be capital
	const LoginComponent = () => {
		return (
			<>
				<Menu.Item
					name='signup'
					active={activeItem === 'signup'}
					onClick={handleItemClick}
				>
					SignUp
				</Menu.Item>
				<Menu.Item
					name='login'
					active={activeItem === 'login'}
					onClick={handleItemClick}
				>
					Login
				</Menu.Item>
			</>
		);
	};

	const LogoutComponent = () => {
		//TODO: findout how to do conditionally for dropdown text
		return (
			<Dropdown item text='Welcome'>
				<Dropdown.Menu>
					<Dropdown.Item>English</Dropdown.Item>
					<Dropdown.Item>Russian</Dropdown.Item>
					<Dropdown.Item>Spanish</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};

	return (
		<>
			<Menu secondary>
				<Menu.Item>
					<Image
						src='https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg'
						size='tiny'
					/>
				</Menu.Item>

				<Menu.Item
					name='home'
					active={activeItem === 'home'}
					onClick={handleItemClick}
				>
					Home
				</Menu.Item>

				<Menu.Item
					name='reviews'
					active={activeItem === 'reviews'}
					onClick={handleItemClick}
				>
					Reviews
				</Menu.Item>

				<Menu.Item
					name='upcomingEvents'
					active={activeItem === 'upcomingEvents'}
					onClick={handleItemClick}
				>
					Upcoming Events
				</Menu.Item>
				<Menu.Menu position='right'>
					{isLogin ? (
						<LogoutComponent username={username} />
					) : (
						<LoginComponent />
					)}
				</Menu.Menu>
			</Menu>
			{props.children}
		</>
	);
}

export default Layout;
