import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { QUERY_ALL_APPTS } from "../../utils/queries";
import ApptItem from "../ApptItem";
import { useQuery } from "@apollo/react-hooks";

const Appt = () => {
	const { loading, data } = useQuery(QUERY_ALL_APPTS);

	const allAppts = data?.allAppts || [];

	console.log(allAppts);

	const [appts, setAppts] = useState({});

	useEffect(() => {});

	return (
		<div>
			<h1>Services available for purchase</h1>
			<Row>
				{allAppts.map((appts) => (
					<Col sm={12} md={6} lg={4}>
						<ApptItem
							key={appts._id}
							_id={appts._id}
							title={appts.title}
							desc={appts.description}
							price={appts.price}
							category={appts.category}
							date={appts.date}
							time={appts.time}
						/>
						<p>{appts.title}</p>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Appt;
