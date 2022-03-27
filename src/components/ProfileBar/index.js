import React, { useContext } from "react"
import userImage from "../../assets/images/user.jpg"
import settingsIcons from "../../assets/icons/settings.svg"
import plusIcon from "../../assets/icons/plus.svg"
import "./profileBar.css"
import { GeneralContext } from "../../context/generalContext"

const ProfileBar = () => {
	const { setAddUserActive } = useContext(GeneralContext)
	return (
		<div className="profile-bar-container">
			<div className="info-container">
				<img src={userImage} className="user-image" alt="user" />
				<p>Rayan Ballout</p>
			</div>
			<div className="settings-container">
				<button
					onClick={() => {
						setAddUserActive(true)
					}}
					className="setting-btn"
					title="Add user"
				>
					<img src={plusIcon} alt="add" />
				</button>
				<button className="setting-btn" title="Settings">
					<img src={settingsIcons} alt="settings" />
				</button>
			</div>
		</div>
	)
}

export default ProfileBar
