import React from 'react';
import GridItem from './GridItem';
import './GridContainer.css';

function GridContainer({ colors }) {
	const box = [];
	for (let i = 0; i < colors.length; i++) {
		box.push(<GridItem colors={colors} />);
	}
	return <div className="grid-container">{box}</div>;
}

export default GridContainer;
