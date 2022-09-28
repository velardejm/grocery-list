import React, { useState } from 'react';
import './pantry.css';
import CategoryGroup from '../category-group/CategoryGroup';
import AddItem from '../add-item/AddItem';
import { getCategories } from '../functions';


function Pantry({ pantryItems, addPantryItem }) {

	let [showModal, setShowModal] = useState(false);

	let categories = getCategories(pantryItems);
	let categoryGroups = categories.map((category) => {
		return <CategoryGroup key={category} pantryItems={pantryItems} category={category} />
	});

	const toggleModal = () => {
		setShowModal(!showModal);
	}

	return (
		<div>
			<div id='modal-container'>
				{showModal ? <AddItem pantryItems={pantryItems} addPantryItem={addPantryItem} /> : null}
			</div>
			<div id='items-table'>
				<table className='ui single line table'>
					<thead>
						<tr>
							<th colSpan={2}>PANTRY ITEMS</th>
							<th id='add-pantry-item'><span><a onClick={toggleModal} href='#'>Add Item <i className="plus circle icon"></i></a></span></th>
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