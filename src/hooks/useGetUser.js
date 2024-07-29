import { useState, useEffect } from 'react'
import { firestore } from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'

const useGetUser = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = JSON.parse(localStorage.getItem('user-info'))

      if (!userInfo || !userInfo.uid) {
        setError('User ID not found in localStorage')
        return
      }

      const uid = userInfo.uid

      setLoading(true)
      setError(null)

      try {
        const userDocRef = doc(firestore, 'users', uid)
        const userDocSnap = await getDoc(userDocRef)

        if (userDocSnap.exists()) {
          setUser(userDocSnap.data())
        } else {
          throw new Error('User document not found')
        }
      } catch (err) {
        setError(
          err.message || 'An unexpected error occurred while fetching user data'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  return { user, loading, error }
}

export default useGetUser
