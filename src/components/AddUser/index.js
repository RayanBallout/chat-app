import React, { useContext } from "react"
import "./addUser.css"
import searchIcon from "../../assets/icons/search.svg"
import UserSearched from "./UserSearched"
import close from "../../assets/icons/close.svg"
import { GeneralContext } from "../../context/generalContext"

const AddUser = ({ isActive }) => {
	const { setAddUserActive } = useContext(GeneralContext)

	if (isActive) {
		return (
			<div className="add-user-container">
				<div className="add-user-content">
					<button
						className="close"
						onClick={() => setAddUserActive(false)}
					>
						<img src={close} alt="close" />
					</button>
					<h3>Add User:</h3>
					<div className="input-field">
						<img
							src={searchIcon}
							className="search-icon"
							alt="search"
						/>
						<input
							type="search"
							className="search-input"
							placeholder="Enter username"
						/>
					</div>
					<div className="user-listings">
						<UserSearched />
						<UserSearched />
						<UserSearched />
					</div>
				</div>
			</div>
		)
	} else {
		return <></>
	}
}

export default AddUser
