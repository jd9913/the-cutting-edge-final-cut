import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import { QUERY_ALL_APPTS } from "../utils/queries";

const ApptDetail = () => {
	const { id } = useParams();

	const [currentAppt, setAppt] = useState({});

	const { loading, data } = useQuery(QUERY_ALL_APPTS);

	const appts = data?.appts || [];

	useEffect(() => {
		if (appts.length) {
			setAppt(appts.find((appt) => appt._id === id));
		}
	}, [appts, id]);

	return (
		<div>
			<React.Fragment>
				{currentAppt ? (
					<div>
						<Link to='/'>← Back to appts</Link>

						<h2>{currentAppt.title}</h2>
					</div>
				) : null}
			</React.Fragment>
		</div>
	);
};

export default ApptDetail;
