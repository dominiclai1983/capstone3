import React from 'react';
import _ from 'lodash';
import { Grid, Container, Header, Breadcrumb } from 'semantic-ui-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import SortingMenu from '@components/SortingMenu';
import ItemDisplay from '@components/ItemDisplay';

import '@src/css/utils.scss';

const Product = () => {
	const { pathname } = useLocation();

	return (
		<>
			<Container style={{ marginTop: 20 }}>
				<Breadcrumb size='small'>
					<Breadcrumb.Section as={Link} to='/'>
						Home
					</Breadcrumb.Section>
					<Breadcrumb.Divider icon='right chevron' color='orange' />
					<Breadcrumb.Section active>
						{_.startCase(pathname)}
					</Breadcrumb.Section>
				</Breadcrumb>
			</Container>
			<Container style={{ marginTop: 20 }}>
				<Grid>
					<Grid.Row columns={1}>
						<Grid.Column>
							<Container text textAlign='center'>
								<Header as='h2'>{_.startCase(pathname)}</Header>
								<p>The following is our {pathname.substring(1)} section.</p>
							</Container>
						</Grid.Column>
					</Grid.Row>
				</Grid>

				<Grid>
					<Grid.Row columns={1}>
						<Grid.Column text textAlign='right'>
							{/* <SortingMenu /> */}
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
			<Container style={{ marginTop: 20 }}>
				<ItemDisplay />
			</Container>
		</>
	);
};

export default Product;
