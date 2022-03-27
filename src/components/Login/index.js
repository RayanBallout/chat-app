import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useLogin } from "../../hooks/useLogin"
import Loading from "../Loading"
import "./login.css"
import alert from "../../assets/icons/alert.svg"

const Login = () => {
	const { login, isPending, error, passwordError } = useLogin()

	// form fields
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	// handle submit
	const handleSubmit = (e) => {
		e.preventDefault()
		login(email, password)
	}

	return (
		<div className="login">
			{isPending && <Loading />}
			<div className="login-card">
				<h1>Login</h1>
				<form className="login-form" onSubmit={handleSubmit}>
					<div className="field-input">
						<label htmlFor="email">Email:</label>
						<input
							type="text"
							id="email"
							value={email}
							required
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Please enter your email"
						/>
					</div>
					<div className="field-input">
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							value={password}
							required
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Please enter your password"
						/>
						{passwordError && (
							<p className="error">
								<img
									src={alert}
									className="alert"
									alt="alert"
								/>
								{passwordError}
							</p>
						)}
					</div>
					<div className="field-input">
						<input type="submit" className="submit" value="Login" />
					</div>
				</form>
				<p className="no-account">
					Do not have an account? <Link to="/register">Register</Link>
				</p>
			</div>
		</div>
	)
}

export default Login
