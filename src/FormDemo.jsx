//material UI tutorial
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

function FormDemo() {
	const [name, setName] = useState('');
	const [volume, setVolume] = useState(40);
	function updateName(e) {
		setName(e.target.value);
	}
	function changeVolume(e, newVal) {
		setVolume(newVal);
	}
	return (
		<Box sx={{border: '1px solid blue', p:6, width: 200, height:200, margin:'0 auto'}}>
			<h3>
				userName is: <i>{name}</i>
			</h3>
			<TextField
				id="outlined-basic"
				placeholder="enter username here!.."
				label="username"
				variant="outlined"
				value={name}
				onChange={updateName}
			/>
			<h3>Volume: {volume}</h3>
			<Slider aria-label="Volume" value={volume} onChange={changeVolume} />
		</Box>
	);
}

export default FormDemo;
