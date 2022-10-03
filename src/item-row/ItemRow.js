import React from 'react';

function ItemRow({item}) {
	let {name, qty, unit} = item;
	
	return (
		<tr>
			<td className='five wide'>{name}</td>
			<td className='two wide'>-</td>
			<td className='two wide'>{`${qty} ${unit}`}</td>
		</tr>


	);
}


export default ItemRow;