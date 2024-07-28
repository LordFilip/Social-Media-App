import { useState } from 'react'
import { firestore } from '../firebase/config'
import { doc, getDoc, updateDoc } from 'firebase/firestore'

const useSetPost = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const addPost = async (postText) => {
    setLoading(true)
    setError(null)

    try {
      // Retrieve user info from localStorage
      const userInfo = JSON.parse(localStorage.getItem('user-info'))

      if (!userInfo || !userInfo.uid) {
        throw new Error('User ID not found in localStorage')
      }

      const uid = userInfo.uid

      // Create the post object with text and timestamp
      const post = {
        text: postText,
        time: new Date().toISOString(),
      }

      const userDocRef = doc(firestore, 'users', uid)

      // Fetch the current posts array
      const userDocSnap = await getDoc(userDocRef)
      if (userDocSnap.exists()) {
        const userDoc = userDocSnap.data()
        const currentPosts = userDoc.posts || []

        // Add the new post to the beginning of the array
        const updatedPosts = [post, ...currentPosts]

        // Update the Firestore document with the new array
        await updateDoc(userDocRef, {
          posts: updatedPosts,
        })
        setLoading(false)
        return true // Indicate successful addition
      } else {
        throw new Error('User document not found')
      }
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
