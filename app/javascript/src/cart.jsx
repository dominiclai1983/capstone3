import React, { useState, useEffect } from 'react';
import { CartState } from '@src/context';
import { Button, Container, Icon, Table, Image } from 'semantic-ui-react';

const Cart = () => {
	const { cart, setCart } = CartState();
	const [total, setTotal] = useState(0);

	useEffect(() => {
		setTotal(cart.reduce((acc, cur) => acc + Number(cur.price), 0));
	}, [cart]);

	const deleteItem = (index) => () =>
		setCart((cart) => cart.filter((_, i) => i !== index));

	return (
		<Container style={{ marginTop: 20 }}>
			<Table>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Product</Table.HeaderCell>
						<Table.HeaderCell />
						<Table.HeaderCell>Price</Table.HeaderCell>
						<Table.HeaderCell>Quantity</Table.HeaderCell>
						<Table.HeaderCell />
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{cart.map((product, index) => (
						<Table.Row key={index}>
							<Table.Cell>
								<Image src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
							</Table.Cell>
							<Table.Cell>{product.title}</Table.Cell>
							<Table.Cell>{product.price}</Table.Cell>
							<Table.Cell>{product.quantity}</Table.Cell>
							<Table.Cell>
								<Button color='red' onClick={deleteItem(index)}>
									Cancel
								</Button>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
			{total.toFixed(2)}
		</Container>
	);
};

export default Cart;
