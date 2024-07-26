import { useState } from 'react'
import { firestore } from '../firebase/config'
import { doc, updateDoc, arrayUnion } from 'firebase/firestore'

const useSetPost = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const addPost = async (post) => {
    setLoading(true)
    setError(null)

    try {
      // Retrieve user info from localStorage
      const userInfo = JSON.parse(localStorage.getItem('user-info'))

      if (!userInfo || !userInfo.uid) {
        throw new Error('User ID not found in localStorage')
      }

      const uid = userInfo.uid

      const userDocRef = doc(firestore, 'users', uid)
      await updateDoc(userDocRef, {
        posts: arrayUnion(post),
      })
      setLoading(false)
      return true // Indicate successful addition
    } catch (err) {
      setError(
        err.message || 'An unexpected error occurred while adding the post'
      )
      console.error('Error adding post:', err)
      setLoading(false)
      return false // Indicate failure
    }
  }

  return { addPost, loading, error }
}

export default useSetPost
