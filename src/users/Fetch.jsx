import React,{useEffect} from 'react'
import {fetchPosts} from '../redux/actions/postActions'
import { connect } from "react-redux";
import  PropTypes from 'prop-types'

const Fetch = (postReducer,fetchPosts) => {

	useEffect(()=>{
		console.log(postReducer)
		fetchPosts()
	},[])

	return (
		
		<div>
		{
			postReducer.map((data,i)=>(
			<p>{data.title}</p>
			))
		}	
		</div>
	)
}

Fetch.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	postReducer: PropTypes.array.isRequired,
}
const mapStateToProps = state => ({
	postReducer:state.postReducer.items,
})
export default connect(mapStateToProps, { fetchPosts })(Fetch);
