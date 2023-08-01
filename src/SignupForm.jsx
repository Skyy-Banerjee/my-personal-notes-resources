import React from 'react';
import { useState } from 'react';

function SignupForm() {
	const [firstName, setfirstName] = useState('');
	const [lastName, setlastName] = useState('');
	const updatefirstName = (evt) => {
		setfirstName(evt.target.value);
	};
	const updatelastName = (evt) => {
		setlastName(evt.target.value);
	};
    
	return (
		<div>
			<label htmlFor="firstName">Enter firstName: </label>
			<input
				id="firstName"
				type="text"
				placeholder="firstName.."
				value={firstName}
				onChange={updatefirstName}
			/>
			<br />
			<label htmlFor="lastName">Enter lastName: </label>
			<input
				id="lastName"
				type="text"
				placeholder="lastName.."
				value={lastName}
				onChange={updatelastName}
			/>
			<br />
			<button>Submit</button>
		</div>
	);
}

export default SignupForm;
