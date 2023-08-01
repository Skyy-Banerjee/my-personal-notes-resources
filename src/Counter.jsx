import React from 'react';
import { useState } from 'react';

function Counter() {
	const [count, setCount] = useState(0);
	// function incrementByThree(){
	//! Doesn't work like this
	//   setCount(count +1)
	//   setCount(count +1)
	//   setCount(count +1)
	// }

	const incrementByThree = () => {
		setCount((c) => c + 3);
	};

	function decrementByThree() {
		setCount((c) => c - 3);
	}
	return (
		<div>
      <div style={{borderRadius:'15px', backgroundColor: 'Green', color:'white'}}>
			<h1>{count}</h1>
      </div>
			<button
				onClick={() => {
					setCount((c) => c + 1);
				}}
			>
				Increment
			</button>
			<button
				onClick={() => {
					setCount(0);
				}}
			>
				Reset
			</button>
			<button
				onClick={() => {
					setCount((c) => c - 1);
				}}
			>
				Decrement
			</button>
			<button onClick={incrementByThree}>Increment by 3</button>
			<button onClick={decrementByThree}>Decrement by 3</button>
		</div>
	);
}

export default Counter;
