import React from "react";
import { Card } from "react-bootstrap";

import { Link } from "react-router-dom";

const ApptItem = (apptDetail) => {
	const { _id, title, description, price, category, date, time } = apptDetail;

	console.log(apptDetail);

	return (
		<div>
			<Link to={_id}>
				<div>Individual Appt Detail</div>
			</Link>
			<Link to={title}>
				<p>
					<h1>THIS IS WORKING!!!!</h1>
					<img src='/client/public/images/braids.jpg' alt='braids'></img>
				</p>
			</Link>
		</div>
	);
};

export default ApptItem;
