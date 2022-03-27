import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyCoC_sl5AuVbpWHEoobDXKwPO4E9Hjl7Xk",
	authDomain: "chat-application-d9a93.firebaseapp.com",
	projectId: "chat-application-d9a93",
	storageBucket: "chat-application-d9a93.appspot.com",
	messagingSenderId: "432306903555",
	appId: "1:432306903555:web:31d4d441ddf5eabf6b4c36",
}

const app = initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore(app)

export { auth, db }
