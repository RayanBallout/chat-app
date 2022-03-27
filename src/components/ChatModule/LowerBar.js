import React from "react"
import "./chatModule.css"
import sendIcon from "../../assets/icons/send.svg"

const LowerBar = () => {
	return (
		<div className="lower-bar">
			<form className="lower-bar-form">
				<input
					type="text"
					className="text-input"
					placeholder="Enter text message"
				/>
				<button className="send-message">
					<img src={sendIcon} alt="send" className="send-image" />
				</button>
			</form>
		</div>
	)
}

export default LowerBar
