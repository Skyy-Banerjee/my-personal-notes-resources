import React, { useState } from 'react';
function ScoreKeeperEx({ numPlayers = 3, target = 5 }) {
	const [scores, setScores] = useState(new Array(numPlayers).fill(0));

	const incrementScore = (idx) => {
		setScores((prevScores) => {
			return prevScores.map((score, i) => {
				if (i === idx) return score + 1;
				return score;
			});
		});
	};

	function reset() {
		setScores(new Array(numPlayers).fill(0));
	}

	return (
		<div>
			<h1>
				<i>-*-*-* Score Keeper *-*-*-</i>
			</h1>
			<ul>
				{scores.map((score, idx) => {
					return (
						<li key={idx}>
							Player{idx + 1}: {score}
							<button onClick={() => incrementScore(idx)}>+1</button>
							{score >= target && 'WINNER.. Yaaayy!'}
						</li>
					);
				})}
			</ul>
			<button onClick={reset}>RESET</button>
		</div>
	);
}

export default ScoreKeeperEx;
