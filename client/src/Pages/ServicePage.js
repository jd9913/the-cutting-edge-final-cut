import React from "react";
import { Link } from "react-router-dom";

const ServicePage = (apptDetail) => {
	const { _id, title, description, price, category, date, time } = apptDetail;

	return (
		<div>
			<Link to={_id}>
				<div>Individual Appt Detail</div>
			</Link>
			<Link to={title}>
				{title}, {description}, {price}, {category}, {date}, {time}
			</Link>
		</div>
	);
};

export default ServicePage;
