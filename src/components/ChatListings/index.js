import React from "react"
import ProfileBar from "../ProfileBar"
import "./chatListings.css"
import SingleChat from "./SingleChat"

const ChatListings = () => {
	return (
		<div className="chat-listings-container">
			<ProfileBar />
			<div className="chat-list">
				<SingleChat />
				<SingleChat />
				<SingleChat />
				<SingleChat />
			</div>
		</div>
	)
}

export default ChatListings
