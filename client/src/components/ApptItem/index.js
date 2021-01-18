import React from "react";
import { Card } from "react-bootstrap";

import { Link } from "react-router-dom";

const ApptItem = (apptDetail) => {
	const { _id, title, description, price, category, date, time } = apptDetail;

	return (
		<div>
			<Link to={_id}>
				<div>Individual Appt Detail</div>
			</Link>
			<Link to={title}>
				<p>
					<img src='/client/public/images/braids.jpg' alt='braids'></img>
				</p>
			</Link>
		</div>
	);
};

export default ApptItem;
