import React from 'react';
import { useState } from 'react';
function generateInitailState() {
	console.log('Making the initial game board');
	return Array(5000);
}
function Dumbo() {
	//! call the function, generateInitailState, instead of running it- generateInitailState() to achieve better performance
	const [board, setBoard] = useState(generateInitailState);
	return (
		<div>
			<h1>State Demo</h1>
			<button
				onClick={() => {
					setBoard('Hello');
				}}
			>
				Click me to change state!
			</button>
		</div>
	);
}

export default Dumbo;
