import React from 'react';
import { Button, Form, Header, Icon } from 'semantic-ui-react';

const ShippingAddress = () => {
	return (
		<>
			<Header as='h2'>
				<Icon name='address book' />
				<Header.Content>Shipping Address</Header.Content>
			</Header>
			<Form>
				<Form.Group unstackable widths={2}>
					<Form.Input label='First name' placeholder='First name' />
					<Form.Input label='Last name' placeholder='Last name' />
				</Form.Group>
				<Form.Group unstackable widths={2}>
					<Form.Input label='Address 1' placeholder='Address 1' />
					<Form.Input label='Address 2' placeholder='Address 2' />
				</Form.Group>
				<Form.Group unstackable widths={2}>
					<Form.Input label='Phone' placeholder='' />
				</Form.Group>
				<Form.Group unstackable widths={2}>
					<Form.Field label='Region' control='select'>
						<option value='HK'>Hong Kong</option>
						<option value='KL'>Kowloon</option>
						<option value='NT'>New Territories</option>
					</Form.Field>
					<Form.Field label='An HTML <select>' control='select'>
						<option value='male'>Male</option>
						<option value='female'>Female</option>
					</Form.Field>
				</Form.Group>
				<Button type='submit'>Submit</Button>
			</Form>
		</>
	);
};

export default ShippingAddress;
