import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from '../redux/actions/auth'
import PropTypes from 'prop-types';


const Login = ({ login ,isAuthenticated}) => {
	const [values, setValues] = useState({
		email: "",
		password: ""
	});

	const { email, password } = values;

	const handleChange = name => event => {
		setValues({ ...values, [name]: event.target.value });
	};

	if (isAuthenticated) {
		return <Redirect to='/' />
	}

	const clickSubmit = event => {
		event.preventDefault();
		setValues({ ...values });
		login({ email, password })
	};

	const signUpForm = () => (
		<form>
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
				submit
			</button>
		</form>
	);

	return (
		<div>
			{signUpForm()}
		</div>
	);
};

Login.propTypes = {
	isAuthenticated: PropTypes.bool,
	login: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	alert: state.alert
})
export default connect(mapStateToProps, { login })(Login);