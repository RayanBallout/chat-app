import React, { useContext } from "react"
import "./settings.css"
import user from "../../assets/images/user.jpg"
import { GeneralContext } from "../../context/generalContext"
import close from "../../assets/icons/close.svg"
import { useLogout } from "../../hooks/useLogout"
import Loading from "../Loading"

const Settings = ({ isActive }) => {
	const { logout, isPending } = useLogout()
	const { setSettingsIsOpen } = useContext(GeneralContext)
	if (isActive) {
		return (
			<div className="settings-popup-container">
				{isPending && <Loading />}
				<div className="settings-popup-content">
					<button
						className="close"
						onClick={() => setSettingsIsOpen(false)}
					>
						<img src={close} alt="close" />
					</button>
					<div className="profile">
						<h3>Profile</h3>
						<img src={user} alt="user" className="profile-image" />
						<div className="buttons-container">
							<label htmlFor="image_upload" className="replace">
								REPLACE
							</label>
							<input
								type="file"
								className="replace-input"
								id="image_upload"
							/>
							<button className="delete">DELETE</button>
						</div>
					</div>
					<div className="form-fields">
						<h3>Information</h3>
						<form>
							<div className="input-field">
								<label htmlFor="first_name">First Name:</label>
								<input
									type="text"
									id="first_name"
									placeholder="First name cannot be empty"
								/>
							</div>
							<div className="input-field">
								<label htmlFor="last_name">Last Name:</label>
								<input
									type="text"
									id="last_name"
									placeholder="Last name cannot be empty"
								/>
							</div>
							<div className="submit-field">
								<input type="submit" value="Submit" />
							</div>
						</form>
					</div>
					<hr />
					<div className="form-fields">
						<h3>Change Password</h3>
						<form>
							<div className="input-field">
								<label htmlFor="current_pass">
									Current Password:
								</label>
								<input type="password" id="current_pass" />
							</div>
							<div className="input-field">
								<label htmlFor="new_pass">New Password:</label>
								<input type="password" id="new_pass" />
							</div>
							<div className="input-field">
								<label htmlFor="confirm_pass">
									Confirm Password:
								</label>
								<input type="password" id="confirm_pass" />
							</div>
							<div className="submit-field">
								<input type="submit" value="Submit" />
							</div>
						</form>
					</div>
					<hr />
					<div className="logout">
						<button className="logout-btn" onClick={logout}>
							LOGOUT
						</button>
					</div>
				</div>
			</div>
		)
	} else {
		return <></>
	}
}

export default Settings
