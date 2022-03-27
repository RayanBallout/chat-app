import React from "react"
import userImage from "../../assets/images/user.jpg"
import settingsIcons from "../../assets/icons/settings.svg"
import "./profileBar.css"

const ProfileBar = () => {
	return (
		<div className="profile-bar-container">
			<div className="info-container">
				<img src={userImage} className="user-image" alt="user image" />
				<p>Rayan Ballout</p>
			</div>
			<div className="settings-container">
				<img src={settingsIcons} alt="settings" />
			</div>
		</div>
	)
}

export default ProfileBar
