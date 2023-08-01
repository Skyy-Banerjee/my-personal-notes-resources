import { func } from 'prop-types';
import React from 'react';

function Clicker() {
	function handleClick() {
		console.log('Clicked the button');
	}
	function handleMouseOver() {
		console.log('Mouse Over on paragraph!');
	}
	return (
		<div>
			<p onMouseOver={handleMouseOver}>Click the button!</p>
			<button onClick={handleClick}>Click me..</button>
		</div>
	);
}

export default Clicker;
