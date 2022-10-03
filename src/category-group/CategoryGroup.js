import React, { Fragment } from 'react';
import {capitalize} from '../functions';
// COMPONENTS
import ItemRow from '../item-row/ItemRow';

function CategoryGroup({ pantryItems, category }) {

	let filteredItemsList = pantryItems.filter((item) => {
		return item.category === category;
	});

	let itemsList = filteredItemsList.map((item) => {
		return <ItemRow key={item.name} item={item} />
	})


	return (
		<Fragment>
			<tr><th colSpan={3}>{capitalize(category)}</th></tr>
			{itemsList}
		</Fragment>

	);

}

export default CategoryGroup;