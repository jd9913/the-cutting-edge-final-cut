import gql from "graphql-tag";

export const QUERY_ALL_APPTS = gql`
	{
		appt {
			_id
			title
			description
			category
			date
			time
			price
		}
	}
`;
