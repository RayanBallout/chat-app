import React, { useContext } from "react"
import userImage from "../../assets/images/user.jpg"
import "./chatModule.css"
import chatIcon from "../../assets/icons/chat.svg"
import { GeneralContext } from "../../context/generalContext"

const UpperBar = () => {
	const { setChatIsOpen } = useContext(GeneralContext)

	return (
		<div className="upper-bar-container">
			<div className="profile-info">
				<img src={userImage} alt="user" className="user-image" />
				<p>Username</p>
			</div>
			<button
				className="open-chat"
				onClick={() => {
					setChatIsOpen(true)
				}}
			>
				<img src={chatIcon} alt="chat icon" />
			</button>
		</div>
	)
}

export default UpperBar
