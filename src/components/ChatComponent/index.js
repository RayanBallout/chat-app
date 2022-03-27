import React from "react"
import ChatListings from "../ChatListings"
import ChatModule from "../ChatModule"
import "./ChatComponent.css"
const ChatComponent = ({ chatIsOpen }) => {
	return (
		<div className="chat-container">
			<ChatListings chatIsOpen={chatIsOpen} />
			<ChatModule />
		</div>
	)
}

export default ChatComponent
