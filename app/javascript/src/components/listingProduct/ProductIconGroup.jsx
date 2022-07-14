import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

const ProductIconGroup = () => {
	return (
		<Grid.Row textAlign='center' columns={3}>
			<Grid.Column>
				<Icon name='redo alternate' color='orange' size='small' />
				something
			</Grid.Column>
			<Grid.Column>
				<Icon name='redo alternate' color='orange' size='small' />
				something
			</Grid.Column>
			<Grid.Column>
				<Icon name='redo alternate' color='orange' size='small' />
				something
			</Grid.Column>
		</Grid.Row>
	);
};

export default ProductIconGroup;
