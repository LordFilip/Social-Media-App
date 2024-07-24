import { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'

const useLogin = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)
  const [loginError, setLoginError] = useState(null)

  const login = async (inputs) => {
    // Reset error before making a new login attempt
    setLoginError(null)

    // Check for missing inputs
    if (!inputs.email || !inputs.password) {
      setLoginError('Please fill all fields')
      return false
    }

    try {
      // Attempt to sign in with Firebase
      const userCred = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      )

      if (userCred) {
        // Fetch user document from Firestore
        const docRef = doc(firestore, 'users', userCred.user.uid)
        const docSnap = await getDoc(docRef)
        console.log(userCred.user.email)

        if (docSnap.exists()) {
          // Store user info in localStorage
          localStorage.setItem('user-info', JSON.stringify(docSnap.data()))
          return true // Indicate successful login
        } else {
          setLoginError('User document not found in Firestore')
          return false // Indicate failure
        }
      }
      return false
    } catch (err) {
      // Set and log error
      setLoginError(err.message || 'An unexpected error occurred during login')
      console.error('Error logging in:', err)
      return false // Indicate failure
    }
  }

  return { user, loading, error: loginError, login }
}

export default useLogin
