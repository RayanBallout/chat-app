import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useRegister } from "../../hooks/useRegister"
import "./register.css"
import alert from "../../assets/icons/alert.svg"
import Loading from "../Loading"

const Register = () => {
	const { register, isPending, error } = useRegister()

	// states for inputs
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [userName, setUserName] = useState("")
	const [password, setPassword] = useState("")
	const [confPassword, setConfPassword] = useState("")

	const [passwordError, setPasswordError] = useState("")
	const [confirmPasswordError, setConfirmPasswordError] = useState("")

	// handle submit registration
	const handleSubmit = (e) => {
		e.preventDefault()
		if (password.length < 8) {
			setPasswordError("Password must be at leat 8 characters long")
			return
		}

		if (password !== confPassword) {
			setConfirmPasswordError("Password do not match")
			return
		}

		register(email, password, userName, firstName, lastName)
	}
	return (
		<div className="register">
			{isPending && <Loading />}
			<div className="register-card">
				<h1>Register</h1>
				<form className="register-form" onSubmit={handleSubmit}>
					<div className="register-field">
						<label htmlFor="first_name">First Name:*</label>
						<input
							type="text"
							id="first_name"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							placeholder="Please enter your first name"
							required
						/>
					</div>
					<div className="register-field">
						<label htmlFor="last_name">Last Name:*</label>
						<input
							type="text"
							id="last_name"
							value={lastName}
							placeholder="Please enter your last name"
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
					</div>
					<div className="register-field">
						<label htmlFor="email">Email:*</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Please enter your email"
							required
						/>
					</div>
					<div className="register-field">
						<label htmlFor="username">Username:*</label>
						<input
							type="text"
							id="username"
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
							placeholder="Please enter a username"
							required
						/>
					</div>
					<div className="register-field">
						<label htmlFor="password">Password:*</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Please enter your password"
							required
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
					<div className="register-field">
						<label htmlFor="password">Confirm Password:*</label>
						<input
							type="password"
							id="password"
							value={confPassword}
							onChange={(e) => {
								setConfPassword(e.target.value)
							}}
							placeholder="Please confirm your password"
							required
						/>
						{confirmPasswordError && (
							<p className="error">
								<img
									src={alert}
									className="alert"
									alt="alert"
								/>
								{confirmPasswordError}
							</p>
						)}
					</div>
					<div className="register-field">
						<input
							type="submit"
							className="submit"
							value="Register"
						/>
					</div>
				</form>
				<p className="no-account">
					Already have an account? <Link to="/">Login</Link>
				</p>
			</div>
		</div>
	)
}

export default Register
