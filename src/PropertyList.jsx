import React from 'react';
import PropertyListItem from './PropertyListItem';

function PropertyList({ properties }) {
	const styles = {
		listStyle: 'none',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
	};
	return (
		<div>
			<ul style={styles}>
				{properties.map((p) => {
					return <PropertyListItem key={p.id} {...p} />;
				})}
			</ul>
		</div>
	);
}

export default PropertyList;
