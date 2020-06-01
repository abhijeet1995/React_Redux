import axios from 'axios'
import { REGISTER_SUCCESS, REGISTER_FAILURE, 
	LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, 
	USER_LOADED,AUTH_ERROR } from './type';
import { setAlert } from './alert'
import setAuthToken from '../utils/setAuthToken';


//Load user

export const loadUser = () =>async dispatch =>{
	if(localStorage.token){
		setAuthToken(localStorage.token)
	}
	try{
		const res = await axios.get('http://localhost:8000/api/loaduser');
		dispatch({
			type:USER_LOADED,
			payload:res.data
			
		})
		
	}catch(err){
		dispatch({
			type:AUTH_ERROR
		})
	}
}




//Register User

export const register = ({ name,email,password}) => async dispatch =>{
	const config = {
		headers :{
			'Content-Type':'application/json'
		}
	}


const body =JSON.stringify({name,email,password})

try {
	const res = await axios.post('http://localhost:8000/api/signup',body,config);
	console.log("=========",res.data)
	dispatch({
		type:REGISTER_SUCCESS,
		payload:res.data
	})
} catch(err){
	console.log("@@",err.response.data)
	const errors = err.response.data.errors;
	if(errors){
		errors.forEach(error=>dispatch(setAlert(error.msg,'danger')))
	}
	dispatch({
		type:REGISTER_FAILURE
	})
}
}


//Login

export const login = ( name, email ) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}
	const body = JSON.stringify( name, email )
	try {
		const res = await axios.post('http://localhost:8000/api/signin', body, config);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		})
	} catch (err) {
		const errors = err.response.data.errors;
		if (errors) {
			errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
		}
		dispatch({
			type: LOGIN_FAILURE
		})
	}
}



