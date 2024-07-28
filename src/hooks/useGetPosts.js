import { useState, useEffect } from 'react'
import { firestore } from '../firebase/config'
import { doc, onSnapshot } from 'firebase/firestore' // Updated: Import onSnapshot

const useGetPosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPosts = () => {
      // Retrieve user data from local storage
      const userInfo = localStorage.getItem('user-info')
      if (!userInfo) {
        setError('User info is missing in local storage')
        setLoading(false)
        return
      }

      const { uid } = JSON.parse(userInfo) // Extract UID from user-info

      if (!uid) {
        setError('User ID is missing in user-info')
        setLoading(false)
        return
      }

      try {
        // Set up a real-time listener for the user's document
        const userDocRef = doc(firestore, 'users', uid) // Updated: Use onSnapshot for real-time updates
        const unsubscribe = onSnapshot(
          userDocRef,
          (docSnap) => {
            // Updated: Set up onSnapshot listener
            if (docSnap.exists()) {
              const userData = docSnap.data()
              // Assuming posts are stored as an array in the user document
              setPosts(userData.posts || [])
              setLoading(false)
            } else {
              setError('User document not found')
              setLoading(false)
            }
          },
          (err) => {
            setError(
              err.message || 'An unexpected error occurred while fetching posts'
            )
            setLoading(false)
          }
        )

        // Cleanup the listener on unmount
        return () => unsubscribe() // Updated: Cleanup onSnapshot listener
      } catch (err) {
        setError(
          err.message || 'An unexpected error occurred while fetching posts'
        )
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return { posts, loading, error }
}

export default useGetPosts

/*

import { useState, useEffect } from 'react'
import { firestore } from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'

const useGetPosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      setError(null)

      // Retrieve user data from local storage
      const userInfo = localStorage.getItem('user-info')
      if (!userInfo) {
        setError('User info is missing in local storage')
        setLoading(false)
        return
      }

      const { uid } = JSON.parse(userInfo) // Extract UID from user-info

      if (!uid) {
        setError('User ID is missing in user-info')
        setLoading(false)
        return
      }

      try {
        // Get user document
        const userDocRef = doc(firestore, 'users', uid)
        const userDocSnap = await getDoc(userDocRef)

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data()
          // Assuming posts are stored as an array in the user document
          setPosts(userData.posts || [])
        } else {
          setError('User document not found')
        }
      } catch (err) {
        setError(
          err.message || 'An unexpected error occurred while fetching posts'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return { posts, loading, error }
}

export default useGetPosts
*/
