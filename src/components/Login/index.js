import React from "react"
import "./login.css"

const Login = () => {
	return (
		<div className="login">
			<div className="login-card">
				<h1>Login</h1>
				<form className="login-form">
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						placeholder="Please enter username"
					/>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						placeholder="Please enter your password"
					/>
					<input type="submit" className="submit" value="Login" />
				</form>
				<p className="no-account">
					Do not have an account? <a href="">Register</a>
				</p>
			</div>
		</div>
	)
}

export default Login
