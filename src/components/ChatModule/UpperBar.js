import React from "react"
import userImage from "../../assets/images/user.jpg"
import "./chatModule.css"

const UpperBar = () => {
	return (
		<div className="upper-bar-container">
			<img src={userImage} alt="user" className="user-image" />
			<p>Username</p>
		</div>
	)
}

export default UpperBar
