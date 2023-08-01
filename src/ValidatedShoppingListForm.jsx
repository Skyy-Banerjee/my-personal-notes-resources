import React from 'react';
import { useState } from 'react';

function ValidatedShoppingListForm({ addItem }) {
	const [formData, setFormData] = useState({ product: '', quantity: 0 });
	const [productIsValid, setproductIsValid] = useState(false);
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
    function validate(){
        if(formData.product.length === 0){
            setproductIsValid(false);
        }else{
            setproductIsValid(true);
        }
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

			{!productIsValid && (
				<p style={{ color: 'red' }}><i>Product name cannot be empty!</i></p>
			)}
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

export default ValidatedShoppingListForm;
