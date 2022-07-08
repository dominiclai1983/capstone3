import React from 'react';
import { Grid, Container, Header, Breadcrumb } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SortingMenu from '@components/SortingMenu';
import ImportDisplay from '@components/ItemDisplay';

import '@src/css/utils.scss';

const Bracelet = () => {
	return (
		<>
			<Container style={{ marginTop: 20 }}>
				<Breadcrumb size='small'>
					<Breadcrumb.Section as={Link} to='/'>
						Home
					</Breadcrumb.Section>
					<Breadcrumb.Divider icon='right chevron' color='orange' />
					<Breadcrumb.Section active>Bracelet</Breadcrumb.Section>
				</Breadcrumb>
			</Container>
			<Container style={{ marginTop: 20 }}>
				<Grid>
					<Grid.Row columns={1}>
						<Grid.Column>
							<Container text textAlign='center'>
								<Header as='h2'>Bracelet</Header>
								<p>The following is our bracelet section.</p>
							</Container>
						</Grid.Column>
					</Grid.Row>
				</Grid>

				<Grid>
					<Grid.Row columns={1}>
						<Grid.Column text textAlign='right'>
							<SortingMenu />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
			<Container style={{ marginTop: 20 }}>
				<ImportDisplay />
			</Container>
		</>
	);
};

export default Bracelet;
