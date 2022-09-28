import React, { Fragment } from 'react';
import Item from '../item-row/ItemRow';

import {capitalize} from '../functions';

function CategoryRow({ pantryItems, category }) {

	let filteredItemsList = pantryItems.filter((item) => {
		return item.category === category;
	});

	let itemsList = filteredItemsList.map((item) => {
		return <Item key={item.name} item={item} />
	})


	return (
		<Fragment>
			<tr><th colSpan={3}>{capitalize(category)}</th></tr>
			{itemsList}
		</Fragment>

	);

}

export default CategoryRow;