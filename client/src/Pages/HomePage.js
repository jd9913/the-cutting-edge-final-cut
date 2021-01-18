import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import services from "../services";
import Service from "../components/Service";

const HomePage = () => {
	const [appts, setAppts] = useState([]);

	return (
		<div>
			<h1>Services available for purchase</h1>
			<Row>
				{services.map((service) => (
					<Col sm={12} md={6} lg={4}>
						<Service service={service} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default HomePage;
