import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

import '@components/compscss/utils.scss';

const FrontPageGrid = () => {
	return (
		<Grid columns={3} divided>
			<Grid.Row className='top-margin'>
				<Grid.Column>
					<Image src='https://via.placeholder.com/429x164.png' />
				</Grid.Column>
				<Grid.Column>
					<Image src='https://via.placeholder.com/429x164.png' />
				</Grid.Column>
				<Grid.Column>
					<Image src='https://via.placeholder.com/429x164.png' />
				</Grid.Column>
			</Grid.Row>

			<Grid.Row>
				<Grid.Column>
					<Image src='https://via.placeholder.com/429x164.png' />
				</Grid.Column>
				<Grid.Column>
					<Image src='https://via.placeholder.com/429x164.png' />
				</Grid.Column>
				<Grid.Column>
					<Image src='https://via.placeholder.com/429x164.png' />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default FrontPageGrid;
