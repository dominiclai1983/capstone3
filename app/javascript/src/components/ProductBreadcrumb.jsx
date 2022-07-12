import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const ProductBreadcrumb = (props) => {
	let { desc, title } = props;

	return (
		<>
			<Breadcrumb size='small' style={{ marginLeft: 80 }}>
				<Breadcrumb.Section as={NavLink} to='/'>
					Home
				</Breadcrumb.Section>
				<Breadcrumb.Divider icon='right chevron' color='orange' />
				<Breadcrumb.Section as={NavLink} to='/bracelet'>
					{desc}
				</Breadcrumb.Section>
				<Breadcrumb.Divider icon='right chevron' color='orange' />
				<Breadcrumb.Section>{title}</Breadcrumb.Section>
			</Breadcrumb>
		</>
	);
};

export default ProductBreadcrumb;
