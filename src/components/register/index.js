import React from "react"
import "./register.css"

const Register = () => {
	return (
		<div className="register">
			<div className="register-card">
				<h1>Register</h1>
				<form className="register-form">
					<label htmlFor="first_name">First Name:</label>
					<input
						type="text"
						id="first_name"
						placeholder="Please enter your first name"
					/>
					<label htmlFor="last_name">Last Name:</label>
					<input
						type="text"
						id="last_name"
						placeholder="Please enter your last name"
					/>
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						placeholder="Please enter a username"
					/>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						placeholder="Please enter your password"
					/>
					<label htmlFor="password">Confirm Password:</label>
					<input
						type="password"
						id="password"
						placeholder="Please confirm your password"
					/>
					<input type="submit" className="submit" value="Register" />
				</form>
				<p className="no-account">
					Already have an account? <a href="">Login</a>
				</p>
			</div>
		</div>
	)
}

export default Register
