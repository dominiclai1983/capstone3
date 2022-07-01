import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';

export default class Layout extends Component {
	state = { activeItem: 'editorials' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

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
						name='editorials'
						active={activeItem === 'editorials'}
						onClick={this.handleItemClick}
					>
						Editorials
					</Menu.Item>

					<Menu.Item
						name='reviews'
						active={activeItem === 'reviews'}
						onClick={this.handleItemClick}
					>
						Reviews
					</Menu.Item>

					<Menu.Item
						name='upcomingEvents'
						active={activeItem === 'upcomingEvents'}
						onClick={this.handleItemClick}
					>
						Upcoming Events
					</Menu.Item>

					<Menu.Menu position='right'>
						<Menu.Item
							name='signup'
							active={activeItem === 'signup'}
							onClick={this.handleItemClick}
						>
							SignUp
						</Menu.Item>

						<Menu.Item
							name='login'
							active={activeItem === 'login'}
							onClick={this.handleItemClick}
						>
							Login
						</Menu.Item>
					</Menu.Menu>
				</Menu>
				{props.children}
			</>
		);
	}
}
