import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import { QUERY_USER } from "../utils/queries";

function OrderHistory() {
	const { data } = useQuery(QUERY_USER);
	let user;

	if (data) {
		user = data.user;
	}

	return (
		<>
			<div className='container my-1'>
				<Link to='/'>← Back to Our Style Gallery</Link>

				{user ? (
					<>
						<h2 className='text-center text-primary'>
							<strong>
								Appointments for {user.firstName} {user.lastName}
							</strong>
						</h2>
						{user.orders.map((order) => (
							<div key={order._id} className='my-2'>
								<h4>
									{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
								</h4>
								<div className='flex-row'>
									{order.styles.map(({ _id, image, name, price }, index) => (
										<div
											key={index}
											className='card border-secondary px-1 py-1'>
											<Link to={`/styles/${_id}`}>
												<img alt={name} src={`/images/${image}`} />
												<p>{name}</p>
											</Link>
											<div>
												<span>${price}</span>
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</>
				) : null}
			</div>
		</>
	);
}

export default OrderHistory;
