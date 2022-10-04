import React, { Fragment } from 'react';
import {capitalize} from '../resources/functions';
// COMPONENTS
import ItemRow from './ItemRow';

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