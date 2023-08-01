import React from 'react';

function ClickerEx(props) {
	function handleClick() {
		alert(props.msg);
	}
	return (
		<div>
			<button onClick={handleClick}>{props.btnTxt}</button>
		</div>
	);
}

export default ClickerEx;
