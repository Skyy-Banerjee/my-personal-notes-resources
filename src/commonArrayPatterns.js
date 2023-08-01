//todo: V.V. Important
//todo: Can read the official docs too - https://react.dev/learn/updating-arrays-in-state
//todo: COMMON PATTERNS FOR UPDATING ARRAYS IN STATE
const shoppingCart = [
	{ id: 1, product: 'HDMI Cable', price: 4 },
	{ id: 2, product: 'Easy Bake Oven', price: 23 },
	{ id: 3, product: 'Peach Pie', price: 6.7 },
];

//! Adding to an array[]
[...shoppingCart, { id: 4, product: 'Coffee Mug', price: 7.99 }];

//! Removing an element
shoppingCart.filter((item) => item.id !== 2);

//! Updating all elements in an array[]
shoppingCart.map((item) => {
	return {
		...item,
		product: item.product.toLowerCase(),
	};
});

//! Modifying a particular element in an array[]
shoppingCart.map((item) => {
	if (item.id === 3) {
		return { ...item, PRICE: 10.99 };
	} else {
		return item;
	}
});
