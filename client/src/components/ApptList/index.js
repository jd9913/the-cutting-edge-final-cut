import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { QUERY_ALL_APPTS } from "../../utils/queries";
import ApptItem from "../ApptItem";
import { useQuery } from "@apollo/react-hooks";

const Appt = () => {
	const { loading, data } = useQuery(QUERY_ALL_APPTS);

	const allAppts = data?.allAppts || [];

	console.log(data);

	const [appts, setAppts] = useState({});

	useEffect(() => {});

	return (
		<div>
			<h1>Services available for purchase</h1>
			<Row>
				{allAppts.map((d) => (
					<Col sm={12} md={6} lg={4}>
						<ApptItem
							key={d._id}
							_id={d._id}
							title={d.title}
							desc={d.description}
							price={d.price}
							category={d.category}
							date={d.date}
							time={d.time}
						/>

						<p>{d.title}</p>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Appt;
