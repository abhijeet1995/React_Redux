import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { setAlert } from "../redux/actions/alert";
import PropTypes from 'prop-types'
import { register } from '../redux/actions/auth'

const Register = ({ setAlert,register }) => {

	const [message,setMessage] = useState()
	const [values, setValues] = useState({
		name: "",
		email: "",
		password: "",
		error: "",
		success: false
	});

	const { name, email, password, error, success } = values;
	const handleChange = name => event => {
		setValues({ ...values, error: false, [name]: event.target.value });
		console.log(values)

	};




	const clickSubmit = event => {
		event.preventDefault();
		setValues({ ...values, error: false })
		register({ name, email, password })

	};


	const signUpForm = () => (
		<form>
			<div className="form-group">
				<label className="text-muted">Name</label>
				<input
					onChange={handleChange("name")}
					type="text"
					className="form-control"
					value={name}
				/>
			</div>

			<div className="form-group">
				<label className="text-muted">Email</label>
				<input
					onChange={handleChange("email")}
					type="email"
					className="form-control"
					value={email}

				/>
			</div>

			<div className="form-group">
				<label className="text-muted">Password</label>
				<input
					onChange={handleChange("password")}
					type="password"
					className="form-control"
					value={password}
				/>
			</div>
			<button onClick={clickSubmit} className="btn btn-primary">
				Signup
			</button>
		</form>
	);


	


	return (
		<div className="row">
			<div className="col-sm-3 col-md-6 col-lg-2">

			</div>
			<div className="col-sm-9 col-md-6 col-lg-10">
				{signUpForm()}
			
			</div>


		</div >
	);
};



Register.propTypes = {
	setAlert: PropTypes.func.isRequired,
	resgiter: PropTypes.func.isRequired,
	
}

// const mapStaeToProps = state => ({
// 	isAuthenticated: state.auth.isAuthenticated,
// 	loading: state.auth.loading
// })



export default connect(null, { setAlert, register })(Register);
