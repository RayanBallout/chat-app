import React from "react"
import userImage from "../../assets/images/user.jpg"
import "./addUser.css"

const UserSearched = () => {
	return (
		<div className="user-container">
			<div className="left-content">
				<img src={userImage} className="user-image" alt="user" />
				<p className="username">Username</p>
			</div>
			<div className="right-content">
				<button className="start">Start Chat</button>
			</div>
		</div>
	)
}

export default UserSearched
