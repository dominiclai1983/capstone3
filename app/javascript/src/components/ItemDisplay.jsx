import _ from 'lodash';
import React, { useState } from 'react';
import { Card, Image } from 'semantic-ui-react';

const src = 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg';

const itemDisplay = () => {
	const [price, setPrice] = useState(12);

	const items = _.times(8, (i) => {
		return (
			<Card key={i}>
				<Image src={src} />
				<Card.Content>
					<Card.Header>Product Product</Card.Header>
					<Card.Description textAlign='right'>Price</Card.Description>
				</Card.Content>
			</Card>
		);
	});

	return <Card.Group itemsPerRow={3}>{items}</Card.Group>;
};

export default itemDisplay;
