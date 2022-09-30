import React, { useState } from 'react';
import './pantry.css';
import CategoryGroup from '../category-group/CategoryGroup';
import Modal from '../modal/Modal';
import AddItem from '../add-item/AddItem';

import AddItemRefactored from '../add-item-refactored/AddItemRefactored';

import { getCategories } from '../functions';


function Pantry({ pantryItems, addPantryItem }) {

	let [show, setShow] = useState(false);

	let categories = getCategories(pantryItems);
	let categoryGroups = categories.map((category) => {
		return <CategoryGroup key={category} pantryItems={pantryItems} category={category} />
	});

	return (
		<div>

			<AddItemRefactored pantryItems={pantryItems} addPantryItem={addPantryItem} />

			<hr></hr>
			<hr></hr>
			<hr></hr>

			<div className="App">
				<Modal title="My Modal" onClose={() => setShow(false)} show={show}>
					{/* <AddItem pantryItems={pantryItems} addPantryItem={addPantryItem} /> */}
					<AddItemRefactored pantryItems={pantryItems} addPantryItem={addPantryItem} />
				</Modal>
			</div>

			<div id='items-table'>
				<table className='ui single line table'>
					<thead>
						<tr>
							<th colSpan={2}>PANTRY ITEMS</th>
							<th id='add-pantry-item'>
								<span>
									<a onClick={() => setShow(true)} href='#'>Add Item <i className="plus circle icon"></i></a>
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