import { API_DONE} from "../actions/type";

const initialState = {
	items: [],
};
export default function (state = initialState, action){
	const { type, payload } = action
	console.log(payload)
	switch (type) {
		case API_DONE:
			return {
				...state,
				items:payload
			}
}}