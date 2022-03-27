import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { useState } from "react"
import { auth, db } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useRegister = () => {
	const [error, setError] = useState(false)
	const [isPending, setIsPending] = useState(false)
	const { dispatch } = useAuthContext()

	const register = async (email, password, username, firstName, lastName) => {
		setError(null)
		setIsPending(true)

		try {
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredentials) => {
					updateProfile(userCredentials.user, {
						displayName: username,
					})
						.then(() => {
							setDoc(doc(db, "users", userCredentials.user.uid), {
								firstName,
								lastName,
								email,
								username,
								photoUrlPath: "",
							})
								.then(() => {
									dispatch({
										type: "LOGIN",
										payload: userCredentials.user,
									})
									setIsPending(false)
								})
								.catch(() => {
									setError(
										"There has been an error while registering user"
									)
									setIsPending(false)
								})
						})
						.catch(() => {
							setError(
								"There has been an error while registering user"
							)
							setIsPending(false)
						})
				})
				.catch(() => {
					setError("There has been an error while registering user")
					setIsPending(false)
				})
		} catch (err) {
			setError("There has been an error while registering user")
			setIsPending(false)
		}
	}

	return { register, error, isPending }
}
