import React from 'react';
import { useState } from 'react';
//! ScoreKeeper Component

function ObjectsInState() {
	const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });
	function increaseP1Score() {
		setScores((oldScores) => ({
			...oldScores,
			p1Score: oldScores.p1Score + 1,
		}));
	}

	function increaseP2Score() {
		setScores((oldScores) => ({
			...oldScores,
			p2Score: oldScores.p2Score + 1,
		}));
	}
	function resetScores() {
		setScores({ ...scores, p1Score: 0, p2Score: 0 });
	}

	return (
		<div>
			<h1>
				<i>Objects in STATE demo..</i>
			</h1>
			<p>Player 1: {scores.p1Score}</p>
			<p>Player 2: {scores.p2Score}</p>
			<button onClick={increaseP1Score}>+1 Player 1</button>
			<button onClick={increaseP2Score}>+1 Player 2</button>
			<button onClick={resetScores}>Reset Scores</button>
		</div>
	);
}

export default ObjectsInState;
