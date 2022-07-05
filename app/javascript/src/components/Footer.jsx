import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

import '@components/compscss/utils.scss';

const Footer = () => {
	return (
		<Grid divided='vertically'>
			<Grid.Row columns={4} className='footer-text-center '>
				<Grid.Column>
					<Image
						src='https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg'
						size='tiny'
					/>
				</Grid.Column>
				<Grid.Column>text</Grid.Column>
				<Grid.Column>text </Grid.Column>
				<Grid.Column>text</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default Footer;
