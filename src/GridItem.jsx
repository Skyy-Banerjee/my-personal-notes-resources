import React from 'react';
import './GridItem.css';
import { useState } from 'react';

function GridItem({ colors }) {
	const randColor = colors[Math.floor(Math.random() * colors.length)];
	const [color, setColor] = useState(randColor);

	function setRandomClr() {
		const idx = Math.floor(Math.random() * colors.length);
		setColor(colors[idx]);
	}

	return (
		<div
			className="grid-item"
			style={{ backgroundColor: color }}
			onClick={setRandomClr}
		></div>
	);
}

export default GridItem;
