import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
	const [error, setError] = useState(false)
	const [isPending, setIsPending] = useState(false)
	const [passwordError, setPasswordError] = useState("")
	const { dispatch } = useAuthContext()

	const login = async (email, password) => {
		setError(null)
		setIsPending(true)

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredentials) => {
				dispatch({ type: "LOGIN", payload: userCredentials.user })
				setIsPending(false)
			})
			.catch((error) => {
				if (error.code === "auth/wrong-password") {
					setPasswordError("Wrong password")
				}
				setError(error)
				setIsPending(false)
			})
	}

	return { login, isPending, error, passwordError }
}
