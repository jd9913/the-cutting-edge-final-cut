import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	const { image, name, _id, price, quantity } = item;

	const { cart } = state;

	const addToCart = () => {
		// find the cart item with the matching id
		const itemInCart = cart.find((cartItem) => cartItem._id === _id);

		// if there was a match, call UPDATE with a new purchase quantity
		if (itemInCart) {
			dispatch({
				type: UPDATE_CART_QUANTITY,
				_id: _id,
				purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
			});
			idbPromise("cart", "put", {
				...itemInCart,
				purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
			});
		} else {
			dispatch({
				type: ADD_TO_CART,
				product: { ...item, purchaseQuantity: 1 },
			});
			idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
		}
	};

	return (
		<Card className='card border-warning  mb-3 ml-1'>
			<Link to={`/products/${_id}`}>
				<img className='style-image' alt={name} src={`/images/${image}`} />
				<Card.Header>{name}</Card.Header>
			</Link>
			<Card.Body>
				<Card.Text>
					Style is avaliable<br/>
					<span>${price}</span>
				</Card.Text>

				<button onClick={addToCart}>Add to cart</button>
			</Card.Body>
		</Card>
	);
}

export default ProductItem;
