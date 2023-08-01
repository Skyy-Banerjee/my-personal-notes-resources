
import React from 'react';
import { useState } from 'react';

function ShoppingListForm({ addItem }) {
	const [formData, setFormData] = useState({ product: '', quantity: 0 });
	const handleChange = (e) => {
		setFormData((curr) => {
			return { ...curr, [e.target.name]: e.target.value };
		});
	};
	function handleSubmit(e) {
		e.preventDefault();
		addItem(formData);
		setFormData({ product: '', quantity: 0 });
	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="product">Product Name: </label>
			<input
				value={formData.product}
				type="text"
				name="product"
				placeholder="product name.."
				id="product"
				onChange={handleChange}
			/>
			<label htmlFor="quantity">Quantity: </label>
			<input
				value={formData.quantity}
				type="text"
				name="quantity"
				placeholder="Enter quantity.."
				id="quantity"
				onChange={handleChange}
			/>
			<br />
			<br />
			<button>Add item</button>
		</form>
	);
}

export default ShoppingListForm;
