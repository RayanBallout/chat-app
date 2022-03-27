import React from "react"
import "./chatModule.css"
import LowerBar from "./LowerBar"
import MessagesContainer from "./MessagesContainer"
import UpperBar from "./UpperBar"

const ChatModule = () => {
	return (
		<div className="chat-module-container">
			<UpperBar />
			<MessagesContainer />
			<LowerBar />
		</div>
	)
}

export default ChatModule
