import React from 'react';
import {
	Grid,
	Image,
	Header,
	Divider,
	Button,
	Container,
	Icon,
} from 'semantic-ui-react';
import { CartState } from '@src/context';
//import ProductIconGroup from '@components/listingProduct/ProductIconGroup';

const ProductLayOut = (props) => {
	let { title, price, description } = props;
	const { cart, setCart } = CartState();

	const prod = {
		title,
		price,
		quantity: 1,
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
					<Divider />
					<Button
						fluid
						primary
						onClick={() => {
							setCart([...cart, prod]);
							console.log(cart);
						}}
					>
						Add To Cart
					</Button>
					<Button fluid style={{ marginTop: 5 }}>
						Buy it now
					</Button>
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
