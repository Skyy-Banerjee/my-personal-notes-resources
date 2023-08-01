import React from 'react';
import PropTypes from 'prop-types';

function PropertyListItem({ name, rating, price }) {
	return (
		<li>
			<h2>{name}</h2>
			<h3>${price} a night</h3>
			<h4>{rating}⭐️</h4>
		</li>
	);
}

PropertyListItem.propTypes = {
	name: PropTypes.string,
	rating: PropTypes.number,
	price: PropTypes.number,
};

export default PropertyListItem;
