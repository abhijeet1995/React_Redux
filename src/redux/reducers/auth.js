import { REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, USER_LOADED,AUTH_ERROR } from "../actions/type";

const initialState = {
	token:localStorage.getItem('token'),
	isAuthenticated:null,
	loading:true,
	user:null


}



export default function(state=initialState,action){
	
	const {type ,payload} = action
	switch(type){
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				user: payload
			}
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:	
			localStorage.setItem('token',payload.token)
			return {
				...state,
				...payload,
				isAuthenticated:true,
				loading:false
			}
		case REGISTER_FAILURE:
		case AUTH_ERROR:
		case LOGIN_FAILURE:	
			localStorage.removeItem('token');
			return{
				...state,
				token:null,
				loading:false,
				isAuthenticated:false
			}
			default:
				return state
			
	}
}

