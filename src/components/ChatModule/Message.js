import React from "react"
import "./chatModule.css"

const Message = () => {
	return (
		<>
			<div className="message recieved">
				<div className="message-content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Pariatur, sequi et. Ut.
				</div>
				<div className="message-timestamp">13:13 PM</div>
			</div>
			<div className="message sent">
				<div className="message-content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Itaque, error!
				</div>
				<div className="message-timestamp">13:13 PM</div>
			</div>
		</>
	)
}

export default Message
