import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import ApptList from "../components/ApptList";

import { QUERY_ALL_APPTS } from "../utils/queries";

const ApptDetail = () => {
	// const { id } = useParams();

	// const [currentAppt, setAppt] = useState({});

	const { loading, data } = useQuery(QUERY_ALL_APPTS);

	console.log(data);

	//data is being populated from the query.  Not sure why it's not displaying below.  This page needs refactored.

	return (
		<div>
			<div>
				<Link to='/'>← Back to appts</Link>
			</div>
			<h2>Product detail Here</h2>
			<h1>THIS IS WORKING!!!</h1>
			<ApptList />
			{/* <p>{data.title}</p> */}
			{/* <p>{data.description}</p> */}
		</div>
	);
};

export default ApptDetail;
