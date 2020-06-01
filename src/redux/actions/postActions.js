import axios from 'axios'
import {
API_DONE,
API_FAILURE
} from './type';
import { setAlert } from './alert'


export const fetchPosts = () => dispatch =>{
	axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
		console.log("Response",res.data)
		dispatch({
			type:API_DONE,
			payload:res.data
		})
	}).catch((err)=>{
		console.log(err)

	})
}