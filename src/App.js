import "./App.css"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Login from "./components/Login"
import Register from "./components/register"
import ChatComponent from "./components/ChatComponent"
import { useState } from "react"
import AddUser from "./components/AddUser"
import Settings from "./components/Settings"
import { useAuthContext } from "./hooks/useAuthContext"
import { GeneralContext } from "./context/generalContext"

function App() {
	const [addUserActive, setAddUserActive] = useState(false)
	const [chatIsOpen, setChatIsOpen] = useState(true)
	const [settingsIsOpen, setSettingsIsOpen] = useState(false)

	const { user, authIsReady } = useAuthContext()

	return (
		<div className="App">
			{authIsReady && (
				<GeneralContext.Provider
					value={{
						setAddUserActive,
						setSettingsIsOpen,
						setChatIsOpen,
					}}
				>
					<BrowserRouter>
						<Routes>
							<Route
								exact
								path="/"
								element={
									user ? (
										<ChatComponent
											chatIsOpen={chatIsOpen}
										/>
									) : (
										<Navigate to="/login" />
									)
								}
							/>
							<Route
								exact
								path="/login"
								element={user ? <Navigate to="/" /> : <Login />}
							/>
							<Route
								exact
								path="/register"
								element={
									user ? <Navigate to="/" /> : <Register />
								}
							></Route>
						</Routes>
					</BrowserRouter>
					{user && (
						<>
							<AddUser isActive={addUserActive} />
							<Settings isActive={settingsIsOpen} />
						</>
					)}
				</GeneralContext.Provider>
			)}
		</div>
	)
}

export default App
