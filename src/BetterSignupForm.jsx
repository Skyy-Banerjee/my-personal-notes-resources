import React from 'react';
import { useState } from 'react';

function BetterSignupForm() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		password: '',
	});

	function handleChange(evt) {
		const newValue = evt.target.value;
		const changedField = evt.target.name;
		setFormData((currData) => ({
			...currData,
			[changedField]: newValue,
		}));
	}

	return (
		<div>
			<label htmlFor="firstName">Enter firstName: </label>
			<input
				name="firstName"
				id="firstName"
				type="text"
				placeholder="firstName.."
				value={formData.firstName}
				onChange={handleChange}
			/>
			<br />
			<label htmlFor="lastName">Enter lastName: </label>
			<input
				name="lastName"
				id="lastName"
				type="text"
				placeholder="lastName.."
				value={formData.lastName}
				onChange={handleChange}
			/>
			<br />
			<label htmlFor="password">Enter password: </label>
			<input
				name="password"
				id="password"
				type="password"
				placeholder="password.."
				value={formData.password}
				onChange={handleChange}
			/>
			<br />
			<button>Submit</button>
		</div>
	);
}

export default BetterSignupForm;
