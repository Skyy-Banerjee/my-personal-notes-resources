import React from 'react';
import ShoppingListItem from './ShoppingListItem';
function ShoppingList({ items }) {
	return (
		<div>
			<ul>
				{items.map((i) => (
					<ShoppingListItem key={i.id} {...i} />
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;

{
	/* <li
		key={i.id}
		style={{
		color: i.completed ? 'grey' : 'red',
		textDecoration: i.completed ? 'line-through' : 'none',
		}}
		>
		{i.item} - {i.quantity}
		</li> */
}
