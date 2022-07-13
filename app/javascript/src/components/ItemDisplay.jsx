import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const src = 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg';

const ItemDisplay = () => {
	const { pathname } = useLocation();
	const path = pathname.substring(1);
	const [code, setCode] = useState('');
	const [productCodeID, setProductCodeID] = useState('');
	const [products, setProducts] = useState([]);

	console.log(path);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios.get(`/api/product_codes/${path}`);
				let { ...productCode } = result.data.product_code;
				setProductCodeID(productCode.product_code_id);
				setCode(productCode.code);
			} catch (err) {
				console.error(err);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios.get(`/api/products/${productCodeID}/cat`);
				setProducts(result.data.products);
			} catch (err) {
				console.error(err);
			}
		};
		fetchData();
	}, [code]);

	const items = products.map((product, index) => {
		return (
			<Card key={index}>
				<Image src={src} />
				<Card.Content>
					<Card.Header>{product.title}</Card.Header>
					<Card.Description textAlign='right'>
						${product.price}
					</Card.Description>
				</Card.Content>
			</Card>
		);
	});

	return <Card.Group itemsPerRow={3}>{items}</Card.Group>;
};

export default ItemDisplay;
