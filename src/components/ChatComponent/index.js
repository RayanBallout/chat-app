import React from "react"
import ChatListings from "../ChatListings"
import ChatModule from "../ChatModule"
import "./ChatComponent.css"
const ChatComponent = () => {
	return (
		<div className="chat-container">
			<ChatListings />
			<ChatModule />
		</div>
	)
}

export default ChatComponent
