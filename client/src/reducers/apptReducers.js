import {
	APPT_LIST_FAIL,
	APPT_LIST_SUCCESS,
	APPT_LIST_REQUEST,
} from "../constants/apptConstants";

export const apptListReducer = (state = { appts: [] }, action) => {
	switch (action.type) {
		case APPT_LIST_REQUEST:
			return { loading: true, appts: [] };
		case APPT_LIST_SUCCESS:
			return { loading: false, appts: action.payload };
		case APPT_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
