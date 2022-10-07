import React, { useState } from 'react';
import './Pantry.css';
import { getCategories } from '../resources/functions';
import CategoryGroup from './CategoryGroup';
import Modal from '../shared/Modal';
import AddItem from './AddItem';



function Pantry({ pantryItems, addPantryItem }) {

	let [showAddItem, setShowAddItem] = useState(false);

	let categories = getCategories(pantryItems);
	let categoryGroups = categories.map((category) => {
		return <CategoryGroup key={category} pantryItems={pantryItems} category={category} />
	});

	return (
		<div>
			<div className="App">
				<Modal title="My Modal" onClose={() => setShowAddItem(false)} show={showAddItem}>
					<AddItem pantryItems={pantryItems} addPantryItem={addPantryItem} />
				</Modal>
			</div>

			<div id='items-table'>
				<table className='ui single line table'>
					<thead>
						<tr>
							<th colSpan={2}>PANTRY ITEMS</th>
							<th id='add-pantry-item'>
								<span>
									<a onClick={() => setShowAddItem(true)} href='#'>Add Item <i className="plus circle icon"></i></a>
								</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{categoryGroups}
					</tbody>
				</table>
			</div>
		</div>
	);

}

export default Pantry;