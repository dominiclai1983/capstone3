import React from 'react';
import {
	Grid,
	Image,
	Header,
	Divider,
	Button,
	Container,
	Icon,
	Label,
} from 'semantic-ui-react';
import { CartState } from '@src/context';
import ProductIconGroup from '@components/listingProduct/ProductIconGroup';
import axios from 'axios';

const ProductLayOut = (props) => {
	let { title, price, description, product_id } = props;
	const { cart, setCart, currentOrder, setCurrentOrder } = CartState();
	console.log(`productID ${product_id}`);

	const getOrderNumber = async () => {
		try {
			const result = await axios.post(`/api/orders`);
			if (result.data) {
				setCurrentOrder(result.data.order_id);
				console.log(currentOrder);
			}
		} catch (err) {
			console.error(err);
		}
	};

	const getItemIntoCart = async (currentOrder) => {
		if (!currentOrder) {
			getOrderNumber();
		}

		const prod = {
			order_id: parseInt(currentOrder),
			product_id: product_id,
			price: parseFloat(price),
			quantity: 1,
		};

		try {
			const result = await axios.post(`/api/order_details`, prod);
			if (result.data) {
				console.log(result.data.order_detail);
				setCart([...cart, result.data.order_detail]);
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<Grid>
			<Grid.Row>
				<Grid.Column width={9}>
					<Image src='https://via.placeholder.com/860x700.png' />
				</Grid.Column>
				<Grid.Column width={6} style={{ marginTop: 40 }}>
					<Header as='h3'>{title}</Header>
					<Header as='h4'>{price}</Header>
					<Divider style={{ marginBottom: 20 }} />
					<Button
						fluid
						primary
						onClick={() => {
							getItemIntoCart(currentOrder);
						}}
					>
						Add To Cart
					</Button>
					<Button fluid style={{ marginTop: 10, marginButton: 20 }}>
						Buy it now
					</Button>
					<Divider />
					<ProductIconGroup />
					<Divider />
					<Container>
						<p>{description}</p>
					</Container>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default ProductLayOut;
