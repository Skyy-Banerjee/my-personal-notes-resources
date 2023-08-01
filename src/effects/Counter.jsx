import React from 'react';
import { useState, useEffect } from 'react';

function Counter() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');
	useEffect(function myEffect() {
		console.log('my effect was called!');
	}, []);
	function increment() {
		setCount((prevCount) => prevCount + 1);
	}
	function handleChange(e) {
		setName(e.target.value);
	}
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increment}>+1</button>
			<p>Name: {name}</p>
			<input type="text" value={name} onChange={handleChange} />
		</div>
	);
}

export default Counter;
