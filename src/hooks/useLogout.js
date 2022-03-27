import { useAuthContext } from "./useAuthContext"
import { useState } from "react"
import { signOut } from "firebase/auth"
import { auth } from "../firebase/config"

export const useLogout = () => {
	const [error, setError] = useState(false)
	const [isPending, setIsPending] = useState(null)
	const { dispatch } = useAuthContext()

	const logout = async () => {
		setIsPending(true)
		setError(null)

		signOut(auth)
			.then(() => {
				dispatch({ type: "LOGOUT" })
				setIsPending(false)
			})
			.catch(() => {
				setError("Sorry there was a problem logging you out")
				setIsPending(false)
			})
	}

	return { logout, error, isPending }
}
