import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./components/Login"
import Register from "./components/register"
import ChatComponent from "./components/ChatComponent"
import { useState } from "react"
import { GeneralContext } from "./context/generalContext"
import AddUser from "./components/AddUser"
import Settings from "./components/Settings"

function App() {
	const [addUserActive, setAddUserActive] = useState(false)
	const [chatIsOpen, setChatIsOpen] = useState(true)
	const [settingsIsOpen, setSettingsIsOpen] = useState(true)

	return (
		<div className="App">
			<GeneralContext.Provider
				value={{ setAddUserActive, setSettingsIsOpen, setChatIsOpen }}
			>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route
							path="/chats"
							element={<ChatComponent chatIsOpen={chatIsOpen} />}
						/>
					</Routes>
				</BrowserRouter>
				<AddUser isActive={addUserActive} />
				<Settings isActive={settingsIsOpen} />
			</GeneralContext.Provider>
		</div>
	)
}

export default App
