import {
	APPT_LIST_FAIL,
	APPT_LIST_SUCCESS,
	APPT_LIST_REQUEST,
} from "../constants/apptConstants";

export const listAppts = () => async (dispatch) => {
	try {
        dispatch({ type: APPT_LIST_REQUEST })
        
        const { data }=awiat fetch.get('')
	}
};
