import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const SortingMenu = () => {
	//let { onSortingByPriceAsce, onSortingByPriceDesc, onSortingBySell } = props;

	return (
		<Dropdown text='Sort'>
			<Dropdown.Menu>
				<Dropdown.Item text='Best Selling' />
				<Dropdown.Item text='Price, low to high' />
				<Dropdown.Item text='Price, high to low' />
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default SortingMenu;
