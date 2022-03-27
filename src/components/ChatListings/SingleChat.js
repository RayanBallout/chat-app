import React, { useState } from "react"
import userImage from "../../assets/images/user.jpg"
import threeDots from "../../assets/icons/three-dots.svg"
import check from "../../assets/icons/check.svg"
import "./chatListings.css"

const SingleChat = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<div className="single-chat-container">
			<div className="single-chat-content">
				<div className="left-content">
					<img src={userImage} className="user-image" alt="user" />
					<div className="text">
						<p className="username">Username</p>
						<span className="last-message">
							<img src={check} className="check" alt="check" />
							last message
						</span>
					</div>
				</div>
				<div className="right-content">
					<button
						className="three-dots"
						onClick={() => {
							setMenuOpen(!menuOpen)
						}}
					>
						<img src={threeDots} alt="menu" />
					</button>
					<div className={`menu ${menuOpen ? "open" : ""}`}>
						<button className="menu-item">Delete</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SingleChat
