//material UI tutorial
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { SettingsVoice } from '@mui/icons-material';

function RatingDemo() {
    const [score, setScore] = useState(3)
	return (
		<div>
			<h1>Rating Demo. Current Rating: {score}</h1>
			<Rating
				name="simple controlled"
				value={score}
				onChange={(evt, newValue) => {
					setScore(newValue);
				}}
			/>
		</div>
	);
}

export default RatingDemo;
