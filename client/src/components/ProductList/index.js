import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import ProductItem from "../ProductItem";

function ProductList() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	const { currentCategory } = state;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	function filterProducts() {
		if (!currentCategory) {
			return state.products;
		}

		return state.products.filter(
			(product) => product.category._id === currentCategory
		);
	}

	return (
		<div className='my-2'>
			<h3 className='bg-secondary text-light '>
				<strong>Choose Your Style:</strong>
			</h3>
			{state.products.length ? (
				<div className='flex-row'>
					{filterProducts().map((product) => (
						<ProductItem
							key={product._id}
							_id={product._id}
							image={product.image}
							name={product.name}
							price={product.price}
							quantity={product.quantity}
						/>
					))}
				</div>
			) : (
				<h3>You haven't added any styles yet!</h3>
			)}
		</div>
	);
}

export default ProductList;
