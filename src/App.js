import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./components/Login"
import Register from "./components/register"
import ChatComponent from "./components/ChatComponent"
import { useState } from "react"
import { GeneralContext } from "./context/generalContext"
import AddUser from "./components/AddUser"

function App() {
	const [addUserActive, setAddUserActive] = useState(false)

	return (
		<div className="App">
			<GeneralContext.Provider value={{ setAddUserActive }}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/chats" element={<ChatComponent />} />
					</Routes>
				</BrowserRouter>
				<AddUser isActive={addUserActive} />
			</GeneralContext.Provider>
		</div>
	)
}

export default App
