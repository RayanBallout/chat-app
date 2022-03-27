import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./components/Login"
import Register from "./components/register"
import ChatComponent from "./components/ChatComponent"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/chats" element={<ChatComponent />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
