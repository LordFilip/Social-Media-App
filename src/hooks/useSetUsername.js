import { useState } from 'react'
import { firestore } from '../firebase/config'
import { doc, getDoc, updateDoc } from 'firebase/firestore'

const useSetUsername = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const setUsername = async (newUsername) => {
    setLoading(true)
    setError(null)

    try {
      // Retrieve user info from localStorage
      const userInfo = JSON.parse(localStorage.getItem('user-info'))

      if (!userInfo || !userInfo.uid) {
        throw new Error('User ID not found in localStorage')
      }

      const uid = userInfo.uid

      // Get the reference to the user document
      const userDocRef = doc(firestore, 'users', uid)

      // Fetch the current user document
      const userDocSnap = await getDoc(userDocRef)
      if (userDocSnap.exists()) {
        // Update the Firestore document with the new username
        await updateDoc(userDocRef, {
          username: newUsername,
        })
        setLoading(false)
        return true // Indicate successful update
      } else {
        throw new Error('User document not found')
      }
    } catch (err) {
      setError(
        err.message ||
          'An unexpected error occurred while updating the username'
      )
      console.error('Error updating username:', err)
      setLoading(false)
      return false // Indicate failure
    }
  }

  return { setUsername, loading, error }
}

export default useSetUsername
