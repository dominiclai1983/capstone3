import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';

const ProductBreadcrumb = (props) => {
	let { desc, title } = props;

	return (
		<>
			<Breadcrumb size='small' style={{ marginLeft: 80 }}>
				<Breadcrumb.Section>Home</Breadcrumb.Section>
				<Breadcrumb.Divider icon='right chevron' color='orange' />
				<Breadcrumb.Section active>{desc}</Breadcrumb.Section>
				<Breadcrumb.Divider icon='right chevron' color='orange' />
				<Breadcrumb.Section active>{title}</Breadcrumb.Section>
			</Breadcrumb>
		</>
	);
};

export default ProductBreadcrumb;
