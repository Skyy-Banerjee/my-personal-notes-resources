import React from 'react';
import { useState } from 'react';
import ValidatedShoppingListForm from './ValidatedShoppingListForm';
import { v4 as uuid } from 'uuid';

function ShoppingList() {
	const [items, setItems] = useState([
		{ id: uuid(), product: 'Apples', quantity: 6 },
		{ id: uuid(), product: 'Oreos', quantity: 3 },
		{ id: uuid(), product: 'CupCakes', quantity: 7 },
	]);
	function addItem(item) {
		setItems((curr) => {
			return [...curr, { ...item, id: uuid() }];
		});
	}
	return (
		<div>
			<h2>Shopping List</h2>
			<ul>
				{items.map((i) => {
					return (
						<li key={i.id}>
							{i.product} - {i.quantity}
						</li>
					);
				})}
			</ul>
			<ValidatedShoppingListForm addItem={addItem} />
		</div>
	);
}

export default ShoppingList;
